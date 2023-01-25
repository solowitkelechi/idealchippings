from django.shortcuts import render
import time
# Create your views here.


def home(request):
    result = time.localtime()
    year = result.tm_year
    context = {
        "year": year,
    }
    return render(request, "home.html", context)
