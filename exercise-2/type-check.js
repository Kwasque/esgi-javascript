function type_check_v1(variable, type) {
    switch (typeof variable) {
        case "object":
            if(Array.isArray(variable)) return type === "array";
            if(value === null) return type == "null";
        default:
            return typeof(variable) === type.toLowerCase();
    }
}

function type_check_v2(variable, conf) {
    if (conf.hasOwnProperty('type')) {
        return type_check_v1(variable, conf.type);
    }

    if (conf.hasOwnProperty('value')) {
        return variable === conf.variable
    }

    if (conf.hasOwnProperty('enum')) {

    }

    return true
}