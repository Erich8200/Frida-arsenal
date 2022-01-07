import json
import logging
import os
import re
import threading
import time
import gc
import datetime
import subprocess
from concurrent.futures import ThreadPoolExecutor
# from androguard.core.bytecodes.apk import APK

# from androguard.misc import AnalyzeAPK

counter = 0
counterLock = threading.Lock()

# Work Dir With Resources
workDir: str = os.path.dirname(os.path.realpath(__file__))
# Sample Apk Dir
sampleAPKDir: str = os.path.join(workDir, "samples")
# Profile Dir
profileDir: str = os.path.join(workDir, "profile")
infoProfileDir: str = os.path.join(profileDir, "")
# Profile Prefix
infoFileName: str = "info.json"

# Log
# Log Output Switch
saveLogFile: bool = True
# Logger Name
loggerName: str = "StaticAnalyze"
# Log Output Dir
logOutputDir: str = os.path.join(workDir, "log")

# AAPT absolute path
aapt_path = r'C:\Users\JYQ\AppData\Local\Android\Sdk\build-tools\30.0.2\aapt.exe' # 要用绝对路径 + shell=True

# End Of Config

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


def checkEnv() -> bool:
    if not os.path.isdir(sampleAPKDir) or len(os.listdir(sampleAPKDir)) == 0:
        return False
    if not os.path.exists(profileDir):
        os.mkdir(profileDir)
    # if not os.path.exists(classProfileDir):
    #     os.mkdir(classProfileDir)
    if not os.path.exists(infoProfileDir):
        os.mkdir(infoProfileDir)
    return True


def run(apk_path: str, total: int):
    analyze(apk_path, total)


def generate_info(file_path: str):
    apk_file_name = file_path.split(os.path.sep)[-1]
    infoResult = {
        'pkg_name': '',
    }
    infoResult['pkg_name'] = get_package_name_by_aapt(file_path)
    output_path = infoProfileDir + os.path.sep + apk_file_name
    if not os.path.exists(output_path):
        os.makedirs(output_path)

    with open(output_path + os.path.sep + infoFileName, "w") as f:
        json.dump(infoResult, f)


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


def get_package_name_by_aapt(file_path: str):
    cmd_line = aapt_path + " dump badging %s" % file_path
    p = subprocess.Popen(cmd_line, stdout=subprocess.PIPE, stderr=subprocess.PIPE, stdin=subprocess.PIPE, shell=True) # 要用绝对路径 + shell=True
    (output, err) = p.communicate()
    t = output.decode().split("\n")
    for item in t:
        # 此处的apk包名我是取得中文名称。具体信息可以在dos下用aapt查看详细信息后，修改正则获取自己想要的name
        match = re.compile("package: name='([\u4e00-\u9fa5_a-zA-Z0-9-\S]+)'").search(item)
        if match is not None:
            return match.group(1)
    return ""

def analyze(apk_path: str, total: int):
    global counter, counterLock
    generate_info(apk_path)
    counterLock.acquire()
    counter += 1
    log.info("Now Process: %d/%d" % (counter, total))
    counterLock.release()


def main():
    threadPool = ThreadPoolExecutor(max_workers=16) # For Intel i7-6700 with 4C8T

    allSamples = [sampleAPKDir + os.sep + f for f in os.listdir(sampleAPKDir) if
                  not f.startswith(".") and f.endswith(".apk") and os.path.isfile(sampleAPKDir + os.sep + f)]

    log.info("Submit All APK  Total: %d" % len(allSamples))
    for root, dirs, files in os.walk(sampleAPKDir):
        for apk_name in files:
            log.info('Processing file ' + apk_name)
            threadPool.submit(run, os.path.join(root, apk_name), len(allSamples))

    log.info("Waiting For analyze Complete")
    threadPool.shutdown(wait=True)

    log.info("Static analyze Finish")


if __name__ == '__main__':
    if checkEnv():
        main()
    else:
        log.error("No Samples Found!")
