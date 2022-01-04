from django.db import models
from django.conf import settings
from django.utils.translation import gettext_lazy as _
from django.core.validators import RegexValidator

class Season(models.Model):
    """
    A season of play, like Spring 2021 or 2020-2021
    """
    organization = models.ForeignKey("im.organization", on_delete=models.RESTRICT)
    name = models.CharField(max_length=30, help_text=_('Ex: 2020-2021, Spring 2021, etc.'))
    start_date = models.DateField(help_text=_('Season start date'))
    end_date = models.DateField(help_text=_('Season end date'))

    def __str__(self):
        return self.name

# TODO - add other administrators for organization
# TODO - restrict email domains
# TODO - add icon
# TODO - add banner image
# TODO - add site colors

class Organization(models.Model):
    """
    Can be anything from a college to a local sports league
    """
    active = models.BooleanField(default=True, help_text=_('Instead of deleting organizations, switch active to false.'))
    name = models.CharField(max_length=100, help_text=_('Full organization name. Ex: The University of Texas at Austin'))
    short_name = models.CharField(max_length=100, help_text=_('Shortened organization name. Ex: UT Austin'))
    url_name = models.CharField(max_length=15, unique=True, help_text=_('WARNING: THIS FIELD MAY NOT BE CHANGED AFTER CREATION. This field controls the URL your users will see. Example input: ut_austin -> /org/ut_austin/...'), verbose_name=_('URL Name'),
        validators=[
            RegexValidator(
                regex='^[a-zA-Z_]*$',
                message="Alphabetic characters and underscores only.",
            )
        ])
    owner = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.RESTRICT, help_text=_('This user is able to manage the organization'), related_name='org_owner')
    about = models.TextField(blank=True, null=True, verbose_name=_('About your organization'))

    def __str__(self):
        return self.name

class Location(models.Model):
    """
    An event location for an organization. Ex: UT Austin South Tennis Courts
    """
    name = models.CharField(max_length=100)
    description = models.TextField(verbose_name=_('About'))
    organization = models.ForeignKey(Organization, on_delete=models.RESTRICT, related_name='locations')

    def __str__(self):
        return self.name

class EventGroup(models.Model):
    """
    For organizing events - you might have a women's and a men's volleyball tournament,
    so it would make sense to organize them under a volleyball umbrella
    """
    name = models.CharField(max_length=100, verbose_name='Group name', help_text=_('Ex: volleyball, chess, line dancing'))
    organization = models.ForeignKey(Organization, on_delete=models.RESTRICT) 

    def __str__(self):
        return self.name

type_choices = (
    ('Solo', 'Solo'),
    ('Team', 'Team')
)

class League(models.Model):
    """
    For a recurring event, ocurring repeatedly
    """
    organization = models.ForeignKey(Organization, on_delete=models.RESTRICT, related_name='leagues')
    type = models.CharField(max_length=4, choices=type_choices, verbose_name=_('Solo/Team League'))
    group = models.ForeignKey(EventGroup, blank=True, null=True, related_name='leagues', on_delete=models.RESTRICT, verbose_name=_('(Optional) League type'))
    season = models.ForeignKey(Season, on_delete=models.RESTRICT, related_name='leagues')
    name = models.CharField(max_length=100, verbose_name=_('League name'))
    details = models.TextField(verbose_name=_('About the league'))
    location = models.ForeignKey(Location, on_delete=models.RESTRICT, related_name='leagues', blank=True, null=True)
    
    def __str__(self):
        return f"{self.organization.name} {self.name} {self.season.name}"

class LeagueRegistration(models.Model):
    """
    For a group/person signing up for a league
    """
    type = models.CharField(max_length=4, choices=type_choices)
    league = models.ForeignKey(League, on_delete=models.CASCADE)
    users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name=_('leagues'))
    name = models.CharField(max_length=50, blank=True, null=True, verbose_name=_('Team name'), help_text=_('Only required for teams'))

    def __str__(self):
        if self.type == 'Solo':
            return str(self.users.first())
        return self.name

class Event(models.Model):
    """
    A very important model - details of an event
    """
    organization = models.ForeignKey(Organization, on_delete=models.RESTRICT, related_name='events')
    type = models.CharField(max_length=4, choices=type_choices, verbose_name=_('Solo/Team Event'))
    group = models.ForeignKey(EventGroup, blank=True, null=True, on_delete=models.RESTRICT, related_name='events', verbose_name=_('(Optional) Event type'))
    name = models.CharField(max_length=100, verbose_name=_('Event name'))
    details = models.TextField(verbose_name=_('About the event'))
    location = models.ForeignKey(Location, on_delete=models.RESTRICT, related_name='events', blank=True, null=True)
    reg_start = models.DateTimeField(verbose_name=_('Registration start'), help_text=_('Time registration opens'))
    reg_end = models.DateTimeField(verbose_name=_('Registration end'), help_text=_('Time registration closes'))
    start = models.DateTimeField(verbose_name=_('Event start'), help_text=_('Time event begins'))
    end = models.DateTimeField(verbose_name=_('Event end'), help_text=_('Time event is expected to end'))
    
    def __str__(self):
        return f"{self.organization.name} {self.name} {self.start}"

class EventRegistration(models.Model):
    """
    For a group/person signing up for an event
    """
    type = models.CharField(max_length=4, choices=type_choices)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name=_('events'))
    name = models.CharField(max_length=50, blank=True, null=True, verbose_name=_('Team name'), help_text=_('Only required for teams'))

    def __str__(self):
        if self.type == 'Solo':
            return str(self.users.first())
        return self.name