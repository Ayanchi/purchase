# Generated by Django 4.2.7 on 2023-11-05 05:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_customuser_inn'),
    ]

    operations = [
        migrations.RenameField(
            model_name='customuser',
            old_name='inn',
            new_name='passport_id',
        ),
        migrations.AddField(
            model_name='customuser',
            name='full_name',
            field=models.CharField(default=1),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='Organization',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('inn_org', models.CharField(unique=True)),
                ('org_name', models.CharField(unique=True)),
                ('role', models.CharField(choices=[('org', 'First'), ('sup', 'Second')], max_length=3)),
                ('ceo', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
