# Generated by Django 4.0.2 on 2022-03-05 16:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contactus', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='stars',
            field=models.IntegerField(default=3),
        ),
    ]
