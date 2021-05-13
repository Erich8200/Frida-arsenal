var soAddr = Module.findBaseAddress("libdexjni.so");

var offset1 = 0x02b80c
var interpreter_addr1 = soAddr.add(offset1);
Interceptor.attach(interpreter_addr1, {
    onEnter: function(args){
        console.log('Basic block at ' + offset1 + ' is entered')
        console.log('R0:', args[0]);
        console.log('R1:', args[1]);
    },
    onLeave: function (retval) {}
});

var offset = 0x2ADE0
var interpreter_addr = soAddr.add(offset);
Interceptor.attach(interpreter_addr, {
    onEnter: function(args){
        console.log('Basic block at ' + offset + ' is entered');
        console.log('R0:', args[0]);
        console.log('R1:', args[1]);
    },
    onLeave: function (retval) {}
});



// var offset2 = 0x02af6c
// var interpreter_addr2 = soAddr.add(offset2);
// Interceptor.attach(interpreter_addr2, {
//     onEnter: function(args){
//         console.log('Basic block at ' + offset2 + ' is entered')
//         console.log('R0:', args[0]);
//         console.log('R1:', args[1]);
//     }
// });