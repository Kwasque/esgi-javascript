function type_check_v1(variable, type) {
    switch (type.toLowerCase()) {
        case "null":
            return ((typeof(variable) == "object") && (variable == null));
            break;
        default:
            return typeof(variable) == type.toLowerCase();
    }
}

function type_check_v2(variable, conf) {
    if (conf.hasOwnProperty('type')) {
        return type_check_v1(variable, conf.type);
    }

    if (conf.hasOwnProperty('value')) {

    }

    return true
}