from rest_framework import viewsets
from .models import Interview
from .serializers import InterviewSerializer


class InterviewViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """

    serializer_class = InterviewSerializer
    queryset = Interview.objects.all()
    lookup_field = "lineNo"
