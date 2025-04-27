# pos/urls.py
from django.urls import path
from . import views

urlpatterns = [
    # example route
    path('', views.dummy, name='pos-home'),
]
