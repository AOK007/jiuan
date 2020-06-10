from django.shortcuts import redirect
from functools import wraps

def blog_login_required(viewfunc):
    @wraps(viewfunc)
    def decorator(request,*args,**kwargs):
        if request.user.is_authenticated:
            return viewfunc(request,*args,**kwargs)
        else:
            return redirect("/")
    return decorator