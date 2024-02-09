from django import models


class Galeria(models.Model):
    codigo = models.AutoField(primary_key=True)  # Autocódigo
    titulo = models.CharField(max_length=30)
    descripcion = models.CharField(max_length=250)
    fechaIngreso = models.DateTimeField(auto_now_add=True)  # Fecha actual al crear
    multimedia = models.CharField(max_length=350)

    def __str__(self):
        return f"Galeria {self.codigo}"