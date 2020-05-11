xxx
apt-get install nginx
/etc/init.d/nginx start
www文件在/var/www
端口占用就干掉占用端口
fuser -k 80/tcp
/www/server/panel/vhost/nginx 修改
phpfpm_status.conf
phpinfo.conf 注释掉80端口
负载均衡
http{ upstream lb {
server ip weight=5; web服务器地址权重5/6
server ip weight=1; web服务器地址权重1/6
}
server{ 
localtion /(
 proxy_pass http://lb; 指定代理连接池
proxy_set_header HOST $host;转发请求头
proxy_set_header X-Forward-For $remote_addr；转发请求IP地址
)
}
}