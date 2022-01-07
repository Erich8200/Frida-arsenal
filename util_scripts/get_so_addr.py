# -*- coding: UTF-8 -*-
import frida, sys

jsCode = """

Java.perform(function(){
	
	Process.enumerateModules({
		onMatch: function(exp){
			if(exp.name == 'libdexjni.so'){
				send(exp.name + "|" + exp.base + "|" + exp.size + "|" + exp.path);
				send(exp);
				return 'stop';
			}
		},
		onComplete: function(){
			send('stop');
		}
	});
	
	var soAddr = Module.findBaseAddress("libdexjni.so");
	send(soAddr);
	
});

"""

def message(message, data):
    if message["type"] == 'send':
        print(u"[*] {0}".format(message['payload']))
    else:
        print(message)

process = frida.get_device_manager().add_remote_device("127.0.0.1:8888").attach(4889)
# process = frida.get_remote_device().attach(8940)
script= process.create_script(jsCode)
script.on("message", message)
script.load()
sys.stdin.read()
