from django.shortcuts import render
from rest_framework.decorators import api_view, authentication_classes, permission_classes 
from rest_framework import routers, serializers, viewsets, permissions
from rest_framework.response import Response
from .models import UserProfile, Bet, Payment
from django.contrib.auth.models import User
from .serializers import UserSerializer, PaymentSerializer, BetSerializer
from .interact import testit

{
    "Username": "SAGGIO",
    "First_Name": "Nworah",
    "Last_Name": "Chimzuruoke",
    "Email_address": "saggio@gmail.com",
    "Wallet_Address": "0x0000000000000000000000000000000000000000",
    "password": "cvfvarev2!##23dvcwd"

}

#VIEW SETS
class UserViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserSerializer


class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Bet.objects.all()
    serializer_class = BetSerializer


class BetViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer


@api_view(['get','post'])
@authentication_classes([])
@permission_classes([])
def UserReg(request):
    """
    A function to register users
    """
    
    data = request.data
    if request.method == 'POST':
        print(data)
        NewUser = UserProfile.objects.create(
            username = data['Username'],
            first_name = data['First_Name'],
            last_name = data['Last_Name'],
            email = data['Email_address'],
            password = data['password'],
            Wallet_Address = data['Wallet_Address']
        )
        NewUser.save()
    return Response(data)


@api_view(['get','post'])
@authentication_classes([])
@permission_classes([])
def BetReg(request):
    """
    A function to register users
    """
    
    data = request.data
    if request.method == 'POST':
        print(data)
        NewUser = UserProfile.objects.create(
            username = data['Username'],
            first_name = data['First_Name'],
            last_name = data['Last_Name'],
            email = data['Email_address'],
            password = data['password'],
            Wallet_Address = data['Wallet_Address']
        )
        NewUser.save()
    return Response(data)


@api_view(['get'])
@authentication_classes([])
@permission_classes([])
def Testit(request):
    """
    A function to register users
    """
    
    value = ""
    # data = request.data
    if request.method == 'GET':
        value = testit()        
        
    return Response(value)