from django.db import models


class Producto(models.Model):
    codigo = models.AutoField(primary_key=True)  # Autocódigo
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=250)
    precio = models.FloatField()  # Utiliza FloatField para valores float
    fechaIngreso = models.DateTimeField(auto_now_add=True)  # Fecha actual al crear
    multimedia = models.CharField(max_length=350)

    def __str__(self):
        return f"Producto {self.codigo}"
