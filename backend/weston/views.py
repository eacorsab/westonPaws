from django.http import JsonResponse
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
import pyrebase
from datetime import datetime
from django.views.decorators.csrf import csrf_exempt
from google.cloud import storage as gcs
import json
import ssl
from smtplib import SMTP

context = ssl._create_unverified_context()

with SMTP("smtp.gmail.com", port=587) as server:
    server.starttls(context=context)

config = {
    "apiKey": "AIzaSyC610AjKjTXUWEgmJ8wTt4rFs4YR0JzI-c",
    "authDomain": "westonpwas.firebaseapp.com",
    "databaseURL": "https://westonpwas-default-rtdb.firebaseio.com",
    "projectId": "westonpwas",
    "storageBucket": "westonpwas.appspot.com",
    "messagingSenderId": "315641320874",
    "appId": "1:315641320874:web:2500801b9ed147e7b647d3",
    "measurementId": "G-LZQDL455C6",
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()
storage = firebase.storage()


@csrf_exempt
def send_email(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body.decode("utf-8"))

            name = data.get("name")
            email = data.get("email")
            dogsname = data.get("dogsname")
            phone = data.get("phone")
            options = data.get("options")
            message = data.get("message")

            email_message = f"Name: {name}\nEmail: {email}\nDog's Name: {dogsname}\nPhone: {phone}\nOptions: {options}\nMessage: {message}"

            subject = "New Contact Form Submission"
            from_email = "gabrielaramosbaq@gmail.com"
            to_email = [email]

            send_mail(subject, email_message, from_email, to_email)

            return JsonResponse(
                {"message": "Correo electrónico enviado con éxito"}, status=200
            )
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Método no permitido"}, status=405)


def obtener_datos(request, coleccion):
    try:
        if coleccion not in ["anuncio", "producto", "galeria"]:
            return JsonResponse({"error": "Colección no válida"}, status=400)

        datos = db.child(coleccion).get()

        if datos is None or datos.val() is None:
            return JsonResponse([], safe=False)

        datos_data = [dato.val() for dato in datos.each()]

        return JsonResponse(datos_data, safe=False)
    except Exception as e:
        print(f"Error: {str(e)}")
        return JsonResponse({"error": str(e)}, status=500)


@csrf_exempt
def guardar_anuncio(request):
    if request.method == "POST":
        try:
            codigo = request.POST.get("codigo")
            descripcion = request.POST.get("descripcion")

            multimedia = request.FILES.get("file")

            if multimedia:
                multimedia_url = upload_file(multimedia)

                if multimedia_url is not None:
                    nuevo_anuncio = {
                        "codigo": codigo,
                        "descripcion": descripcion,
                        "fechaIngreso": datetime.now().isoformat(),
                        "multimedia": multimedia_url,
                    }

                    db.child("anuncio").push(nuevo_anuncio)

                    return JsonResponse(
                        {"message": "Anuncio creado con éxito"}, status=201
                    )
                else:
                    return JsonResponse(
                        {"error": "Error al subir el archivo a Firebase Storage"},
                        status=500,
                    )
            else:
                return JsonResponse(
                    {"error": 'No se proporcionó un archivo válido para "multimedia"'},
                    status=400,
                )
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Método no permitido"}, status=405)


def upload_file(uploaded_file):
    try:
        bucket_name = config["storageBucket"]

        file_url = (
            storage.child(f"uploads/{uploaded_file.name}")
            .put(uploaded_file)
            .get("downloadTokens")
        )

        full_url = f"https://firebasestorage.googleapis.com/v0/b/{bucket_name}/o/uploads%2F{uploaded_file.name}?alt=media&token={file_url}"

        return full_url
    except Exception as e:
        print(f"Error al subir el archivo a Firebase Storage: {str(e)}")
        return None


@csrf_exempt
def guardar_producto(request):
    if request.method == "POST":
        try:
            codigo = request.POST.get("codigo")
            nombre = request.POST.get("nombre")
            descripcion = request.POST.get("descripcion")
            precio = request.POST.get("precio")

            if precio is not None:
                try:
                    precio = float(precio)
                except ValueError:
                    return JsonResponse(
                        {"error": 'El campo "precio" no es un número float válido'},
                        status=400,
                    )

            multimedia = request.FILES.get("file")

            if multimedia:
                multimedia_url = upload_file(multimedia)
                print(multimedia_url)

                if multimedia_url is not None:
                    nuevo_producto = {
                        "codigo": codigo,
                        "nombre": nombre,
                        "descripcion": descripcion,
                        "precio": precio,
                        "fechaIngreso": datetime.now().isoformat(),
                        "multimedia": multimedia_url,
                    }

                    db.child("producto").push(nuevo_producto)

                    return JsonResponse(
                        {"message": "Producto creado con éxito"}, status=201
                    )
                else:
                    return JsonResponse(
                        {"error": "Error al subir el archivo a Firebase Storage"},
                        status=500,
                    )
            else:
                return JsonResponse(
                    {"error": 'No se proporcionó un archivo válido para "multimedia"'},
                    status=400,
                )
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Método no permitido"}, status=405)


@csrf_exempt
def obtener_codigos_y_ids(request):
    if request.method == "GET":
        try:
            anuncios_ref = db.child("anuncio").get()

            if not anuncios_ref:
                return JsonResponse(
                    {"message": "No hay anuncios en la base de datos"}, status=200
                )

            codigos = [
                anuncio["codigo"] for anuncio_id, anuncio in anuncios_ref.items()
            ]

            return JsonResponse({"codigos": codigos}, status=200)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Método no permitido"}, status=405)


@csrf_exempt
def guardar_enGaleria(request):
    if request.method == "POST":
        try:

            codigo = request.POST.get("codigo")
            titulo = request.POST.get("titulo")
            descripcion = request.POST.get("descripcion")

            multimedia = request.FILES.get("file")

            if multimedia:
                multimedia_url = upload_file(multimedia)

                if multimedia_url is not None:
                    nuevo_producto = {
                        "codigo": codigo,
                        "titulo": titulo,
                        "descripcion": descripcion,
                        "fechaIngreso": datetime.now().isoformat(),
                        "multimedia": multimedia_url,
                    }

                    db.child("galeria").push(nuevo_producto)

                    return JsonResponse(
                        {"message": "Archivo guardado en galería con éxito"}, status=201
                    )
                else:
                    return JsonResponse(
                        {"error": "Error al subir el archivo a Firebase Storage"},
                        status=500,
                    )
            else:
                return JsonResponse(
                    {"error": 'No se proporcionó un archivo válido para "multimedia"'},
                    status=400,
                )
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Método no permitido"}, status=405)


def obtener_archivos(request):
    try:
        collections = db.child().get().val()

        return JsonResponse({"collections": collections})
    except Exception as e:
        return JsonResponse({"error": str(e)})


@csrf_exempt
def get_item(request, collection_name, item_id):
    try:
        item = db.child(collection_name).child(item_id).get().val()

        return JsonResponse({"item": item})
    except Exception as e:
        return JsonResponse({"error": str(e)})


@csrf_exempt
def delete_item(request, collection_name, item_id):
    try:
        item = db.child(collection_name).child(item_id).get().val()

        if item is None:
            return JsonResponse({"error": "El elemento no existe."})
        db.child(collection_name).child(item_id).remove()

        if "multimedia" in item:
            image_url = item["multimedia"]
            file_name = image_url.split("/")[-1].split("?")[0]

            print(file_name)

            storage.child("uploads/" + file_name).delete()

        return JsonResponse({"success": True})
    except Exception as e:
        return JsonResponse({"error": str(e)})
