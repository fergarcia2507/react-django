from rest_framework import serializers
from .models import Articulos

class ArticulosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articulos
        fields = ('id', 'codigo', 'descripcion', 'precio')