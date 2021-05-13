# -*- coding: UTF-8 -*-
import frida, sys

jsCode = """

Java.perform(function(){
	
    var n = 0;
	var soAddr = Module.findBaseAddress("libdexjni.so");
	send('soAddr: ' + soAddr);
	var interpreter_addr = soAddr.add(0x2ADE0);
	send('interpreter_addr: ' + interpreter_addr);
	Interceptor.attach(interpreter_addr, {
		onEnter: function(args){
            console.log('Num:', ++n);
            console.log('R0:', args[0]);
            console.log('R1:', args[1]);
			// send(args[0]);
			// send(args[1]);
		},
		// onLeave: function(retval){
	    // 	send(retval);
		// }
	});
	
});

"""

def message(message, data):
    if message["type"] == 'send':
        print(u"[*] {0}".format(message['payload']))
    else:
        print(message)

with open('hook_basic_blocks.js', 'r') as js_file:
	process = frida.get_device_manager().add_remote_device("127.0.0.1:8888").attach(8222)
	script= process.create_script(js_file.read())
	script.on("message", message)
	script.load()
	sys.stdin.read()