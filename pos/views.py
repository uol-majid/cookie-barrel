from django.shortcuts import render

# Create your views here.
# pos/views.py
from django.http import HttpResponse

def dummy(request):
    return HttpResponse("POS Panel Homepage (dummy)")
