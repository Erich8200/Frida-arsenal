import os
import re
import time
import subprocess
import datetime

def pcmd(cmd: str):
    p = subprocess.Popen(['cmd', cmd], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    p.wait()
    out, err = p.communicate()
    return out.splitlines()

def cmd(command, timeout):
    start = datetime.datetime.now()
    process = subprocess.Popen(command, shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    while process.poll() is None:
        time.sleep(0.2)
        now = datetime.datetime.now()
        if (now - start).seconds > timeout:
            process.kill()
            # os.kill(process.pid, signal.SIGKILL)
            # os.waitpid(-1, os.WNOHANG)
            return None
    result = process.stdout.readlines()
    if result is not None:
        return ("".join([s.decode() for s in result]))
    else:
        return None

aapt_path = r'C:\Users\JYQ\AppData\Local\Android\Sdk\build-tools\30.0.2\aapt.exe' # 要用绝对路径 + shell=True

def get_apk_name(file_name: str):
    """
    获取apk名字
    :return:
    """
    p = subprocess.Popen(aapt_path + " dump badging %s" % file_name, stdout=subprocess.PIPE, stderr=subprocess.PIPE, stdin=subprocess.PIPE, shell=True) # 要用绝对路径 + shell=True
    (output, err) = p.communicate()
    t = output.decode().split("\n")
    for item in t:
        # 此处的apk包名我是取得中文名称。具体信息可以在dos下用aapt查看详细信息后，修改正则获取自己想要的name
        match = re.compile("package: name='([\u4e00-\u9fa5_a-zA-Z0-9-\S]+)'").search(item)
        # match = re.compile("application-label-zh-CN:'([\u4e00-\u9fa5_a-zA-Z0-9-\S]+)'").search(item)
        if match is not None:
            return match.group(1)

# def get_package_name_by_aapt(file_name: str):
#     res = pcmd("aapt dump badging " + file_name)
#     return res

# print(get_package_name_by_aapt(r"E:/Research/Android_APP_unpack/2021.7.19/Auto_trace_real_device_1/samples/cn.tiboo_110524.apk"))

print(get_apk_name("E:/Research/Android_APP_unpack/2021.7.19/Auto_trace_real_device_1/samples/cn.tiboo_110524.apk"))