function ucfirst(str) {
    if(typeof str !== "string" || !str) return '';
    
    return str[0].toUpperCase() + str.substring(1);
}

function capitalize(str) {
    if(typeof str !== "string" || !str) return '';

    return str.toLowerCase().split(" ").map(function(item) {
        return ucfirst(item);
    }).join(" ");
}

function camelCase(str) {
    if(typeof str !== "string" || !str) return '';

    return capitalize(str.replace("_", " ")).replace(/\s/gi, "");
}

function snake_case(str) {
    return str.toLowerCase().replace(/\s/gi, "_");
}