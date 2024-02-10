# tests/test_weston.py
import json
from django.test import Client
import pytest
from django.core.files.uploadedfile import SimpleUploadedFile
from weston.views import send_email, guardar_anuncio

@pytest.mark.django_db
def test_send_email():
    client = Client()
    data = {
        "name": "John Doe",
        "email": "john@example.com",
        "dogsname": "Buddy",
        "phone": "123-456-7890",
        "options": "Option A",
        "message": "Hello, this is a test message.",
    }

    response = client.post("/send_email/", json.dumps(data), content_type="application/json")
    assert response.status_code == 200
    assert "Correo electrónico enviado con éxito" in response.content.decode("utf-8")

@pytest.mark.django_db
def test_guardar_anuncio():
    client = Client()
    data = {
        "codigo": "A001",
        "descripcion": "Anuncio de prueba",
    }
    # Simula la carga de un archivo de imagen
    image_content = b'\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x01\x00\x00\x00\x01\x08\x02\x00\x00\x00z\xd4\x89\xd2\x00\x00\x00\x0bIDAT\x08\xd7c\xf8\xff\xff?\x00\x05\xfe\x05\x02\x05\x00\x00\x00\x00IEND\xaeB`\x82'
    uploaded_file = SimpleUploadedFile("test_image.png", image_content, content_type="image/png")
    
    response = client.post("/guardar_anuncio/", data, {"file": uploaded_file})
    assert response.status_code == 201
    assert "Anuncio creado con éxito" in response.content.decode("utf-8")
