function type_check_v1(variable, type) {
    switch (type.toLowerCase()) {
        case "array":
            return Array.isArray(variable)
        case "null":
            return variable === null;
        case "object":
            return !Array.isArray(variable)
        default:
            return typeof(variable) == type.toLowerCase();
    }
}

function type_check_v2(variable, conf) {
    if (conf.hasOwnProperty('type')) {
        return type_check_v1(variable, conf.type);
    }

    if (conf.hasOwnProperty('value')) {
        return variable === conf.variable
    }

    return true
}