from rest_framework import routers
from im.views import OrganizationView

router = routers.DefaultRouter()
router.register(r'orgs', OrganizationView, 'organization')