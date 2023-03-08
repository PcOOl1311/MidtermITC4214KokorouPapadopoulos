// Declare an empty array to hold grocery items
let items = [];

// Function to add a grocery item to the items array
function addItem() {
    // Get the name and quantity values entered by the user from the input fields
    const NameofGrocery = document.getElementById("NameofGrocery").value;
    const Quantity = document.getElementById("Quantity").value;
    // Check if both fields have a value
    if (NameofGrocery && Quantity) {
        // Add the item to the items array as an object with name and quantity properties
        items.push({name: NameofGrocery, quantity: parseInt(Quantity)});
        // Render the updated grocery list
        renderList();
        // Clear the input fields after an item is added for both Categories
        document.getElementById("NameofGrocery").value = "";
        document.getElementById("Quantity").value = "";
    }
}

// creates a table in the HTML with rows for each item in the items array. Each row has three columns:
// the first column displays the name of the item, the second column displays the quantity, and the third column
// has a button that can be clicked to delete the row.
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


// is an event handler that is called when the delete button in a row is clicked. It extracts the index of the row from
// the data-index attribute of the parent <tr> element, removes the corresponding item from the items array,
// and then calls renderList() to update the table.
function deleteItem(event) {
    const index = event.target.parentNode.parentNode.getAttribute("data-index");
    items.splice(index, 1);
    renderList();
}


// sorts the items array based on the column specified by the column parameter. If column is 0, the array is sorted
// alphabetically by name using the localeCompare() method. If column is 1, the array is sorted numerically by quantity
// using a simple subtraction. After sorting, renderList() is called to update the table.
function sortList(column) {
    if (column === 0) {
        items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (column === 1) {
        items.sort((a, b) => a.quantity - b.quantity);
    }
    renderList();
}

$(document).ready(function () {
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});