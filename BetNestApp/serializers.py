from rest_framework import routers, serializers, viewsets, permissions
from .models import UserProfile, Payment, Bet


# SERIALIZERS
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['url', 'username', 'email', 'is_staff']


class PaymentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Payment
        fields = ['Beneficiary_name', 'amount', 'odds', 'Payment_Date']


class UserDetailSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'

class BetSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Bet
        fields = [
            'Staker_name',
            'Staker_KEY',
            'amount',
            'odds',
            'Is_Winner',
            'date',
            'game_category',
            'game_title'
            ]