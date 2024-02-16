from django.contrib import admin
from .models import UserProfile, Bet, Payment, FeedBack

# Register your models here.
admin.site.register(UserProfile)
admin.site.register(Bet)
admin.site.register(Payment)
admin.site.register(FeedBack)