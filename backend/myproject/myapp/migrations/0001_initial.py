# Generated by Django 3.0.1 on 2019-12-19 15:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SuperHeroModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('superhero', models.CharField(max_length=100)),
                ('secret_identity', models.CharField(max_length=100)),
            ],
        ),
    ]