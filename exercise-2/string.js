function type_check_v1(variable, type) {
    switch (type.toLowerCase()) {
        case "null":
            return ((typeof(variable) == "object") && (variable == null));
            break;
        default:
            return typeof(variable) == type.toLowerCase();
    }
}