from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

# borrowed from https://tech.serhatteker.com/post/2020-01/email-as-username-django/
class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('email', 'organization', 'first_name', 'last_name', 'is_staff', 'is_active',)
    list_filter = ('email', 'organization', 'first_name', 'last_name', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser')}),
        ('Personal Info', {'fields': ('organization', 'first_name', 'last_name')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_staff', 'is_active')}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)

admin.site.register(CustomUser, CustomUserAdmin)