from django.shortcuts import render
from rest_framework.decorators import api_view, authentication_classes, permission_classes 
from rest_framework import routers, serializers, viewsets, permissions
from rest_framework.response import Response
from .models import UserProfile
from django.contrib.auth.models import User

# SERIALIZERS
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['url', 'username', 'email', 'is_staff']

{
    "Username": "SAGGIO",
    "First_Name": "Nworah",
    "Last_Name": "Chimzuruoke",
    "Email_address": "Chimzuruoke",
    "Wallet_Address": "0x0000000000000000000000000000000000000000",
    "password": "cvfvarev2!##23dvcwd"

}

#VIEW SETS
class UserViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserSerializer

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


        # print(data['name'])
    return Response(data)