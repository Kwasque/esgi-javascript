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
    if(typeof str !== "string" || !str) return '';

    return str.toLowerCase().replace(/\s/gi, "_");
}

function leet(str) {
    if(typeof str !== "string" || !str) return '';

    return str.replace("A", "4").replace("E", "3").replace("I", "1").replace("O", "0").replace("U", "(_)").replace("Y", "7");
} 

