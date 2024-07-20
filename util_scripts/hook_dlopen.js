function hook_dlopen() {
  Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"),
  {
      onEnter: function (args) {
          var pathptr = args[0];
          if (pathptr !== undefined && pathptr != null) {
              var path = ptr(pathptr).readCString();
              
              console.log(path);

              if (path.indexOf('libszstone.so') >= 0) {
                  this.can_Hook = true;
              }

          }
      },
      onLeave: function (retval) {

          // if (this.can_Hook) {
              
          //     var base_addr = Process.findModuleByName("libGameVMP.so").base;

          //     // Patch
          //     var start_addr = base_addr.add(0xDFA8);
          //     var end_addr = base_addr.add(0xDFE4);
          //     // console.log('./ntrace ' + Process.id + " -s " + start_addr + " -e " + end_addr + " -b blib_pixel3.txt -o native_trace.txt -x");


          // }

          if (this.can_Hook) {
              var base_addr = Process.findModuleByName("libszstone.so").base;
              var addr = base_addr.add(0x447F8);
              Interceptor.attach(addr, function (args) {
                  console.log("0x447F8--->" + ptr(this.context["x8"]).sub(base_addr));
              });

              addr = base_addr.add(0x44748);
              Interceptor.attach(addr, function (args) {
                  console.log("0x44748--->" + ptr(this.context["x8"]).sub(base_addr));
              });
              
          }
      
      }
  });
}

// hook_dlopen();