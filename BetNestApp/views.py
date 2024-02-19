from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes 
from rest_framework import routers, serializers, viewsets, permissions
from rest_framework.response import Response
from .models import UserProfile, Bet, Payment
from django.contrib.auth.models import User
from .serializers import UserSerializer, PaymentSerializer, BetSerializer, UserDetailSerializer
from .interact import testit, get_balance, debit_user

{
    "Username": "SAGGIO",
    "First_Name": "Nworah",
    "Last_Name": "Chimzuruoke",
    "Email_address": "saggio@gmail.com",
    "Wallet_Address": "0x532354D85920702C461C59B33b14911D8D1b97F5",
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


def index(request):
    """
    A function for the index view
    """

    return render(request, "readme.html")

@api_view(['get','post'])
@authentication_classes([])
@permission_classes([])
def BetReg(request):
    """
    A function to register users
    """

    data = request.data
    if request.method == 'POST':

        try:
            current_balance = get_balance(data['wallet_address'])
            staking_amount = data['amount']
            if current_balance > staking_amount:
                try:
                    NewBet = Bet.objects.create(
                        Staker_name = data['staker_name'],
                        amount = data['amount'],
                        Is_Winner = False,
                        game_category = data['category'],
                        game_title = data['title'],
                        Wallet_Address = data['wallet_address']
                    )
                    NewBet.save()
                    debited = debit_user(data["wallet_address"], data["amount"])
                except:
                    return Response({"error": "insufficient funds"})  
            return Response(data)
        except:
            return Response({"error": "cannot fetch user's balance"})
    return Response(data)

        


@api_view(['get','post'])
@authentication_classes([])
@permission_classes([])
def UserReg(request):
    """
    A function to register users
    """
    
    data = request.data
    if request.method == 'POST':
        try:
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
        except:
            return Response({"error": "user account was not created successfully"})
    return Response(data)


@api_view(['get', 'post'])
@authentication_classes([])
@permission_classes([])
def UserDetails(request):
    """
    A functional based view for getting a specific user detail using it's wallet address
    """
    
    NewUser = ""
    serializer = ""
    data = request.data
    if request.method == 'POST':
        try:
            NewUser = UserProfile.objects.get(Wallet_Address=data["Wallet_Address"])
            serializer = UserDetailSerializer(NewUser, context={'request': request})
            balance = get_balance(NewUser.Wallet_Address)
            NewUser.balance = balance
            NewUser.save()
            return Response(serializer.data)
        except:
            return Response({"error": "invalid wallet address"})
    return Response(serializer)


@api_view(['get', 'post'])
@authentication_classes([])
@permission_classes([])
def StakedBets(request):
    """
    A functional based view for getting staked bets for a specific user detail using the wallet address
    """
    
    stakedBet = ""
    serializer = ""
    data = request.data
    if request.method == 'POST':
        try:
            stakedBet = Bet.objects.get(Wallet_Address=data["Wallet_Address"])
            serializer = BetSerializer(StakedBet, context={'request': request})
            return Response(serializer.data)
        except:
            return Response({"error": "no staked game for now"})
    return Response(serializer)