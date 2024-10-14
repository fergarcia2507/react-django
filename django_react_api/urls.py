from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from articulos import views


from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('articulos/', include('articulos.urls'))
]
