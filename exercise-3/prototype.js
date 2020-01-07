String.prototype.ucfirst = function() {
    if(typeof this.toString() !== "string" || !this.toString()) return '';
    
    return this.toString()[0].toUpperCase() + this.toString().substring(1);
}

console.log("mlzekamlzekaze".ucfirst());