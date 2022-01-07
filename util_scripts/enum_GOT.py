# -*- coding: UTF-8 -*-
import frida, sys

jsCode = """

Java.perform(function(){
	
	var imports = Module.enumerateImportsSync("libdexjni.so");
	for(var i = 0; i < imports.length; i++) {
		if(imports[i].name == 'strncat'){
			send(imports[i].name + ": " + imports[i].address);
			break;
		}
	}
	
	var exports = Module.enumerateExportsSync("libdexjni.so");
	for(var i = 0; i < exports.length; i++) {
		if(exports[i].name.indexOf('add') != -1){
			send(exports[i].name + ": " + exports[i].address);
			break;
		}
	}
	
});

"""

def message(message, data):
    if message["type"] == 'send':
        print(u"[*] {0}".format(message['payload']))
    else:
        print(message)

# process = frida.get_remote_device().attach('com.nau8200.juliuskingsley.a360shelldemo')
process = frida.get_device_manager().add_remote_device("127.0.0.1:8888").attach(4889)
script= process.create_script(jsCode)
script.on("message", message)
script.load()
sys.stdin.read()
