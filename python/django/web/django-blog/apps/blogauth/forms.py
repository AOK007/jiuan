from django import forms

from .models import User

class LoginForm(forms.Form):
    username = forms.CharField(max_length=10, min_length=2)
    password = forms.CharField(max_length=10, min_length=2)

class RegisterForm(forms.Form):
    username = forms.CharField(max_length=10,min_length=2)
    password1 = forms.CharField(max_length=10,min_length=2)
    password2 = forms.CharField(max_length=10, min_length=2)

    def clean(self):
        cleaned_data = super(RegisterForm, self).clean()

        username = cleaned_data.get("username")
        password1 = cleaned_data.get("password1")
        password2 = cleaned_data.get("password2")

        if password1 != password2:
            raise forms.ValidationError("两次密码不一致")
        exists = User.objects.filter(username=username).exists()
        if exists:
            raise forms.ValidationError("用户名已存在！")

