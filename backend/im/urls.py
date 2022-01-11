from rest_framework import routers
from im.views import OrganizationView
from django.urls import include, path

router = routers.DefaultRouter()
router.register(r'orgs', OrganizationView, 'organization')