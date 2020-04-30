class DNObjectiveCTypeConverter {
    DNObjectiveCTypeConverter() {
        if (!DNObjectiveCTypeConverter.instance) {
        DNObjectiveCTypeConverter.instance = this
        }
        return DNObjectiveCTypeConverter.instance
    }

    convert(objcType,isMethodArg){
        var convertRet = DNObjectiveCTypeConverter.DNObjectiveCTypeMap[objcType]
        convertRet = (!convertRet && !isMethodArg) ? DNObjectiveCTypeConverter.SupportMutableTypesMap[objcType] : convertRet
        // convertRet = (!convertRet && !isMethodArg) ? '123123' : 'asd'
        return convertRet ? convertRet : objcType
    }
}

//Not yet confirmed what type need to convert
DNObjectiveCTypeConverter.DNObjectiveCTypeMap = {
//   objc type            ||        dart type
    'int8_t'                :       'int',
    'int16_t'               :       'int',
    'int32_t'               :       'int',
    'int64_t'               :       'int',
    'uint8_t'               :       'int',
    'uint16_t'              :       'int',
    'uint32_t'              :       'int',
    'uint64_t'              :       'int',
    'CGFloat'               :       'double',
    'id'                    :       'dynamic',
    'BOOL'                  :       'bool',
    '_Bool'                 :       'bool',
    'void *'                :       'Pointer<Void>',             
    'char *'                :       'String',
    'NSString'              :       'String',
    'NSMutableString'       :       'String',
    'NSArray'               :       'List',
    'NSDictionary'          :       'Map',
    'NSSet'                 :       'Set',
}

// dart-native support mutable types
DNObjectiveCTypeConverter.SupportMutableTypes = [
    'NUMutableString',
    'NSMutableArray',
    'NSMutableSet',
    'NSMutableDictionary'
]

DNObjectiveCTypeConverter.SupportMutableTypesMap = {
    'NSMutableString': 'String',
    'NSMutableArray' : 'List',
    'NSMutableSet' : 'Set',
    'NSMutableDictionary' : 'Map'
}
exports.DNObjectiveCTypeConverter = DNObjectiveCTypeConverter