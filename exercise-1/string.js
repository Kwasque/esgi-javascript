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

function vig(str, code) {
    if(typeof str !== "string" || !str) return '';
    if(typeof code !== "string" || !code) return '';

    while(code.length < str.length) {
        code += code;
    }

    let codeIndex = 0;
    return str.toLowerCase().split('').map(function(char) {
        const charCode = char.charCodeAt(0) - "a".charCodeAt(0);
        if (charCode < 0 || charCode > 25) return char;
        const codeCode = code[codeIndex++].charCodeAt(0) - "a".charCodeAt(0);
        const cryptedCode = (charCode + codeCode) % 26;
        const cryptedChar = cryptedCode + "a".charCodeAt(0);
        return String.fromCharCode(cryptedChar);
    }).join("");
}

function prop_access(obj, str) {
    if(typeof str !== "string" || !str) return '';

    var newObj = obj, returnValue = '';

    strSplit = str.split(".");
    strSplit.forEach(element => {
        if (!returnValue) {
            newObj = newObj[element];
            if (!newObj) {
                returnValue = str.substring(0, str.indexOf(element) + element.length) + " not exist";
            }
        }
    });

    if (returnValue) {
        return returnValue;
    } else {
        return newObj;
    }
}