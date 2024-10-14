from django.db import models

# Create your models here.
class Articulos(models.Model):
    codigo = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True)
    precio = models.CharField(max_length=28)
    
    def __str__(self):
        return self.descripcion