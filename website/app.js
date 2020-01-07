const table = document.createElement("table");

for(let i = 0; i < 4; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
        let td = document.createElement("td");
        td.addEventListener("click", function(){
            if (this.getElementsByTagName("input").length) return;
            const input = document.createElement("input");
            input.value = td.childNodes[0].textContent;
            input.addEventListener("blur", function() {
                let text = this.value;
                td.removeChild(this);
                td.appendChild(document.createTextNode(text));
            });
            td.removeChild(td.childNodes[0]);
            td.appendChild(input);
            input.focus();
        })
        let text = document.createTextNode("Lorem ipsum");
        td.appendChild(text);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

let root = document.getElementById("root");
root.appendChild(table);