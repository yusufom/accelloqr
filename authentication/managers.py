from django.contrib.auth.models import BaseUserManager

class UserManager(BaseUserManager):

    def create_user(self, username, password=None):

        user = self.model(username=username)
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, username, password):

        user = self.create_user(username=username, password=password)
        user.set_password(password)
        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user