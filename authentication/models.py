from django.db import models
from base.models import TimestampedModel
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .managers import UserManager


# Create your models here.
class User(AbstractBaseUser, PermissionsMixin, TimestampedModel):
    id = models.BigAutoField(auto_created=True, primary_key=True, verbose_name='ID', editable=False)
    username = models.CharField(db_index=True, max_length=255, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'username'

    def __str__(self):
        return self.username
    

class SignupCode(TimestampedModel):
    code = models.CharField(db_index=True, max_length=255)

    def __str__(self):
        return self.code

