# Generated by Django 3.2.5 on 2023-05-24 20:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0006_alter_telephone_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='telephone',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]