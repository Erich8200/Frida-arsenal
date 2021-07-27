/*
GetFieldID is at  0xe39b87c5 _ZN3art3JNI10GetFieldIDEP7_JNIEnvP7_jclassPKcS6_
GetMethodID is at  0xe39a1a19 _ZN3art3JNI11GetMethodIDEP7_JNIEnvP7_jclassPKcS6_
NewStringUTF is at  0xe39cff25 _ZN3art3JNI12NewStringUTFEP7_JNIEnvPKc
RegisterNatives is at  0xe39e08fd _ZN3art3JNI15RegisterNativesEP7_JNIEnvP7_jclassPK15JNINativeMethodi
GetStaticFieldID is at  0xe39c9635 _ZN3art3JNI16GetStaticFieldIDEP7_JNIEnvP7_jclassPKcS6_
GetStaticMethodID is at  0xe39be0ed _ZN3art3JNI17GetStaticMethodIDEP7_JNIEnvP7_jclassPKcS6_
GetStringUTFChars is at  0xe39d06e5 _ZN3art3JNI17GetStringUTFCharsEP7_JNIEnvP8_jstringPh
FindClass is at  0xe399ae5d _ZN3art3JNI9FindClassEP7_JNIEnvPKc
*/  

function hook_libart() {
    var symbols = Module.enumerateSymbolsSync("libart.so");
    var addrGetStringUTFChars = null;
    var addrNewStringUTF = null;
    var addrFindClass = null;
    var addrGetMethodID = null;
    var addrGetStaticMethodID = null;
    var addrGetFieldID = null;
    var addrGetStaticFieldID = null;
    var addrRegisterNatives = null;

    var addrreserved0 = null;
    var addrreserved1 = null;
    var addrreserved2 = null;
    var addrreserved3 = null;
    var addrGetVersion = null;
    var addrDefineClass = null;
    var addrFromReflectedMethod = null;
    var addrFromReflectedField = null;
    var addrToReflectedMethod = null;
    var addrGetSuperclass = null;
    var addrIsAssignableFrom = null;
    var addrToReflectedField = null;
    var addrThrow = null;
    var addrThrowNew = null;
    var addrExceptionOccurred = null;
    var addrExceptionDescribe = null;
    var addrExceptionClear = null;
    var addrFatalError = null;
    var addrPushLocalFrame = null;
    var addrPopLocalFrame = null;
    var addrNewGlobalRef = null;
    var addrDeleteGlobalRef = null;
    var addrDeleteLocalRef = null;
    var addrIsSameObject = null;
    var addrNewLocalRef = null;
    var addrEnsureLocalCapacity = null;
    var addrAllocObject = null;
    var addrNewObject = null;
    var addrNewObjectV = null;
    var addrNewObjectA = null;
    var addrGetObjectClass = null;
    var addrIsInstanceOf = null;
    var addrCallObjectMethod = null;
    var addrCallObjectMethodV = null;
    var addrCallObjectMethodA = null;
    var addrCallBooleanMethod = null;
    var addrCallBooleanMethodV = null;
    var addrCallBooleanMethodA = null;
    var addrCallByteMethod = null;
    var addrCallByteMethodV = null;
    var addrCallByteMethodA = null;
    var addrCallCharMethod = null;
    var addrCallCharMethodV = null;
    var addrCallCharMethodA = null;
    var addrCallShortMethod = null;
    var addrCallShortMethodV = null;
    var addrCallShortMethodA = null;
    var addrCallIntMethod = null;
    var addrCallIntMethodV = null;
    var addrCallIntMethodA = null;
    var addrCallLongMethod = null;
    var addrCallLongMethodV = null;
    var addrCallLongMethodA = null;
    var addrCallFloatMethod = null;
    var addrCallFloatMethodV = null;
    var addrCallFloatMethodA = null;
    var addrCallDoubleMethod = null;
    var addrCallDoubleMethodV = null;
    var addrCallDoubleMethodA = null;
    var addrCallVoidMethod = null;
    var addrCallVoidMethodV = null;
    var addrCallVoidMethodA = null;
    var addrCallNonvirtualObjectMethod = null;
    var addrCallNonvirtualObjectMethodV = null;
    var addrCallNonvirtualObjectMethodA = null;
    var addrCallNonvirtualBooleanMethod = null;
    var addrCallNonvirtualBooleanMethodV = null;
    var addrCallNonvirtualBooleanMethodA = null;
    var addrCallNonvirtualByteMethod = null;
    var addrCallNonvirtualByteMethodV = null;
    var addrCallNonvirtualByteMethodA = null;
    var addrCallNonvirtualCharMethod = null;
    var addrCallNonvirtualCharMethodV = null;
    var addrCallNonvirtualCharMethodA = null;
    var addrCallNonvirtualShortMethod = null;
    var addrCallNonvirtualShortMethodV = null;
    var addrCallNonvirtualShortMethodA = null;
    var addrCallNonvirtualIntMethod = null;
    var addrCallNonvirtualIntMethodV = null;
    var addrCallNonvirtualIntMethodA = null;
    var addrCallNonvirtualLongMethod = null;
    var addrCallNonvirtualLongMethodV = null;
    var addrCallNonvirtualLongMethodA = null;
    var addrCallNonvirtualFloatMethod = null;
    var addrCallNonvirtualFloatMethodV = null;
    var addrCallNonvirtualFloatMethodA = null;
    var addrCallNonvirtualDoubleMethod = null;
    var addrCallNonvirtualDoubleMethodV = null;
    var addrCallNonvirtualDoubleMethodA = null;
    var addrCallNonvirtualVoidMethod = null;
    var addrCallNonvirtualVoidMethodV = null;
    var addrCallNonvirtualVoidMethodA = null;
    var addrGetObjectField = null;
    var addrGetBooleanField = null;
    var addrGetByteField = null;
    var addrGetCharField = null;
    var addrGetShortField = null;
    var addrGetIntField = null;
    var addrGetLongField = null;
    var addrGetFloatField = null;
    var addrGetDoubleField = null;
    var addrSetObjectField = null;
    var addrSetBooleanField = null;
    var addrSetByteField = null;
    var addrSetCharField = null;
    var addrSetShortField = null;
    var addrSetIntField = null;
    var addrSetLongField = null;
    var addrSetFloatField = null;
    var addrSetDoubleField = null;
    var addrCallStaticObjectMethod = null;
    var addrCallStaticObjectMethodV = null;
    var addrCallStaticObjectMethodA = null;
    var addrCallStaticBooleanMethod = null;
    var addrCallStaticBooleanMethodV = null;
    var addrCallStaticBooleanMethodA = null;
    var addrCallStaticByteMethod = null;
    var addrCallStaticByteMethodV = null;
    var addrCallStaticByteMethodA = null;
    var addrCallStaticCharMethod = null;
    var addrCallStaticCharMethodV = null;
    var addrCallStaticCharMethodA = null;
    var addrCallStaticShortMethod = null;
    var addrCallStaticShortMethodV = null;
    var addrCallStaticShortMethodA = null;
    var addrCallStaticIntMethod = null;
    var addrCallStaticIntMethodV = null;
    var addrCallStaticIntMethodA = null;
    var addrCallStaticLongMethod = null;
    var addrCallStaticLongMethodV = null;
    var addrCallStaticLongMethodA = null;
    var addrCallStaticFloatMethod = null;
    var addrCallStaticFloatMethodV = null;
    var addrCallStaticFloatMethodA = null;
    var addrCallStaticDoubleMethod = null;
    var addrCallStaticDoubleMethodV = null;
    var addrCallStaticDoubleMethodA = null;
    var addrCallStaticVoidMethod = null;
    var addrCallStaticVoidMethodV = null;
    var addrCallStaticVoidMethodA = null;
    var addrGetStaticObjectField = null;
    var addrGetStaticBooleanField = null;
    var addrGetStaticByteField = null;
    var addrGetStaticCharField = null;
    var addrGetStaticShortField = null;
    var addrGetStaticIntField = null;
    var addrGetStaticLongField = null;
    var addrGetStaticFloatField = null;
    var addrGetStaticDoubleField = null;
    var addrSetStaticObjectField = null;
    var addrSetStaticBooleanField = null;
    var addrSetStaticByteField = null;
    var addrSetStaticCharField = null;
    var addrSetStaticShortField = null;
    var addrSetStaticIntField = null;
    var addrSetStaticLongField = null;
    var addrSetStaticFloatField = null;
    var addrSetStaticDoubleField = null;
    var addrNewString = null;
    var addrGetStringLength = null;
    var addrGetStringChars = null;
    var addrReleaseStringChars = null;
    var addrGetStringUTFLength = null;
    var addrReleaseStringUTFChars = null;
    var addrGetArrayLength = null;
    var addrNewObjectArray = null;
    var addrGetObjectArrayElement = null;
    var addrSetObjectArrayElement = null;
    var addrNewBooleanArray = null;
    var addrNewByteArray = null;
    var addrNewCharArray = null;
    var addrNewShortArray = null;
    var addrNewIntArray = null;
    var addrNewLongArray = null;
    var addrNewFloatArray = null;
    var addrNewDoubleArray = null;
    var addrGetBooleanArrayElements = null;
    var addrGetByteArrayElements = null;
    var addrGetCharArrayElements = null;
    var addrGetShortArrayElements = null;
    var addrGetIntArrayElements = null;
    var addrGetLongArrayElements = null;
    var addrGetFloatArrayElements = null;
    var addrGetDoubleArrayElements = null;
    var addrReleaseBooleanArrayElements = null;
    var addrReleaseByteArrayElements = null;
    var addrReleaseCharArrayElements = null;
    var addrReleaseShortArrayElements = null;
    var addrReleaseIntArrayElements = null;
    var addrReleaseLongArrayElements = null;
    var addrReleaseFloatArrayElements = null;
    var addrReleaseDoubleArrayElements = null;
    var addrGetBooleanArrayRegion = null;
    var addrGetByteArrayRegion = null;
    var addrGetCharArrayRegion = null;
    var addrGetShortArrayRegion = null;
    var addrGetIntArrayRegion = null;
    var addrGetLongArrayRegion = null;
    var addrGetFloatArrayRegion = null;
    var addrGetDoubleArrayRegion = null;
    var addrSetBooleanArrayRegion = null;
    var addrSetByteArrayRegion = null;
    var addrSetCharArrayRegion = null;
    var addrSetShortArrayRegion = null;
    var addrSetIntArrayRegion = null;
    var addrSetLongArrayRegion = null;
    var addrSetFloatArrayRegion = null;
    var addrSetDoubleArrayRegion = null;
    var addrUnregisterNatives = null;
    var addrMonitorEnter = null;
    var addrMonitorExit = null;
    var addrGetJavaVM = null;
    var addrGetStringRegion = null;
    var addrGetStringUTFRegion = null;
    var addrGetPrimitiveArrayCritical = null;
    var addrReleasePrimitiveArrayCritical = null;
    var addrGetStringCritical = null;
    var addrReleaseStringCritical = null;
    var addrNewWeakGlobalRef = null;
    var addrDeleteWeakGlobalRef = null;
    var addrExceptionCheck = null;
    var addrNewDirectByteBuffer = null;
    var addrGetDirectBufferAddress = null;
    var addrGetDirectBufferCapacity = null;
    var addrGetObjectRefType = null;


    for (var i = 0; i < symbols.length; i++) {
        var symbol = symbols[i];
        if (symbol.name.indexOf("art") >= 0 &&
            symbol.name.indexOf("JNI") >= 0 &&
            symbol.name.indexOf("CheckJNI") < 0
        ) {
            // if (symbol.name.indexOf("GetStringUTFChars") >= 0) {
            //     addrGetStringUTFChars = symbol.address;
            //     console.log("GetStringUTFChars is at ", symbol.address, symbol.name);
            // } 
            // else if (symbol.name.indexOf("NewStringUTF") >= 0) {
            //     addrNewStringUTF = symbol.address;
            //     console.log("NewStringUTF is at ", symbol.address, symbol.name);
            // } else if (symbol.name.indexOf("FindClass") >= 0) {
            //     addrFindClass = symbol.address;
            //     console.log("FindClass is at ", symbol.address, symbol.name);
            // } else if (symbol.name.indexOf("GetMethodID") >= 0) {
            //     addrGetMethodID = symbol.address;
            //     console.log("GetMethodID is at ", symbol.address, symbol.name);
            // } else if (symbol.name.indexOf("GetStaticMethodID") >= 0) {
            //     addrGetStaticMethodID = symbol.address;
            //     console.log("GetStaticMethodID is at ", symbol.address, symbol.name);
            // } else if (symbol.name.indexOf("GetFieldID") >= 0) {
            //     addrGetFieldID = symbol.address;
            //     console.log("GetFieldID is at ", symbol.address, symbol.name);
            // } else if (symbol.name.indexOf("GetStaticFieldID") >= 0) {
            //     addrGetStaticFieldID = symbol.address;
            //     console.log("GetStaticFieldID is at ", symbol.address, symbol.name);
            // } else if (symbol.name.indexOf("RegisterNatives") >= 0) {
            //     addrRegisterNatives = symbol.address;
            //     console.log("RegisterNatives is at ", symbol.address, symbol.name);
            // }
            if (symbol.name.indexOf("reserved0") >= 0) {
                addrreserved0 = symbol.address;
                console.log("reserved0 is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("reserved1") >= 0) {
                addrreserved1 = symbol.address;
                console.log("reserved1 is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("reserved2") >= 0) {
                addrreserved2 = symbol.address;
                console.log("reserved2 is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("reserved3") >= 0) {
                addrreserved3 = symbol.address;
                console.log("reserved3 is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetVersion") >= 0) {
                addrGetVersion = symbol.address;
                console.log("GetVersion is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("DefineClass") >= 0) {
                addrDefineClass = symbol.address;
                console.log("DefineClass is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("FindClass") >= 0) {
                addrFindClass = symbol.address;
                console.log("FindClass is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("FromReflectedMethod") >= 0) {
                addrFromReflectedMethod = symbol.address;
                console.log("FromReflectedMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("FromReflectedField") >= 0) {
                addrFromReflectedField = symbol.address;
                console.log("FromReflectedField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("ToReflectedMethod") >= 0) {
                addrToReflectedMethod = symbol.address;
                console.log("ToReflectedMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetSuperclass") >= 0) {
                addrGetSuperclass = symbol.address;
                console.log("GetSuperclass is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("IsAssignableFrom") >= 0) {
                addrIsAssignableFrom = symbol.address;
                console.log("IsAssignableFrom is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("ToReflectedField") >= 0) {
                addrToReflectedField = symbol.address;
                console.log("ToReflectedField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("Throw") >= 0) {
                addrThrow = symbol.address;
                console.log("Throw is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("ThrowNew") >= 0) {
                addrThrowNew = symbol.address;
                console.log("ThrowNew is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("ExceptionOccurred") >= 0) {
                addrExceptionOccurred = symbol.address;
                console.log("ExceptionOccurred is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("ExceptionDescribe") >= 0) {
                addrExceptionDescribe = symbol.address;
                console.log("ExceptionDescribe is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("ExceptionClear") >= 0) {
                addrExceptionClear = symbol.address;
                console.log("ExceptionClear is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("FatalError") >= 0) {
                addrFatalError = symbol.address;
                console.log("FatalError is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("PushLocalFrame") >= 0) {
                addrPushLocalFrame = symbol.address;
                console.log("PushLocalFrame is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("PopLocalFrame") >= 0) {
                addrPopLocalFrame = symbol.address;
                console.log("PopLocalFrame is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("NewGlobalRef") >= 0) {
                addrNewGlobalRef = symbol.address;
                console.log("NewGlobalRef is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("DeleteGlobalRef") >= 0) {
                addrDeleteGlobalRef = symbol.address;
                console.log("DeleteGlobalRef is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("DeleteLocalRef") >= 0) {
                addrDeleteLocalRef = symbol.address;
                console.log("DeleteLocalRef is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("IsSameObject") >= 0) {
                addrIsSameObject = symbol.address;
                console.log("IsSameObject is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("NewLocalRef") >= 0) {
                addrNewLocalRef = symbol.address;
                console.log("NewLocalRef is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("EnsureLocalCapacity") >= 0) {
                addrEnsureLocalCapacity = symbol.address;
                console.log("EnsureLocalCapacity is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("AllocObject") >= 0) {
                addrAllocObject = symbol.address;
                console.log("AllocObject is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("NewObject") >= 0) {
                addrNewObject = symbol.address;
                console.log("NewObject is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("NewObjectV") >= 0) {
                addrNewObjectV = symbol.address;
                console.log("NewObjectV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("NewObjectA") >= 0) {
                addrNewObjectA = symbol.address;
                console.log("NewObjectA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetObjectClass") >= 0) {
                addrGetObjectClass = symbol.address;
                console.log("GetObjectClass is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("IsInstanceOf") >= 0) {
                addrIsInstanceOf = symbol.address;
                console.log("IsInstanceOf is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetMethodID") >= 0) {
                addrGetMethodID = symbol.address;
                console.log("GetMethodID is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallObjectMethod") >= 0) {
                addrCallObjectMethod = symbol.address;
                console.log("CallObjectMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallObjectMethodV") >= 0) {
                addrCallObjectMethodV = symbol.address;
                console.log("CallObjectMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallObjectMethodA") >= 0) {
                addrCallObjectMethodA = symbol.address;
                console.log("CallObjectMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallBooleanMethod") >= 0) {
                addrCallBooleanMethod = symbol.address;
                console.log("CallBooleanMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallBooleanMethodV") >= 0) {
                addrCallBooleanMethodV = symbol.address;
                console.log("CallBooleanMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallBooleanMethodA") >= 0) {
                addrCallBooleanMethodA = symbol.address;
                console.log("CallBooleanMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallByteMethod") >= 0) {
                addrCallByteMethod = symbol.address;
                console.log("CallByteMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallByteMethodV") >= 0) {
                addrCallByteMethodV = symbol.address;
                console.log("CallByteMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallByteMethodA") >= 0) {
                addrCallByteMethodA = symbol.address;
                console.log("CallByteMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallCharMethod") >= 0) {
                addrCallCharMethod = symbol.address;
                console.log("CallCharMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallCharMethodV") >= 0) {
                addrCallCharMethodV = symbol.address;
                console.log("CallCharMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallCharMethodA") >= 0) {
                addrCallCharMethodA = symbol.address;
                console.log("CallCharMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallShortMethod") >= 0) {
                addrCallShortMethod = symbol.address;
                console.log("CallShortMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallShortMethodV") >= 0) {
                addrCallShortMethodV = symbol.address;
                console.log("CallShortMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallShortMethodA") >= 0) {
                addrCallShortMethodA = symbol.address;
                console.log("CallShortMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallIntMethod") >= 0) {
                addrCallIntMethod = symbol.address;
                console.log("CallIntMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallIntMethodV") >= 0) {
                addrCallIntMethodV = symbol.address;
                console.log("CallIntMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallIntMethodA") >= 0) {
                addrCallIntMethodA = symbol.address;
                console.log("CallIntMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallLongMethod") >= 0) {
                addrCallLongMethod = symbol.address;
                console.log("CallLongMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallLongMethodV") >= 0) {
                addrCallLongMethodV = symbol.address;
                console.log("CallLongMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallLongMethodA") >= 0) {
                addrCallLongMethodA = symbol.address;
                console.log("CallLongMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallFloatMethod") >= 0) {
                addrCallFloatMethod = symbol.address;
                console.log("CallFloatMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallFloatMethodV") >= 0) {
                addrCallFloatMethodV = symbol.address;
                console.log("CallFloatMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallFloatMethodA") >= 0) {
                addrCallFloatMethodA = symbol.address;
                console.log("CallFloatMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallDoubleMethod") >= 0) {
                addrCallDoubleMethod = symbol.address;
                console.log("CallDoubleMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallDoubleMethodV") >= 0) {
                addrCallDoubleMethodV = symbol.address;
                console.log("CallDoubleMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallDoubleMethodA") >= 0) {
                addrCallDoubleMethodA = symbol.address;
                console.log("CallDoubleMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallVoidMethod") >= 0) {
                addrCallVoidMethod = symbol.address;
                console.log("CallVoidMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallVoidMethodV") >= 0) {
                addrCallVoidMethodV = symbol.address;
                console.log("CallVoidMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallVoidMethodA") >= 0) {
                addrCallVoidMethodA = symbol.address;
                console.log("CallVoidMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualObjectMethod") >= 0) {
                addrCallNonvirtualObjectMethod = symbol.address;
                console.log("CallNonvirtualObjectMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualObjectMethodV") >= 0) {
                addrCallNonvirtualObjectMethodV = symbol.address;
                console.log("CallNonvirtualObjectMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualObjectMethodA") >= 0) {
                addrCallNonvirtualObjectMethodA = symbol.address;
                console.log("CallNonvirtualObjectMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualBooleanMethod") >= 0) {
                addrCallNonvirtualBooleanMethod = symbol.address;
                console.log("CallNonvirtualBooleanMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualBooleanMethodV") >= 0) {
                addrCallNonvirtualBooleanMethodV = symbol.address;
                console.log("CallNonvirtualBooleanMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualBooleanMethodA") >= 0) {
                addrCallNonvirtualBooleanMethodA = symbol.address;
                console.log("CallNonvirtualBooleanMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualByteMethod") >= 0) {
                addrCallNonvirtualByteMethod = symbol.address;
                console.log("CallNonvirtualByteMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualByteMethodV") >= 0) {
                addrCallNonvirtualByteMethodV = symbol.address;
                console.log("CallNonvirtualByteMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualByteMethodA") >= 0) {
                addrCallNonvirtualByteMethodA = symbol.address;
                console.log("CallNonvirtualByteMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualCharMethod") >= 0) {
                addrCallNonvirtualCharMethod = symbol.address;
                console.log("CallNonvirtualCharMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualCharMethodV") >= 0) {
                addrCallNonvirtualCharMethodV = symbol.address;
                console.log("CallNonvirtualCharMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualCharMethodA") >= 0) {
                addrCallNonvirtualCharMethodA = symbol.address;
                console.log("CallNonvirtualCharMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualShortMethod") >= 0) {
                addrCallNonvirtualShortMethod = symbol.address;
                console.log("CallNonvirtualShortMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualShortMethodV") >= 0) {
                addrCallNonvirtualShortMethodV = symbol.address;
                console.log("CallNonvirtualShortMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualShortMethodA") >= 0) {
                addrCallNonvirtualShortMethodA = symbol.address;
                console.log("CallNonvirtualShortMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualIntMethod") >= 0) {
                addrCallNonvirtualIntMethod = symbol.address;
                console.log("CallNonvirtualIntMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualIntMethodV") >= 0) {
                addrCallNonvirtualIntMethodV = symbol.address;
                console.log("CallNonvirtualIntMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualIntMethodA") >= 0) {
                addrCallNonvirtualIntMethodA = symbol.address;
                console.log("CallNonvirtualIntMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualLongMethod") >= 0) {
                addrCallNonvirtualLongMethod = symbol.address;
                console.log("CallNonvirtualLongMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualLongMethodV") >= 0) {
                addrCallNonvirtualLongMethodV = symbol.address;
                console.log("CallNonvirtualLongMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualLongMethodA") >= 0) {
                addrCallNonvirtualLongMethodA = symbol.address;
                console.log("CallNonvirtualLongMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualFloatMethod") >= 0) {
                addrCallNonvirtualFloatMethod = symbol.address;
                console.log("CallNonvirtualFloatMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualFloatMethodV") >= 0) {
                addrCallNonvirtualFloatMethodV = symbol.address;
                console.log("CallNonvirtualFloatMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualFloatMethodA") >= 0) {
                addrCallNonvirtualFloatMethodA = symbol.address;
                console.log("CallNonvirtualFloatMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualDoubleMethod") >= 0) {
                addrCallNonvirtualDoubleMethod = symbol.address;
                console.log("CallNonvirtualDoubleMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualDoubleMethodV") >= 0) {
                addrCallNonvirtualDoubleMethodV = symbol.address;
                console.log("CallNonvirtualDoubleMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualDoubleMethodA") >= 0) {
                addrCallNonvirtualDoubleMethodA = symbol.address;
                console.log("CallNonvirtualDoubleMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualVoidMethod") >= 0) {
                addrCallNonvirtualVoidMethod = symbol.address;
                console.log("CallNonvirtualVoidMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualVoidMethodV") >= 0) {
                addrCallNonvirtualVoidMethodV = symbol.address;
                console.log("CallNonvirtualVoidMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallNonvirtualVoidMethodA") >= 0) {
                addrCallNonvirtualVoidMethodA = symbol.address;
                console.log("CallNonvirtualVoidMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetFieldID") >= 0) {
                addrGetFieldID = symbol.address;
                console.log("GetFieldID is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetObjectField") >= 0) {
                addrGetObjectField = symbol.address;
                console.log("GetObjectField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetBooleanField") >= 0) {
                addrGetBooleanField = symbol.address;
                console.log("GetBooleanField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetByteField") >= 0) {
                addrGetByteField = symbol.address;
                console.log("GetByteField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetCharField") >= 0) {
                addrGetCharField = symbol.address;
                console.log("GetCharField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetShortField") >= 0) {
                addrGetShortField = symbol.address;
                console.log("GetShortField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetIntField") >= 0) {
                addrGetIntField = symbol.address;
                console.log("GetIntField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetLongField") >= 0) {
                addrGetLongField = symbol.address;
                console.log("GetLongField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetFloatField") >= 0) {
                addrGetFloatField = symbol.address;
                console.log("GetFloatField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetDoubleField") >= 0) {
                addrGetDoubleField = symbol.address;
                console.log("GetDoubleField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetObjectField") >= 0) {
                addrSetObjectField = symbol.address;
                console.log("SetObjectField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetBooleanField") >= 0) {
                addrSetBooleanField = symbol.address;
                console.log("SetBooleanField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetByteField") >= 0) {
                addrSetByteField = symbol.address;
                console.log("SetByteField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetCharField") >= 0) {
                addrSetCharField = symbol.address;
                console.log("SetCharField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetShortField") >= 0) {
                addrSetShortField = symbol.address;
                console.log("SetShortField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetIntField") >= 0) {
                addrSetIntField = symbol.address;
                console.log("SetIntField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetLongField") >= 0) {
                addrSetLongField = symbol.address;
                console.log("SetLongField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetFloatField") >= 0) {
                addrSetFloatField = symbol.address;
                console.log("SetFloatField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetDoubleField") >= 0) {
                addrSetDoubleField = symbol.address;
                console.log("SetDoubleField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetStaticMethodID") >= 0) {
                addrGetStaticMethodID = symbol.address;
                console.log("GetStaticMethodID is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticObjectMethod") >= 0) {
                addrCallStaticObjectMethod = symbol.address;
                console.log("CallStaticObjectMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticObjectMethodV") >= 0) {
                addrCallStaticObjectMethodV = symbol.address;
                console.log("CallStaticObjectMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticObjectMethodA") >= 0) {
                addrCallStaticObjectMethodA = symbol.address;
                console.log("CallStaticObjectMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticBooleanMethod") >= 0) {
                addrCallStaticBooleanMethod = symbol.address;
                console.log("CallStaticBooleanMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticBooleanMethodV") >= 0) {
                addrCallStaticBooleanMethodV = symbol.address;
                console.log("CallStaticBooleanMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticBooleanMethodA") >= 0) {
                addrCallStaticBooleanMethodA = symbol.address;
                console.log("CallStaticBooleanMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticByteMethod") >= 0) {
                addrCallStaticByteMethod = symbol.address;
                console.log("CallStaticByteMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticByteMethodV") >= 0) {
                addrCallStaticByteMethodV = symbol.address;
                console.log("CallStaticByteMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticByteMethodA") >= 0) {
                addrCallStaticByteMethodA = symbol.address;
                console.log("CallStaticByteMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticCharMethod") >= 0) {
                addrCallStaticCharMethod = symbol.address;
                console.log("CallStaticCharMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticCharMethodV") >= 0) {
                addrCallStaticCharMethodV = symbol.address;
                console.log("CallStaticCharMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticCharMethodA") >= 0) {
                addrCallStaticCharMethodA = symbol.address;
                console.log("CallStaticCharMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticShortMethod") >= 0) {
                addrCallStaticShortMethod = symbol.address;
                console.log("CallStaticShortMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticShortMethodV") >= 0) {
                addrCallStaticShortMethodV = symbol.address;
                console.log("CallStaticShortMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticShortMethodA") >= 0) {
                addrCallStaticShortMethodA = symbol.address;
                console.log("CallStaticShortMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticIntMethod") >= 0) {
                addrCallStaticIntMethod = symbol.address;
                console.log("CallStaticIntMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticIntMethodV") >= 0) {
                addrCallStaticIntMethodV = symbol.address;
                console.log("CallStaticIntMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticIntMethodA") >= 0) {
                addrCallStaticIntMethodA = symbol.address;
                console.log("CallStaticIntMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticLongMethod") >= 0) {
                addrCallStaticLongMethod = symbol.address;
                console.log("CallStaticLongMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticLongMethodV") >= 0) {
                addrCallStaticLongMethodV = symbol.address;
                console.log("CallStaticLongMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticLongMethodA") >= 0) {
                addrCallStaticLongMethodA = symbol.address;
                console.log("CallStaticLongMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticFloatMethod") >= 0) {
                addrCallStaticFloatMethod = symbol.address;
                console.log("CallStaticFloatMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticFloatMethodV") >= 0) {
                addrCallStaticFloatMethodV = symbol.address;
                console.log("CallStaticFloatMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticFloatMethodA") >= 0) {
                addrCallStaticFloatMethodA = symbol.address;
                console.log("CallStaticFloatMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticDoubleMethod") >= 0) {
                addrCallStaticDoubleMethod = symbol.address;
                console.log("CallStaticDoubleMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticDoubleMethodV") >= 0) {
                addrCallStaticDoubleMethodV = symbol.address;
                console.log("CallStaticDoubleMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticDoubleMethodA") >= 0) {
                addrCallStaticDoubleMethodA = symbol.address;
                console.log("CallStaticDoubleMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticVoidMethod") >= 0) {
                addrCallStaticVoidMethod = symbol.address;
                console.log("CallStaticVoidMethod is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticVoidMethodV") >= 0) {
                addrCallStaticVoidMethodV = symbol.address;
                console.log("CallStaticVoidMethodV is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("CallStaticVoidMethodA") >= 0) {
                addrCallStaticVoidMethodA = symbol.address;
                console.log("CallStaticVoidMethodA is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetStaticFieldID") >= 0) {
                addrGetStaticFieldID = symbol.address;
                console.log("GetStaticFieldID is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetStaticObjectField") >= 0) {
                addrGetStaticObjectField = symbol.address;
                console.log("GetStaticObjectField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetStaticBooleanField") >= 0) {
                addrGetStaticBooleanField = symbol.address;
                console.log("GetStaticBooleanField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetStaticByteField") >= 0) {
                addrGetStaticByteField = symbol.address;
                console.log("GetStaticByteField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetStaticCharField") >= 0) {
                addrGetStaticCharField = symbol.address;
                console.log("GetStaticCharField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetStaticShortField") >= 0) {
                addrGetStaticShortField = symbol.address;
                console.log("GetStaticShortField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetStaticIntField") >= 0) {
                addrGetStaticIntField = symbol.address;
                console.log("GetStaticIntField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetStaticLongField") >= 0) {
                addrGetStaticLongField = symbol.address;
                console.log("GetStaticLongField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetStaticFloatField") >= 0) {
                addrGetStaticFloatField = symbol.address;
                console.log("GetStaticFloatField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetStaticDoubleField") >= 0) {
                addrGetStaticDoubleField = symbol.address;
                console.log("GetStaticDoubleField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetStaticObjectField") >= 0) {
                addrSetStaticObjectField = symbol.address;
                console.log("SetStaticObjectField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetStaticBooleanField") >= 0) {
                addrSetStaticBooleanField = symbol.address;
                console.log("SetStaticBooleanField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetStaticByteField") >= 0) {
                addrSetStaticByteField = symbol.address;
                console.log("SetStaticByteField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetStaticCharField") >= 0) {
                addrSetStaticCharField = symbol.address;
                console.log("SetStaticCharField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetStaticShortField") >= 0) {
                addrSetStaticShortField = symbol.address;
                console.log("SetStaticShortField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetStaticIntField") >= 0) {
                addrSetStaticIntField = symbol.address;
                console.log("SetStaticIntField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetStaticLongField") >= 0) {
                addrSetStaticLongField = symbol.address;
                console.log("SetStaticLongField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetStaticFloatField") >= 0) {
                addrSetStaticFloatField = symbol.address;
                console.log("SetStaticFloatField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetStaticDoubleField") >= 0) {
                addrSetStaticDoubleField = symbol.address;
                console.log("SetStaticDoubleField is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("NewString") >= 0) {
                addrNewString = symbol.address;
                console.log("NewString is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetStringLength") >= 0) {
                addrGetStringLength = symbol.address;
                console.log("GetStringLength is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetStringChars") >= 0) {
                addrGetStringChars = symbol.address;
                console.log("GetStringChars is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("ReleaseStringChars") >= 0) {
                addrReleaseStringChars = symbol.address;
                console.log("ReleaseStringChars is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("NewStringUTF") >= 0) {
                addrNewStringUTF = symbol.address;
                console.log("NewStringUTF is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetStringUTFLength") >= 0) {
                addrGetStringUTFLength = symbol.address;
                console.log("GetStringUTFLength is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetStringUTFChars") >= 0) {
                addrGetStringUTFChars = symbol.address;
                console.log("GetStringUTFChars is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("ReleaseStringUTFChars") >= 0) {
                addrReleaseStringUTFChars = symbol.address;
                console.log("ReleaseStringUTFChars is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetArrayLength") >= 0) {
                addrGetArrayLength = symbol.address;
                console.log("GetArrayLength is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("NewObjectArray") >= 0) {
                addrNewObjectArray = symbol.address;
                console.log("NewObjectArray is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetObjectArrayElement") >= 0) {
                addrGetObjectArrayElement = symbol.address;
                console.log("GetObjectArrayElement is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetObjectArrayElement") >= 0) {
                addrSetObjectArrayElement = symbol.address;
                console.log("SetObjectArrayElement is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("NewBooleanArray") >= 0) {
                addrNewBooleanArray = symbol.address;
                console.log("NewBooleanArray is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("NewByteArray") >= 0) {
                addrNewByteArray = symbol.address;
                console.log("NewByteArray is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("NewCharArray") >= 0) {
                addrNewCharArray = symbol.address;
                console.log("NewCharArray is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("NewShortArray") >= 0) {
                addrNewShortArray = symbol.address;
                console.log("NewShortArray is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("NewIntArray") >= 0) {
                addrNewIntArray = symbol.address;
                console.log("NewIntArray is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("NewLongArray") >= 0) {
                addrNewLongArray = symbol.address;
                console.log("NewLongArray is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("NewFloatArray") >= 0) {
                addrNewFloatArray = symbol.address;
                console.log("NewFloatArray is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("NewDoubleArray") >= 0) {
                addrNewDoubleArray = symbol.address;
                console.log("NewDoubleArray is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetBooleanArrayElements") >= 0) {
                addrGetBooleanArrayElements = symbol.address;
                console.log("GetBooleanArrayElements is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetByteArrayElements") >= 0) {
                addrGetByteArrayElements = symbol.address;
                console.log("GetByteArrayElements is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetCharArrayElements") >= 0) {
                addrGetCharArrayElements = symbol.address;
                console.log("GetCharArrayElements is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetShortArrayElements") >= 0) {
                addrGetShortArrayElements = symbol.address;
                console.log("GetShortArrayElements is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetIntArrayElements") >= 0) {
                addrGetIntArrayElements = symbol.address;
                console.log("GetIntArrayElements is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetLongArrayElements") >= 0) {
                addrGetLongArrayElements = symbol.address;
                console.log("GetLongArrayElements is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetFloatArrayElements") >= 0) {
                addrGetFloatArrayElements = symbol.address;
                console.log("GetFloatArrayElements is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetDoubleArrayElements") >= 0) {
                addrGetDoubleArrayElements = symbol.address;
                console.log("GetDoubleArrayElements is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("ReleaseBooleanArrayElements") >= 0) {
                addrReleaseBooleanArrayElements = symbol.address;
                console.log("ReleaseBooleanArrayElements is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("ReleaseByteArrayElements") >= 0) {
                addrReleaseByteArrayElements = symbol.address;
                console.log("ReleaseByteArrayElements is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("ReleaseCharArrayElements") >= 0) {
                addrReleaseCharArrayElements = symbol.address;
                console.log("ReleaseCharArrayElements is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("ReleaseShortArrayElements") >= 0) {
                addrReleaseShortArrayElements = symbol.address;
                console.log("ReleaseShortArrayElements is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("ReleaseIntArrayElements") >= 0) {
                addrReleaseIntArrayElements = symbol.address;
                console.log("ReleaseIntArrayElements is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("ReleaseLongArrayElements") >= 0) {
                addrReleaseLongArrayElements = symbol.address;
                console.log("ReleaseLongArrayElements is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("ReleaseFloatArrayElements") >= 0) {
                addrReleaseFloatArrayElements = symbol.address;
                console.log("ReleaseFloatArrayElements is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("ReleaseDoubleArrayElements") >= 0) {
                addrReleaseDoubleArrayElements = symbol.address;
                console.log("ReleaseDoubleArrayElements is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetBooleanArrayRegion") >= 0) {
                addrGetBooleanArrayRegion = symbol.address;
                console.log("GetBooleanArrayRegion is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetByteArrayRegion") >= 0) {
                addrGetByteArrayRegion = symbol.address;
                console.log("GetByteArrayRegion is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetCharArrayRegion") >= 0) {
                addrGetCharArrayRegion = symbol.address;
                console.log("GetCharArrayRegion is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetShortArrayRegion") >= 0) {
                addrGetShortArrayRegion = symbol.address;
                console.log("GetShortArrayRegion is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetIntArrayRegion") >= 0) {
                addrGetIntArrayRegion = symbol.address;
                console.log("GetIntArrayRegion is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetLongArrayRegion") >= 0) {
                addrGetLongArrayRegion = symbol.address;
                console.log("GetLongArrayRegion is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetFloatArrayRegion") >= 0) {
                addrGetFloatArrayRegion = symbol.address;
                console.log("GetFloatArrayRegion is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetDoubleArrayRegion") >= 0) {
                addrGetDoubleArrayRegion = symbol.address;
                console.log("GetDoubleArrayRegion is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetBooleanArrayRegion") >= 0) {
                addrSetBooleanArrayRegion = symbol.address;
                console.log("SetBooleanArrayRegion is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetByteArrayRegion") >= 0) {
                addrSetByteArrayRegion = symbol.address;
                console.log("SetByteArrayRegion is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetCharArrayRegion") >= 0) {
                addrSetCharArrayRegion = symbol.address;
                console.log("SetCharArrayRegion is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetShortArrayRegion") >= 0) {
                addrSetShortArrayRegion = symbol.address;
                console.log("SetShortArrayRegion is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetIntArrayRegion") >= 0) {
                addrSetIntArrayRegion = symbol.address;
                console.log("SetIntArrayRegion is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetLongArrayRegion") >= 0) {
                addrSetLongArrayRegion = symbol.address;
                console.log("SetLongArrayRegion is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetFloatArrayRegion") >= 0) {
                addrSetFloatArrayRegion = symbol.address;
                console.log("SetFloatArrayRegion is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("SetDoubleArrayRegion") >= 0) {
                addrSetDoubleArrayRegion = symbol.address;
                console.log("SetDoubleArrayRegion is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("RegisterNatives") >= 0) {
                addrRegisterNatives = symbol.address;
                console.log("RegisterNatives is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("UnregisterNatives") >= 0) {
                addrUnregisterNatives = symbol.address;
                console.log("UnregisterNatives is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("MonitorEnter") >= 0) {
                addrMonitorEnter = symbol.address;
                console.log("MonitorEnter is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("MonitorExit") >= 0) {
                addrMonitorExit = symbol.address;
                console.log("MonitorExit is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetJavaVM") >= 0) {
                addrGetJavaVM = symbol.address;
                console.log("GetJavaVM is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetStringRegion") >= 0) {
                addrGetStringRegion = symbol.address;
                console.log("GetStringRegion is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetStringUTFRegion") >= 0) {
                addrGetStringUTFRegion = symbol.address;
                console.log("GetStringUTFRegion is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetPrimitiveArrayCritical") >= 0) {
                addrGetPrimitiveArrayCritical = symbol.address;
                console.log("GetPrimitiveArrayCritical is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("ReleasePrimitiveArrayCritical") >= 0) {
                addrReleasePrimitiveArrayCritical = symbol.address;
                console.log("ReleasePrimitiveArrayCritical is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetStringCritical") >= 0) {
                addrGetStringCritical = symbol.address;
                console.log("GetStringCritical is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("ReleaseStringCritical") >= 0) {
                addrReleaseStringCritical = symbol.address;
                console.log("ReleaseStringCritical is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("NewWeakGlobalRef") >= 0) {
                addrNewWeakGlobalRef = symbol.address;
                console.log("NewWeakGlobalRef is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("DeleteWeakGlobalRef") >= 0) {
                addrDeleteWeakGlobalRef = symbol.address;
                console.log("DeleteWeakGlobalRef is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("ExceptionCheck") >= 0) {
                addrExceptionCheck = symbol.address;
                console.log("ExceptionCheck is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("NewDirectByteBuffer") >= 0) {
                addrNewDirectByteBuffer = symbol.address;
                console.log("NewDirectByteBuffer is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetDirectBufferAddress") >= 0) {
                addrGetDirectBufferAddress = symbol.address;
                console.log("GetDirectBufferAddress is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetDirectBufferCapacity") >= 0) {
                addrGetDirectBufferCapacity = symbol.address;
                console.log("GetDirectBufferCapacity is at ", symbol.address, symbol.name);
            }
            else if (symbol.name.indexOf("GetObjectRefType") >= 0) {
                addrGetObjectRefType = symbol.address;
                console.log("GetObjectRefType is at ", symbol.address, symbol.name);
            }
        }
    }

    if (addrGetStringUTFChars != null) {
        Interceptor.attach(addrGetStringUTFChars, {
            onEnter: function (args) {},
            onLeave: function (retval) {
                if (retval != null) {
                    var bytes = Memory.readCString(retval);
                    console.log("[GetStringUTFChars] result:" + bytes);
                }
            }
        });
    }
    if (addrNewStringUTF != null) {
        Interceptor.attach(addrNewStringUTF, {
            onEnter: function (args) {
                if (args[1] != null) {
                    var string = Memory.readCString(args[1]);
                    console.log("[NewStringUTF] bytes:" + string);
                }
            },
            onLeave: function (retval) {}
        });
    }
    if (addrFindClass != null) {
        Interceptor.attach(addrFindClass, {
            onEnter: function (args) {
                if (args[1] != null) {
                    var name = Memory.readCString(args[1]);
                    console.log("[FindClass] name:" + name);
                }
            },
            onLeave: function (retval) {}
        });
    }
    if (addrGetMethodID != null) {
        Interceptor.attach(addrGetMethodID, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var name = Memory.readCString(args[2]);
                    if (args[3] != null) {
                        var sig = Memory.readCString(args[3]);
                        console.log("[GetMethodID] name:" + name + ", sig:" + sig);
                    } else {
                        console.log("[GetMethodID] name:" + name);
                    }

                }
            },
            onLeave: function (retval) {
                var methodid = ptr(retval);
                console.log("[GetMethodID] methodid:" + methodid);
            }
        });
    }
    if (addrGetStaticMethodID != null) {
        Interceptor.attach(addrGetStaticMethodID, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var name = Memory.readCString(args[2]);
                    if (args[3] != null) {
                        var sig = Memory.readCString(args[3]);
                        console.log("[GetStaticMethodID] name:" + name + ", sig:" + sig);
                    } else {
                        console.log("[GetStaticMethodID] name:" + name);
                    }

                }
            },
            onLeave: function (retval) {
                var methodid = ptr(retval);
                console.log("[GetStaticMethodID] methodid:" + methodid);
            }
        });
    }
    if (addrGetFieldID != null) {
        Interceptor.attach(addrGetFieldID, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var name = Memory.readCString(args[2]);
                    if (args[3] != null) {
                        var sig = Memory.readCString(args[3]);
                        console.log("[GetFieldID] name:" + name + ", sig:" + sig);
                    } else {
                        console.log("[GetFieldID] name:" + name);
                    }

                }
            },
            onLeave: function (retval) {}
        });
    }
    if (addrGetStaticFieldID != null) {
        Interceptor.attach(addrGetStaticFieldID, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var name = Memory.readCString(args[2]);
                    if (args[3] != null) {
                        var sig = Memory.readCString(args[3]);
                        console.log("[GetStaticFieldID] name:" + name + ", sig:" + sig);
                    } else {
                        console.log("[GetStaticFieldID] name:" + name);
                    }

                }
            },
            onLeave: function (retval) {}
        });
    }

    if (addrRegisterNatives != null) {
        Interceptor.attach(addrRegisterNatives, {
            onEnter: function (args) {
                console.log("[RegisterNatives] method_count:", args[3]);
                var env = args[0];
                var java_class = args[1];
                var class_name = Java.vm.tryGetEnv().getClassName(java_class);

                var methods_ptr = ptr(args[2]);

                var method_count = parseInt(args[3]);
                for (var i = 0; i < method_count; i++) {
                    var name_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3));
                    var sig_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3 + Process.pointerSize));
                    var fnPtr_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3 + Process.pointerSize * 2));

                    var name = Memory.readCString(name_ptr);
                    var sig = Memory.readCString(sig_ptr);
                    var find_module = Process.findModuleByAddress(fnPtr_ptr);
                    console.log("[RegisterNatives] java_class:", class_name, "name:", name, "sig:", sig, "fnPtr:", fnPtr_ptr, "module_name:", find_module.name, "module_base:", find_module.base, "offset:", ptr(fnPtr_ptr).sub(find_module.base));

                }
            },
            onLeave: function (retval) {}
        });
    }







    if (addrCallObjectMethod != null) {
        Interceptor.attach(addrCallObjectMethod, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallObjectMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallObjectMethodV != null) {
        Interceptor.attach(addrCallObjectMethodV, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallObjectMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallObjectMethodA != null) {
        Interceptor.attach(addrCallObjectMethodA, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallObjectMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallBooleanMethod != null) {
        Interceptor.attach(addrCallBooleanMethod, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallBooleanMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallBooleanMethodV != null) {
        Interceptor.attach(addrCallBooleanMethodV, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallBooleanMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallBooleanMethodA != null) {
        Interceptor.attach(addrCallBooleanMethodA, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallBooleanMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallByteMethod != null) {
        Interceptor.attach(addrCallByteMethod, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallByteMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallByteMethodV != null) {
        Interceptor.attach(addrCallByteMethodV, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallByteMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallByteMethodA != null) {
        Interceptor.attach(addrCallByteMethodA, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallByteMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallCharMethod != null) {
        Interceptor.attach(addrCallCharMethod, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallCharMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallCharMethodV != null) {
        Interceptor.attach(addrCallCharMethodV, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallCharMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallCharMethodA != null) {
        Interceptor.attach(addrCallCharMethodA, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallCharMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallShortMethod != null) {
        Interceptor.attach(addrCallShortMethod, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallShortMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallShortMethodV != null) {
        Interceptor.attach(addrCallShortMethodV, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallShortMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallShortMethodA != null) {
        Interceptor.attach(addrCallShortMethodA, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallShortMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallIntMethod != null) {
        Interceptor.attach(addrCallIntMethod, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallIntMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallIntMethodV != null) {
        Interceptor.attach(addrCallIntMethodV, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallIntMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallIntMethodA != null) {
        Interceptor.attach(addrCallIntMethodA, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallIntMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallLongMethod != null) {
        Interceptor.attach(addrCallLongMethod, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallLongMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallLongMethodV != null) {
        Interceptor.attach(addrCallLongMethodV, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallLongMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallLongMethodA != null) {
        Interceptor.attach(addrCallLongMethodA, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallLongMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallFloatMethod != null) {
        Interceptor.attach(addrCallFloatMethod, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallFloatMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallFloatMethodV != null) {
        Interceptor.attach(addrCallFloatMethodV, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallFloatMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallFloatMethodA != null) {
        Interceptor.attach(addrCallFloatMethodA, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallFloatMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallDoubleMethod != null) {
        Interceptor.attach(addrCallDoubleMethod, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallDoubleMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallDoubleMethodV != null) {
        Interceptor.attach(addrCallDoubleMethodV, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallDoubleMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallDoubleMethodA != null) {
        Interceptor.attach(addrCallDoubleMethodA, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallDoubleMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallVoidMethod != null) {
        Interceptor.attach(addrCallVoidMethod, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallVoidMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallVoidMethodV != null) {
        Interceptor.attach(addrCallVoidMethodV, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallVoidMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallVoidMethodA != null) {
        Interceptor.attach(addrCallVoidMethodA, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallVoidMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualObjectMethod != null) {
        Interceptor.attach(addrCallNonvirtualObjectMethod, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualObjectMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualObjectMethodV != null) {
        Interceptor.attach(addrCallNonvirtualObjectMethodV, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualObjectMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualObjectMethodA != null) {
        Interceptor.attach(addrCallNonvirtualObjectMethodA, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualObjectMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualBooleanMethod != null) {
        Interceptor.attach(addrCallNonvirtualBooleanMethod, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualBooleanMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualBooleanMethodV != null) {
        Interceptor.attach(addrCallNonvirtualBooleanMethodV, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualBooleanMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualBooleanMethodA != null) {
        Interceptor.attach(addrCallNonvirtualBooleanMethodA, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualBooleanMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualByteMethod != null) {
        Interceptor.attach(addrCallNonvirtualByteMethod, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualByteMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualByteMethodV != null) {
        Interceptor.attach(addrCallNonvirtualByteMethodV, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualByteMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualByteMethodA != null) {
        Interceptor.attach(addrCallNonvirtualByteMethodA, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualByteMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualCharMethod != null) {
        Interceptor.attach(addrCallNonvirtualCharMethod, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualCharMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualCharMethodV != null) {
        Interceptor.attach(addrCallNonvirtualCharMethodV, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualCharMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualCharMethodA != null) {
        Interceptor.attach(addrCallNonvirtualCharMethodA, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualCharMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualShortMethod != null) {
        Interceptor.attach(addrCallNonvirtualShortMethod, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualShortMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualShortMethodV != null) {
        Interceptor.attach(addrCallNonvirtualShortMethodV, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualShortMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualShortMethodA != null) {
        Interceptor.attach(addrCallNonvirtualShortMethodA, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualShortMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualIntMethod != null) {
        Interceptor.attach(addrCallNonvirtualIntMethod, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualIntMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualIntMethodV != null) {
        Interceptor.attach(addrCallNonvirtualIntMethodV, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualIntMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualIntMethodA != null) {
        Interceptor.attach(addrCallNonvirtualIntMethodA, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualIntMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualLongMethod != null) {
        Interceptor.attach(addrCallNonvirtualLongMethod, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualLongMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualLongMethodV != null) {
        Interceptor.attach(addrCallNonvirtualLongMethodV, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualLongMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualLongMethodA != null) {
        Interceptor.attach(addrCallNonvirtualLongMethodA, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualLongMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualFloatMethod != null) {
        Interceptor.attach(addrCallNonvirtualFloatMethod, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualFloatMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualFloatMethodV != null) {
        Interceptor.attach(addrCallNonvirtualFloatMethodV, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualFloatMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualFloatMethodA != null) {
        Interceptor.attach(addrCallNonvirtualFloatMethodA, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualFloatMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualDoubleMethod != null) {
        Interceptor.attach(addrCallNonvirtualDoubleMethod, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualDoubleMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualDoubleMethodV != null) {
        Interceptor.attach(addrCallNonvirtualDoubleMethodV, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualDoubleMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualDoubleMethodA != null) {
        Interceptor.attach(addrCallNonvirtualDoubleMethodA, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualDoubleMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualVoidMethod != null) {
        Interceptor.attach(addrCallNonvirtualVoidMethod, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualVoidMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualVoidMethodV != null) {
        Interceptor.attach(addrCallNonvirtualVoidMethodV, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualVoidMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallNonvirtualVoidMethodA != null) {
        Interceptor.attach(addrCallNonvirtualVoidMethodA, {
            onEnter: function (args) {
                if (args[3] != null) {
                    var methodid = ptr(args[3]);
                    console.log("[CallNonvirtualVoidMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticObjectMethod != null) {
        Interceptor.attach(addrCallStaticObjectMethod, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticObjectMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticObjectMethodV != null) {
        Interceptor.attach(addrCallStaticObjectMethodV, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticObjectMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticObjectMethodA != null) {
        Interceptor.attach(addrCallStaticObjectMethodA, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticObjectMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticBooleanMethod != null) {
        Interceptor.attach(addrCallStaticBooleanMethod, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticBooleanMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticBooleanMethodV != null) {
        Interceptor.attach(addrCallStaticBooleanMethodV, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticBooleanMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticBooleanMethodA != null) {
        Interceptor.attach(addrCallStaticBooleanMethodA, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticBooleanMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticByteMethod != null) {
        Interceptor.attach(addrCallStaticByteMethod, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticByteMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticByteMethodV != null) {
        Interceptor.attach(addrCallStaticByteMethodV, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticByteMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticByteMethodA != null) {
        Interceptor.attach(addrCallStaticByteMethodA, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticByteMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticCharMethod != null) {
        Interceptor.attach(addrCallStaticCharMethod, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticCharMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticCharMethodV != null) {
        Interceptor.attach(addrCallStaticCharMethodV, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticCharMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticCharMethodA != null) {
        Interceptor.attach(addrCallStaticCharMethodA, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticCharMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticShortMethod != null) {
        Interceptor.attach(addrCallStaticShortMethod, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticShortMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticShortMethodV != null) {
        Interceptor.attach(addrCallStaticShortMethodV, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticShortMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticShortMethodA != null) {
        Interceptor.attach(addrCallStaticShortMethodA, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticShortMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticIntMethod != null) {
        Interceptor.attach(addrCallStaticIntMethod, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticIntMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticIntMethodV != null) {
        Interceptor.attach(addrCallStaticIntMethodV, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticIntMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticIntMethodA != null) {
        Interceptor.attach(addrCallStaticIntMethodA, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticIntMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticLongMethod != null) {
        Interceptor.attach(addrCallStaticLongMethod, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticLongMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticLongMethodV != null) {
        Interceptor.attach(addrCallStaticLongMethodV, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticLongMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticLongMethodA != null) {
        Interceptor.attach(addrCallStaticLongMethodA, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticLongMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticFloatMethod != null) {
        Interceptor.attach(addrCallStaticFloatMethod, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticFloatMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticFloatMethodV != null) {
        Interceptor.attach(addrCallStaticFloatMethodV, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticFloatMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticFloatMethodA != null) {
        Interceptor.attach(addrCallStaticFloatMethodA, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticFloatMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticDoubleMethod != null) {
        Interceptor.attach(addrCallStaticDoubleMethod, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticDoubleMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticDoubleMethodV != null) {
        Interceptor.attach(addrCallStaticDoubleMethodV, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticDoubleMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticDoubleMethodA != null) {
        Interceptor.attach(addrCallStaticDoubleMethodA, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticDoubleMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticVoidMethod != null) {
        Interceptor.attach(addrCallStaticVoidMethod, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticVoidMethod] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticVoidMethodV != null) {
        Interceptor.attach(addrCallStaticVoidMethodV, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticVoidMethodV] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
    if (addrCallStaticVoidMethodA != null) {
        Interceptor.attach(addrCallStaticVoidMethodA, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var methodid = ptr(args[2]);
                    console.log("[CallStaticVoidMethodA] methodID:" + methodid);
                }
            },
            onLeave: function (retval) { }
        });
    }
}

setImmediate(hook_libart);

