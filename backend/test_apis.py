import json
from django.core.files.uploadedfile import SimpleUploadedFile
import pytest
from weston.views import obtener_datos, guardar_anuncio, guardar_producto, upload_file
from django.test import Client
import unittest
from django.urls import reverse

class MisVistasTest(unittest.TestCase):
    def setUp(self):
        # Configura el cliente de prueba
        self.client = Client()

    def test_obtener_datos(self):
        # Simula una solicitud GET a la vista obtener_datos
        response = self.client.get(reverse('obtener_datos/anuncio'))
        
        # Verifica que la respuesta sea 200 (éxito)
        self.assertEqual(response.status_code, 200)

        # Puedes realizar más aserciones para verificar el contenido de la respuesta
'''
    def test_guardar_anuncio(self):
        # Simula una solicitud POST a la vista guardar_anuncio
        data = {
            "codigo": "123",
            "descripcion": "Ejemplo de anuncio",
            # Agrega más datos según los requerimientos de tu vista
        }
        response = self.client.post(reverse('nombre_de_la_vista_guardar_anuncio'), data)
        
        # Verifica que la respuesta sea 201 (creado con éxito)
        self.assertEqual(response.status_code, 201)

        # Puedes realizar más aserciones para verificar el comportamiento de la vista

    def test_guardar_producto(self):
        # Simula una solicitud POST a la vista guardar_producto
        data = {
            "codigo": "456",
            "nombre": "Ejemplo de producto",
            # Agrega más datos según los requerimientos de tu vista
        }
        response = self.client.post(reverse('nombre_de_la_vista_guardar_producto'), data)
        
        # Verifica que la respuesta sea 201 (creado con éxito)
        self.assertEqual(response.status_code, 201)
'''

