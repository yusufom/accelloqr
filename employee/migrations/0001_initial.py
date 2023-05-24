# Generated by Django 3.2.5 on 2023-05-21 20:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('ref', models.CharField(max_length=100, unique=True)),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='employee-avatars/')),
                ('firstName', models.CharField(max_length=250)),
                ('surname', models.CharField(max_length=250)),
                ('gender', models.CharField(choices=[('Male', 'Male'), ('Female', 'Female')], default='Male', max_length=50)),
                ('address', models.CharField(blank=True, max_length=500, null=True)),
                ('company', models.CharField(blank=True, max_length=200, null=True)),
                ('position', models.CharField(blank=True, max_length=200, null=True)),
                ('summary', models.TextField(blank=True, max_length=100000, null=True)),
            ],
            options={
                'ordering': ['-created_at', '-updated_at'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Website',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=200)),
                ('url', models.URLField(max_length=300)),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='website_employee', to='employee.employee')),
            ],
            options={
                'ordering': ['-created_at', '-updated_at'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Telephone',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=200)),
                ('type', models.CharField(choices=[('Mobile', 'Mobile'), ('Home', 'Home'), ('Work', 'Work'), ('Fax', 'Fax'), ('Other', 'Other')], max_length=200)),
                ('phone', models.CharField(max_length=12)),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='telephone_employee', to='employee.employee')),
            ],
            options={
                'ordering': ['-created_at', '-updated_at'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Socials',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=200)),
                ('type', models.CharField(choices=[('Facebook', 'Facebook'), ('Twitter', 'Twitter'), ('Linkedin', 'Linkedin'), ('Github', 'Github'), ('Instagram', 'Instagram')], max_length=200)),
                ('url', models.URLField(max_length=300)),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='socials_employee', to='employee.employee')),
            ],
            options={
                'ordering': ['-created_at', '-updated_at'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Qr',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('png', models.ImageField(blank=True, null=True, upload_to='qr-codes-png/')),
                ('svg', models.FileField(blank=True, null=True, upload_to='qr-codes-svg/')),
                ('url', models.URLField(blank=True, null=True)),
                ('employee', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='employee.employee', verbose_name='')),
            ],
            options={
                'ordering': ['-created_at', '-updated_at'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Email',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=300)),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='email_employee', to='employee.employee')),
            ],
            options={
                'ordering': ['-created_at', '-updated_at'],
                'abstract': False,
            },
        ),
    ]