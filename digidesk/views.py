from django.shortcuts import render
from .models import Digimon
from django.http import JsonResponse, HttpResponse
import requests
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from .paginations import CustomPagination
import json
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

def index(request):
    digimons = Digimon.objects.all()
    response = requests.get('https://digimon-api.vercel.app/api/digimon')
    data_api = response.json()
    paginator = Paginator(data_api, 12)
    page = request.GET.get('page')
    try:
        data_list = paginator.page(page)
    except PageNotAnInteger:
        data_list = paginator.page(1)
    except EmptyPage:
        data_list = paginator.page(paginator.num_pages)

    return render(request, "index.html", {'page': page, 'digimons': digimons,
                                                   'data_api': data_list})

def javascript_calls(request):
    return render(request, "javascript_calls.html")

@csrf_exempt
def save_digimon(request):
    params = request.POST
    digi = Digimon()
    digi.name = params["name"]
    digi.level = params["level"]
    digi.image = params["image"]
    try:
        digi.save()
    except Exception as err:
        print(err)
        print("Error to try save digimon in database")

    return HttpResponse(status=200)