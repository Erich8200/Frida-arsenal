# -- coding: utf-8 --
import shutil
import adbManage
import os
import time
import subprocess
import json
import logging
import datetime
import js_script_content

# Work Dir With Resources
workDir: str = os.path.dirname(os.path.realpath(__file__))
# Sample Apk Dir
sampleAPKDir: str = os.path.join(workDir, "samples")
# Profile Dir
profileDir: str = os.path.join(workDir, "profile")
# DEX output dir
traceOutDir: str = os.path.join(workDir, 'output')
# Keep file?
keepFile = False
# Device ID
device_id = "HT7A31A02431" # Pixel 2
# device_id = "BH900D4450"   # Sony Z5 "AH-1W"
# device_id = '84B5T15B03001871' # Nexus 6p
tmp_js_script_name = 'hook_art.js'

# Permissions
system_permission_list = \
[
'android.permission.SYSTEM_ALERT_WINDOW',
'android.permission.WRITE_SETTINGS',
'android.permission.READ_CALENDAR',
'android.permission.WRITE_CALENDAR',
'android.permission.CAMERA',
'android.permission.READ_CONTACTS',
'android.permission.WRITE_CONTACTS',
'android.permission.GET_ACCOUNTS',
'android.permission.ACCESS_FINE_LOCATION',
'android.permission.ACCESS_COARSE_LOCATION',
'android.permission.RECORD_AUDIO',
'android.permission.READ_PHONE_STATE',
'android.permission.CALL_PHONE',
'android.permission.READ_CALL_LOG',
'android.permission.WRITE_CALL_LOG',
'com.android.voicemail.permission.ADD_VOICEMAIL',
'android.permission.USE_SIP',
'android.permission.PROCESS_OUTGOING_CALLS',
'android.permission.BODY_SENSORS',
'android.permission.SEND_SMS',
'android.permission.RECEIVE_SMS',
'android.permission.READ_SMS',
'android.permission.RECEIVE_WAP_PUSH',
'android.permission.RECEIVE_MMS',
'android.permission.READ_EXTERNAL_STORAGE',
'android.permission.WRITE_EXTERNAL_STORAGE'
]


# Log
# Log Output Switch
saveLogFile: bool = True
# Logger Name
loggerName: str = "AutoTrace"
# Log Output Dir
logOutputDir: str = os.path.join(workDir, "log")

def get_logger() -> logging:
    if saveLogFile and not os.path.exists(logOutputDir):
        os.makedirs(logOutputDir, exist_ok=False)

    logger = logging.getLogger(loggerName)
    logger.setLevel(level=logging.DEBUG)
    log_format = logging.Formatter('%(asctime)s - %(levelname)s: %(message)s')

    if saveLogFile:
        now_date_time = time.strftime('%Y-%m-%d_%H-%M-%S', time.localtime(time.time()))
        handler = logging.FileHandler(os.path.join(logOutputDir, now_date_time + ".log"))
        handler.setLevel(logging.DEBUG)
        handler.setFormatter(log_format)

        logger.addHandler(handler)

    console = logging.StreamHandler()
    console.setLevel(logging.DEBUG)
    console.setFormatter(log_format)

    logger.addHandler(console)

    return logger


log: logging = get_logger()

class AutoTrace:

    curSys = "Windows"
    adbDir = "C:\\Users\\JYQ\\AppData\\Local\\Android\\Sdk\\platform-tools"
    wait_time = 30 # 指定APP trace的时间

    # 执行单元
    adb = None

    # 时间常量
    # max_test_time = 5         # 模拟器启动次数
    # max_wait_boot_time = 10   # 模拟器启动等待时间

    # 配置文件固定文件名
    infoFileName: str = "info.json"

    # 待测应用信息（通过文件读取获得）
    app_package_name = ""
    app_main_Activity = ""
    app_activity_list = []
    app_service_list = []

    def __init__(self):
        self.adb = adbManage.adbManage(self.adbDir)

    def exec(self, cmd: str):
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE)
        p.wait()
        out, err = p.communicate()
        return out.splitlines(), p

    # 控制子进程执行一段时间后结束，控制流返回父进程
    def exec_for_time(self, command, timeout):
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
        # result = process.stdout.readlines()
        # if result is not None:
        #     return ("".join([s.decode() for s in result]))
        # else:
        #     return None
        # return process

    def trace(self, apkPath: str, inDir: str, outDir: str):

        if not os.path.exists(inDir): # 检查输入文件夹是否存在
            return False

        if not os.path.exists(outDir): # 检查输出文件夹是否存在
            return False

        # if not self.runEmulator():
            # return

        # Check if device is online
        # if not self.adb.check_boot_complete(device_id=device_id):
        #     return False

        # 安装应用
        self.adb.install_apk(apkPath, device_id)

        # install_time = 1
        # while not self.adb.install_apk(apkPath, device_id) and install_time <= 2:
        #     install_time = install_time + 1
        #     time.sleep(2)
        # if install_time > 2:
        #     log.error('APK install failed! Aborting...')
        #     return False

        # 准备配置文件
        # classList = inDir + os.sep + "class.dlist"
        apk_name = ''
        if self.curSys == 'Windows':
            apk_name = apkPath.split('\\')[-1]
        elif self.curSys == 'Linux':
            apk_name = apkPath.split('/')[-1]
        if apk_name == '':
            return False
        info_file_path = inDir + os.sep + apk_name + os.sep + self.infoFileName
        if os.path.exists(info_file_path):
            with open(info_file_path, "r") as file:
                info_dict = json.load(file)
                self.app_package_name = info_dict['pkg_name']

                # 授予权限
                global system_permission_list
                for p in system_permission_list:
                    result = self.adb.grant_permission(self.app_package_name, p, device_id)
                    # if result:
                    #     print(p + ' Grant Success')

                # 修改frida脚本
                generate_file_name = '/sdcard/data/frida_trace.txt'
                global tmp_js_script_name
                content = js_script_content.content1 + generate_file_name + js_script_content.content2
                with open(tmp_js_script_name, 'w', encoding='utf-8') as frida_script:
                    frida_script.write(content)

                # frida启动应用开始trace并输出到结果文件
                log.info('Starting  ' + self.app_package_name)
                s = "frida -D " + device_id + " --no-pause -f " + self.app_package_name + " -l " + tmp_js_script_name + " > frida_server_log.txt"

                self.exec_for_time(s, self.wait_time)
                time.sleep(5)

                # 从手机获取结果输出
                realOutDir = outDir + os.sep + apk_name
                if not os.path.exists(realOutDir):
                    os.makedirs(realOutDir)
                self.adb.pull_file(generate_file_name, realOutDir, device_id)

                # 清理
                self.adb.rm(generate_file_name, device_id)
                log.info('Uninstalling APK')
                self.adb.uninstall_apk(self.app_package_name, False, device_id)
                os.remove(tmp_js_script_name)
                time.sleep(2)
                return True

def checkEnv():
    if not os.path.isdir(sampleAPKDir) or len(os.listdir(sampleAPKDir)) == 0:
        return False
    if not os.path.exists(profileDir):
        os.mkdir(profileDir)
    return True    


allSamples = [sampleAPKDir + os.sep + f for f in os.listdir(sampleAPKDir) if
                not f.startswith(".") and f.endswith(".apk") and os.path.isfile(sampleAPKDir + os.sep + f)]
log.info("Submit All APK  Total: %d" % len(allSamples))

autoTrace = AutoTrace()

count = 0
for root, dirs, files in os.walk(sampleAPKDir):
    for apk_name in files:
        log.info('Processing file ' + apk_name)
        ret = autoTrace.trace(os.path.join(root, apk_name), profileDir, traceOutDir)
        if not keepFile and ret:
            os.remove(os.path.join(root, apk_name))
        count = count + 1
        log.info('Processed ' + str(count) + ' APK(s), total ' + str(len(allSamples)))

log.info("Automatic tracing Finish")