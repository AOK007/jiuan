from django.db import models
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin,BaseUserManager

class UserManager(BaseUserManager):
    def _create_user(self, username, password, **kwargs):
        if not username:
            raise ValueError("请输入用户名")
        if not password:
            raise ValueError("请输入密码")
        user = self.model(username, **kwargs)
        user.set_password(password)
        user.save()
        return user

    def create_user(self,username,password, **kwargs):
        kwargs["is_superuser"] = False
    def create_superuser(self,username,password,**kwargs):
        kwargs["is_superuser"] = True
        kwargs["is_staff"] = True
        return self._create_user(username, password, **kwargs)

class User(AbstractBaseUser,PermissionsMixin):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=10,unique=True,verbose_name='用户名')
    USERNAME_FIELD = 'username'
    is_staff = models.BooleanField(default=False)
    objects = UserManager()
    def get_full_name(self):
        return self.username
    def get_short_name(self):
        return self.username
    class Meta:
        verbose_name = "用户管理"
        verbose_name_plural = verbose_name

