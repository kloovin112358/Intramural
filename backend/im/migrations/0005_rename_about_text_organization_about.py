# Generated by Django 4.0 on 2022-01-01 18:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('im', '0004_season_organization_alter_organization_url_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='organization',
            old_name='about_text',
            new_name='about',
        ),
    ]
