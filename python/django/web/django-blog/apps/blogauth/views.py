from django.shortcuts import render,reverse,redirect
from django.http import JsonResponse
from django.contrib.auth import login,logout,authenticate
from .forms import LoginForm,RegisterForm
from .models import User

def login_view(request):
    form = LoginForm(request.POST)
    if form.is_valid():
        username = form.cleaned_data.get("username")
        password = form.cleaned_data.get("password")
        user = authenticate(request,username=username,password=password)
        json_dict = {}
        if user:
            login(request,user)
            json_dict['code'] = 200
            json_dict['message'] = "登录成功"
            return JsonResponse(json_dict)
        else:
            json_dict['code'] = 401
            json_dict['message'] = "用户名或密码错误"
            return JsonResponse(json_dict)

def logout_view(request):
    logout(request)
    return redirect(reverse("comment:index"))

def register_view(request):
    form = RegisterForm(request.POST)
    json_dict = {}
    if form.is_valid():
        username = form.cleaned_data.get("username")
        password = form.cleaned_data.get("password1")
        user = User.objects.create(username=username,password=password)
        login(request,user)
        return JsonResponse({"code":200,"message":"注册成功"})
    else:
        print("sss")
        form.errors.get_json_data()["__all__"][0]["code"] = 401
        result = form.errors.get_json_data()["__all__"][0]
        print(type(result))
        result['code'] = "401"
        print(result)
        return JsonResponse(result)