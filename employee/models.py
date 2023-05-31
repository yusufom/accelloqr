from django.db import models
from base.models import TimestampedModel
from PIL import Image
from django.urls import reverse
import uuid
from django.conf import settings
from bulk_update_or_create import BulkUpdateOrCreateQuerySet
from django.contrib.sites.models import Site




# Create your models here.
class Employee(TimestampedModel):
    ref = models.CharField(max_length=100, unique=True)
    firstName = models.CharField(max_length=250)
    surname = models.CharField(max_length=250)
    gender = models.CharField(max_length=50, choices=(("Male","Male"), ("Female","Female")), default="Male")
    address = models.CharField(null=True, blank=True, max_length=500)
    company = models.CharField(null=True, blank=True, max_length=200)
    position = models.CharField(null=True, blank=True, max_length=200)
    summary = models.TextField(null=True, blank=True, max_length=100000)
    avatar = models.ImageField(upload_to = "employee-avatars/", null=True, blank=True)


    def __str__(self):
        return str(self.surname + " " + self.firstName)
    
    def get_absolute_url(self):
        # return f'{settings.URL}/employee/{self.ref}/'
        domain = Site.objects.get_current().domain
        # return reverse('employee_view', kwargs={'ref': self.ref })
        return f'{domain}/staff/{self.ref}/'
    
    def save(self, *args, **kwargs):
        super(Employee, self).save(*args, **kwargs)
        if self.avatar:
            imag = Image.open(self.avatar.path)
            if imag.width > 300 or imag.height > 300:
                output_size = (200, 200)
                imag.thumbnail(output_size)
                imag.save(self.avatar.path)

class Telephone(TimestampedModel):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name="telephone_employee")
    name = models.CharField(max_length=200, blank=True, null=True)
    type = models.CharField(max_length=200, choices=(("Mobile","Mobile"), ("Home","Home"), ("Work","Work"), ("Fax","Fax"), ("Other","Other")))
    phone = models.CharField(max_length=12)

    objects = BulkUpdateOrCreateQuerySet.as_manager()

    def __str__(self):
        return self.employee.surname

class Email(TimestampedModel):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name="email_employee")
    name = models.CharField(max_length=200, blank=True, null=True)
    email = models.EmailField(max_length=300)

    objects = BulkUpdateOrCreateQuerySet.as_manager()

    def __str__(self):
        return self.employee.surname

class Website(TimestampedModel):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name="website_employee")
    name = models.CharField(max_length=200)
    url = models.URLField(max_length=300)

    objects = BulkUpdateOrCreateQuerySet.as_manager()

    def __str__(self):
        return self.employee.surname


class Socials(TimestampedModel):
    social_type = (
        ("Facebook","Facebook"),
        ("Twitter","Twitter"),
        ("Linkedin","Linkedin"),
        ("Github","Github"),
        ("Instagram","Instagram")
    )
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name="socials_employee")
    name = models.CharField(max_length=200, blank=True, null=True)
    type = models.CharField(max_length=200, choices=social_type)
    url = models.URLField(max_length=300)

    objects = BulkUpdateOrCreateQuerySet.as_manager()

    def __str__(self):
        return self.employee.surname


class Qr(TimestampedModel):
    employee = models.OneToOneField(Employee, verbose_name="", on_delete=models.CASCADE, related_name="qr_employee")
    png = models.ImageField(upload_to = "qr-codes-png/", null=True, blank=True)
    svg = models.FileField(upload_to = "qr-codes-svg/", null=True, blank=True)
    url = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.employee.surname


