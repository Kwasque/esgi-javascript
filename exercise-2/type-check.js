function type_check_v1(value, type) {
    switch (typeof value) {
        case "object":
            if(Array.isArray(value)) return type === "array";
            if(value === null) return type == "null";
        default:
            return typeof(value) === type.toLowerCase();
    }
}

function type_check_v2(value, conf) {
    for (key in conf) {
        switch(key) {
            case "type":
                if (!type_check_v1(value, conf[key])) return false;
            case "value":
                if (value !== conf[key]) return false;
            case "enum":
                conf[key].forEach(element => {
                    if (value === element) return true;
                });
                return false;
        } 
    }

    return true;
}