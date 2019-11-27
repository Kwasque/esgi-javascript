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

    return str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "_");
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

function vig(texte, code) {
    if(typeof texte !== "string" || !texte) return '';
    while(code.length < texte.length) code += code; 
    let space = 0;
    return texte.split("").map(function(item, i) {
        if (texte.charCodeAt(i) < 91 && texte.charCodeAt(i) > 64) return (texte.charCodeAt(i) + code.charCodeAt(i - space) - 65 >= 91) ? String.fromCharCode(texte.charCodeAt(i) + code.charCodeAt(i - space) - 65 - 26) : String.fromCharCode(texte.charCodeAt(i) + code.charCodeAt(i - space) - 65);
        else if (texte.charCodeAt(i) < 123 && texte.charCodeAt(i) > 96) return (texte.charCodeAt(i) + code.charCodeAt(i - space) - 97 >= 123) ? String.fromCharCode(texte.charCodeAt(i) + code.charCodeAt(i - space) - 97 - 26) : String.fromCharCode(texte.charCodeAt(i) + code.charCodeAt(i - space) - 97);
        else {
            space ++;
            return texte[i];
        }
    }).join("");
}

function prop_access(str) {
    if(typeof str !== "string" || !str) return '';


}