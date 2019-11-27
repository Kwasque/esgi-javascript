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

    return str.replace(/a/gi, "4").replace(/e/gi, "3").replace(/i/gi, "1").replace(/o/gi, "0").replace(/u/gi, "(_)").replace(/y/gi, "7");
} 

function verlan(str) {
    if(typeof str !== "string" || !str) return '';

    return str.split(" ").map(element => {
        return element.split("").reverse().join("");
    }).join(" ");
}

function yoda(str) {
    if(typeof str !== "string" || !str) return '';

    return str.split(" ").reverse().join(" ");
}

function vig(str) {
    if(typeof str !== "string" || !str) return '';

}
