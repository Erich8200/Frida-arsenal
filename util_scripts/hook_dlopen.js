var target_lib_name = ""
var target_offset = 0x00

function hook_dlopen() {
  Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"),
  {
      onEnter: function (args) {
          var pathptr = args[0];
          if (pathptr !== undefined && pathptr != null) {
              var path = ptr(pathptr).readCString();
              
              console.log(path);

              if (path.indexOf(target_lib_name) >= 0) {
                  this.can_Hook = true;
              }

          }
      },
      onLeave: function (retval) {

        //// For Acalanatha ntrace
        // if (this.can_Hook) {
        //     var base_addr = Process.findModuleByName("libGameVMP.so").base;
        //     var start_addr = base_addr.add(0xDFA8);
        //     var end_addr = base_addr.add(0xDFE4);
        //     // console.log('./ntrace ' + Process.id + " -s " + start_addr + " -e " + end_addr + " -b blib_pixel3.txt -o native_trace.txt -x");
        // }

        if (this.can_Hook) {
            var base_addr = Process.findModuleByName(target_lib_name).base;
            var addr = base_addr.add(target_offset);
            Interceptor.attach(addr, function (args) {
                console.log(target_offset);
            });
            
        }
      
      }
  });
}

// hook_dlopen();