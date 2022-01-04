from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from im.urls import router

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
