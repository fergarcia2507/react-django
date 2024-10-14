from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ArticulosSerializer
from .models import Articulos

# Create your views here.
class ArticulosView(viewsets.ModelViewSet):
    serializer_class = ArticulosSerializer
    queryset = Articulos.objects.all()