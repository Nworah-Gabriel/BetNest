from django.shortcuts import render
from rest_framework.decorators import api_view, authentication_classes, permission_classes 
from rest_framework import routers, serializers, viewsets, permissions
from rest_framework.response import Response
from .models import UserProfile

# SERIALIZERS
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['url', 'username', 'email', 'is_staff']


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
    print(data)
    return Response(data)