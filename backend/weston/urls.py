from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("guardar_anuncio/", views.guardar_anuncio, name="guardar_anuncio"),
    path("guardar_producto/", views.guardar_producto, name="guardar_producto"),
    path("upload/", views.upload_file, name="upload_file"),
    path("obtener_datos/<str:coleccion>/", views.obtener_datos, name="obtener_datos"),
    path('obtener_codigos_y_ids/', views.obtener_codigos_y_ids, name='obtener_codigos_y_ids'),
    path("guardar_enGaleria/", views.guardar_enGaleria, name="guardar_enGaleria"),
    path("obtener_archivos/", views.obtener_archivos, name="obtener_archivos"),
    path('get_item/<str:collection_name>/<str:item_id>/', views.get_item, name='get_item'),
    path('delete_item/<str:collection_name>/<str:item_id>/', views.delete_item, name='delete_item'),
    path("send-email/", views.send_email, name="send_email"),
    #path('', views.index, none='index'),
]
