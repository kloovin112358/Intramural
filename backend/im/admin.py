from django.contrib import admin
from im.models import *

class LeagueRegistrationInline(admin.TabularInline):
    model = LeagueRegistration
    extra = 0

class LeagueAdmin(admin.ModelAdmin):
    model = League
    inlines = [LeagueRegistrationInline,]

class EventRegistrationInline(admin.TabularInline):
    model = EventRegistration
    extra = 0

class EventAdmin(admin.ModelAdmin):
    model = Event
    inlines = [EventRegistrationInline,]

class OrganizationAdmin(admin.ModelAdmin):
    model = Organization
    list_filter = ('name', 'id', 'active', 'short_name', 'url_name')
    list_display = ('name', 'id', 'active', 'short_name', 'url_name')

    # after creation, we don't want the url name to be editable,
    # for link handling reasons. We don't want confusion with old and new URLS floating around.
    # SOURCE: https://books.agiliq.com/projects/django-admin-cookbook/en/latest/uneditable_existing.html
    def get_readonly_fields(self, request, obj=None):
        if obj:
            return ["url_name",]
        return []

admin.site.register(Season)
admin.site.register(Organization, OrganizationAdmin)
admin.site.register(Location)
admin.site.register(EventGroup)
admin.site.register(League, LeagueAdmin)
admin.site.register(Event, EventAdmin)