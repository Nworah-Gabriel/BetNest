from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class UserProfile(User):

    Wallet_Address = models.CharField(max_length=50, default="0x0000000000000000000000000000000000", null=False, blank=False)

    def __str__(self):
        return self.username