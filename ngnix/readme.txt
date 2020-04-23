xxx
apt-get install nginx
/etc/init.d/nginx start
www文件在/var/www
端口占用就干掉占用端口
fuser -k 80/tcp
/www/server/panel/vhost/nginx 修改
phpfpm_status.conf
phpinfo.conf 注释掉80端口