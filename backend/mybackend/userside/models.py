from django.db import models
from django.contrib.auth.hashers import make_password, check_password

class UserLogin(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=15, unique=True)
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    is_blocked = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)
    # last_login = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)

    class Meta:
        ordering = ['-date_joined']
