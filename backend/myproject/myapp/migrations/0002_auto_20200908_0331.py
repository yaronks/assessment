# Generated by Django 3.1 on 2020-09-08 03:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='UserModel',
            new_name='SuperHeroModel',
        ),
        migrations.RenameField(
            model_name='superheromodel',
            old_name='last_name',
            new_name='secret_identity',
        ),
        migrations.RenameField(
            model_name='superheromodel',
            old_name='name',
            new_name='superhero',
        ),
    ]
