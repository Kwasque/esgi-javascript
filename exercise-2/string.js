function type_check_v1(variable, type) {
    switch (type.toLowerCase()) {
        case "string":
            return typeof(variable) == type.toLowerCase();
            break;
        case "number":
            return typeof(variable) == type.toLowerCase();
            break;
        case "boolean":
            return typeof(variable) == type.toLowerCase();
            break;
        case "undefined":
            return typeof(variable) == type.toLowerCase();
            break;
        case "function":
            return typeof(variable);
            break;
        case "null":
            return typeof(variable) == type.toLowerCase();
            break;
        case "object":
            return typeof(variable) == type.toLowerCase();
            break;
        default:
            return undefined;
    }
}



console.log(type_check_v1("string", "string"))
console.log(type_check_v1(8, "number"))
console.log(type_check_v1(true, "boolean"))
console.log(type_check_v1(undefined, "undefined"))
console.log(type_check_v1(function(){}, "function"))
console.log(type_check_v1(null, "null"))
console.log(type_check_v1([0,1,2,3,4], "object"))
console.log(type_check_v1(new Object({toto: 123}), "object"))