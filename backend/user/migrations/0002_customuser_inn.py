# Generated by Django 4.2.7 on 2023-11-05 04:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='inn',
            field=models.CharField(default=0, unique=True),
            preserve_default=False,
        ),
    ]
