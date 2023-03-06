let items = [];

function addItem() {
    const NameofGrocery = document.getElementById("NameofGrocery").value;
    const Quantity = document.getElementById("Quantity").value;
    if (NameofGrocery && Quantity) {
        items.push({name: NameofGrocery, quantity: parseInt(Quantity)});
        renderList();
        document.getElementById("NameofGrocery").value = "";
        document.getElementById("Quantity").value = "";
    }
}

function renderList() {
    const tbody = document.querySelector("#list tbody");
    tbody.innerHTML = "";
    for (let item = 0; item < items.length; item++) {
        const tr = document.createElement("tr");
        tr.setAttribute("data-index", item);
        const td1 = document.createElement("td");
        td1.innerText = items[item].name;
        const td2 = document.createElement("td");
        td2.innerText = items[item].quantity;
        const td3 = document.createElement("td");
        const button = document.createElement("button");
        button.innerText = "Delete";
        button.addEventListener("click", deleteItem);
        td3.appendChild(button);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
    }
}

function deleteItem(event) {
    const index = event.target.parentNode.parentNode.getAttribute("data-index");
    items.splice(index, 1);
    renderList();
}

function sortList(column) {
    if (column === 0) {
        items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (column === 1) {
        items.sort((a, b) => a.quantity - b.quantity);
    }
    renderList();
}
