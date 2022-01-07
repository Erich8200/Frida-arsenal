# -- coding: utf-8 --
import datetime
import logging
import os
import signal
import subprocess
import time


class adbManage:
    __android_platform_tools_dir = None


    def __init__(self, __android_platform_tools_dir: str):
        if self.__android_platform_tools_dir is not None:
            self.__android_platform_tools_dir = __android_platform_tools_dir + os.sep
        else:
            self.__android_platform_tools_dir = ""
            
    def root(self, device_id = ""):
        out = self.pcmd(self.__android_platform_tools_dir + "adb -s " + device_id + " root")
        print(out)

    def root_internal(self, device_id = ""):
        out = self.pcmd(self.__android_platform_tools_dir + "adb -s " + device_id + " shell su")
        print(out)

    def write_file(self, file_path, content, device_id = ""):
        print("Writing File: " + file_path)
        self.cmd(self.__android_platform_tools_dir + "adb -s " + device_id + " shell \"echo \"" + content + "\" > " + file_path + " \"", 5)

    def wait_for_device(self, wait_second: int, device_id = ""):
        print("Waiting Device")
        # self.cmd(self.__android_platform_tools_dir + "adb -s " + device_id + " wait-for-device", wait_second) # 进程卡死
        os.system(self.__android_platform_tools_dir + "adb -s " + device_id + " wait-for-device")

    def check_boot_complete(self, device_id = ""):
        result1 = self.cmd(self.__android_platform_tools_dir + "adb -s " + device_id + " shell getprop sys.boot_completed", 5)
        result2 = self.cmd(self.__android_platform_tools_dir + "adb -s " + device_id + " shell getprop init.svc.bootanim", 5)
        if result1 is not None and "1" in result1 and result2 is not None \
                and "stopped" in result2:
            return True
        return False

    def install_apk(self, apk_path: str, device_id = ""):
        print("Installing APK")
        if os.path.exists(apk_path):
            output = self.pcmd(self.__android_platform_tools_dir + "adb -s " + device_id + " install -r " + apk_path)
            if output is not None and b"Success" in output:
                return True
            print(output)
        return False

    def uninstall_apk(self, pkg_name: str, save_data: bool = True, device_id = ""):
        print("Uninstalling APK")
        if save_data:
            output = self.cmd(self.__android_platform_tools_dir + "adb -s " + device_id + " shell pm uninstall -k " + pkg_name, 10)
        else:
            output = self.cmd(self.__android_platform_tools_dir + "adb -s " + device_id + "  shell pm uninstall " + pkg_name, 10)
        if output is not None and "Success" in output:
            return True
        print(output)
        return False

    def push_file(self, file_path: str, push_to_path: str, device_id = ""):
        print("Pushing File: " + file_path)
        if os.path.exists(file_path):
            output = self.pcmd(self.__android_platform_tools_dir + "adb -s " + device_id + "  push " + file_path + " " + push_to_path)
            if output is not None and "error" not in output:
                return True
            print(output)
        return False

    def pull_file(self, file_path: str, pull_to_path: str, device_id = ""):
        print("Pulling File: " + file_path)
        output = self.pcmd(self.__android_platform_tools_dir + "adb -s " + device_id + "  pull " + file_path + " " + pull_to_path)
        if output is not None and b"error" not in output:
            return True
        print(output)
        return False

    def send_broadcast(self, pkg_name: str, action: str, device_id = ""):
        print("Sending Boradcast: " + action + " Pkg: " + pkg_name)
        os.system(self.__android_platform_tools_dir + "adb -s " + device_id + "  shell am broadcast -a " + action + " -p " + pkg_name)

    def start_activity(self, pkg_name: str, activity_name: str, device_id = ""):
        print("Starting Activity: " + activity_name + " Pkg: " + pkg_name)
        os.system(self.__android_platform_tools_dir + "adb -s " + device_id + "  shell am start -n " + pkg_name + "/" + activity_name)

    def start_service(self, pkg_name: str, service_name: str, device_id = ""):
        print("Starting Service: " + service_name + " Pkg: " + pkg_name)
        os.system(self.__android_platform_tools_dir + "adb -s " + device_id + "  shell am startservice -n " + pkg_name + "/" + service_name)

    def kill_app(self, pkg_name: str, device_id = ""):
        print("Killing APP: " + pkg_name)
        self.pcmd(self.__android_platform_tools_dir + "adb -s " + device_id + "  shell am force-stop " + pkg_name)

    def check_and_start_app(self, pkg_name: str, act_name: str, device_id = ""):
        result = self.cmd(self.__android_platform_tools_dir + "adb -s " + device_id + "  shell \"ps | grep " + pkg_name + "\"", 5)
        if result is None or result == "":
            print("App Not Running, Start It!")
            self.start_activity(pkg_name, act_name)

    def check_app_running(self, pkg_name: str, device_id = ""):
        result = self.pcmd(self.__android_platform_tools_dir + "adb -s " + device_id + "  shell \"ps | grep " + pkg_name + "\"")
        return result is not None and result != ""

    def grant_permission(self, pkg_name: str, permission: str, device_id = ""):
        result = self.pcmd(self.__android_platform_tools_dir + "adb -s " + device_id + "  shell pm grant " + pkg_name + " " + permission)
        return "Error" not in result and "Exception" not in result

    def monkey(self, pkgName: str, eventsCount, device_id = ""):
        os.system("adb -s " + device_id + "  shell monkey  -p ui.nau8200.test -s 6666 --throttle 200 --pct-touch 50 --pct-motion 50 " + str(eventsCount) + " --ignore-crashes --ignore-timeouts --ignore-security-exceptions --ignore-native-crashes --monitor-native-crashes")

    def shut_down(self, device_id = ""):
        print(self.pcmd("adb -s " + device_id + "  shell reboot -p"))

    def unlock_screen(self, device_id = ""):
        print(self.pcmd("adb -s " + device_id + "  shell input keyevent 82"))

    def disable_se_linux(self, device_id = ""):
        print(self.pcmd("adb -s " + device_id + "  shell setenforce 0"))

    def ls(self, dir:str, device_id = ""):
        ret = []
        print("Listing file(s) in " + dir)
        file_list = self.pcmd("adb -s " + device_id + "  shell ls " + dir)
        for f in file_list:
            if f.decode() != "":
                ret.append(f.decode())
        return ret

    def rm(self, file:str, device_id = ""):
        self.pcmd("adb -s " + device_id + "  shell rm " + file)

    @staticmethod
    def cmd(command, timeout):
        start = datetime.datetime.now()
        process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
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

    def pcmd(self, cmd: str):
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE)
        p.wait()
        out, err = p.communicate()
        return out.splitlines()
