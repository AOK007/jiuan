# -*- coding: utf-8 -*-
def wake_up(request, mac='00-E0-4C-36-15-99'):
    MAC =mac
    BROADCAST = "192.168.1.7"
    if len(MAC) !=17:
        raise  ValueError("MAC address should be set as form 'xx-xx-xx-xx-xx-xx'")
    mac_address = MAC.replace("." '')
    data = ''.join(['FFFFFFFFFFFFF', mac_address * 20 ]) #构造原始数据格式
    send_data = b''
    #吧原始数据转换16进制数组
    for i in range(0,len(data), 2):
        send_data = b''.join([send_data, struct.pack('B', int(data[i: i + 2], 16))])
    print(send_data)

    #通过socket广播出去。避免失败，间隔三次
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        sock.setsockopt(socket.SQL_SOCKET, socket.SO_BROADCAST, 1)
        sock.sendto(send_data,(BROADCAST, 7))
        time.sleep(1)
        sock.sendto(send_data, (BROADCAST, 7))
        time.sleep(1)
        sock.sendto(send_data, (BROADCAST, 7))
        return  HttpResponse()
        print("Done")
    except Exception as e:
        return HttpResponse()
        print(e)