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
            return typeof(variable) == type.toLowerCase();
            break;
        case "null":
            return ((typeof(variable) == "object") && (variable == null));
            break;
        case "object":
            return typeof(variable) == type.toLowerCase();
            break;
        default:
            return undefined;
    }
}