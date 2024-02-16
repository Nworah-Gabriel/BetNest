from django.contrib.auth.models import User
from django.db import models
import uuid
from datetime import datetime



# Create your models here.
class UserProfile(User):
    """
    A class basaed model for creating and storing users

    """

    Wallet_Address = models.CharField(max_length=50, default="0x0000000000000000000000000000000000", null=False, blank=False)
    balance = models.BigIntegerField(default=0, null=False, blank=False)
    def __str__(self):
        return self.username


class Bet(models.Model):
    """
    A class based model for storing placed bet
    """

    Staker_name = models.ForeignKey(to="UserProfile", unique=False, on_delete=models.CASCADE)
    Staker_KEY = models.CharField(primary_key=True, default=uuid.uuid4, max_length=50, null=False, blank=False)
    amount = models.BigIntegerField(default=0, null=False, blank=False)
    odds = models.CharField(default=0,  max_length=50, null=False, blank=False)
    Is_Winner = models.BooleanField(default=False)
    date = models.DateTimeField(default=datetime.now())
    game_category = models.CharField(default="none", max_length=50, null=False, blank=False)
    game_title = models.CharField(default="Lakers VS Bucks", max_length=250, null=False, blank=False)

    def __str__(self):
        """
        A string representation of the model class, returning the name of the staker
        """

        return self.Staker_name.username


class Payment(models.Model):
    """
    A class based model used for recording payments made to winners account
    """

    Beneficiary_name = models.ForeignKey(to="UserProfile", unique=False, on_delete=models.CASCADE)
    amount = models.BigIntegerField(default=0, null=False, blank=False)
    odds = models.CharField(default=0,  max_length=50, null=False, blank=False)
    Payment_Date = models.DateTimeField(default=datetime.now())


    def __str__(self):
        """
        A string representation of the model class, returning the name of the beneficiary
        """

        return self.Beneficiary_name.username
        


class FeedBack(models.Model):
    """
    A class based model used for recording feedback from the users
    """

    email_address = models.CharField(default="anonymous@gmail.com",  max_length=50, null=False, blank=False)
    message = models.TextField()
    Complaint_Date = models.DateTimeField(default=datetime.now())


    def __str__(self):
        """
        A string representation of the model class, returning the email address of the reporter
        """

        return self.Beneficiary_name.email_address