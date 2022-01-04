from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import Organization

class OrganizationView(viewsets.ModelViewSet):
    serializer_class = OrganizationSerializer
    queryset = Organization.objects.all()