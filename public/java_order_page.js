let data_order = JSON.parse(localStorage.getItem('cart'))
let data_all_orders = JSON.parse(localStorage.getItem('orders'))
let cart = [];
let all_orders = [];
let id_order = 0;
let one_order = {};

let total = 0;

if (data_order != null) {
    cart = data_order
    LoadCart(cart)
    Calculate_Display_Total()
}

if (data_all_orders != null) {
    all_orders = data_all_orders
    FindLastID();
}

let button_send_order = document.querySelector("#complete_order > button");

// event listeners
button_send_order.addEventListener("click", onClickSubmitOrder);

function LoadCart(cart) {
    if (cart != null) {
        for (const item of cart) {
            AddRow(item)
        }
    }
    else {
        let table = document.querySelector("#review_order>table>tbody");
        let tr = document.createElement("tr");
        //cell type
        let td_empty = document.createElement("td");
        td_empty.setAttribute('colspan', 5)
        td_empty.textContent = "There are no items in Cart!"
        tr.appendChild(td_empty);
        table.appendChild(tr);
    }
}

function AddRow(item) {
    let table = document.querySelector("#review_order>div>table>tbody");

    let tr = document.createElement("tr");
    //cell type
    let td_type = document.createElement("td");
    td_type.textContent = item.type
    //cell flavor
    let td_flavor = document.createElement("td");
    td_flavor.textContent = item.item
    //cell quantity
    let td_quantity = document.createElement("td");
    td_quantity.textContent = item.quant
    //cell price unity
    let td_price = document.createElement("td");
    td_price.textContent = "CAD$ " + item.price;
    //cell price total
    let td_price_total = document.createElement("td");
    let price_total = item.quant * item.price;
    td_price_total.textContent = "CAD$ " + price_total.toFixed(2);
    //appending cells
    tr.appendChild(td_type);
    tr.appendChild(td_flavor);
    tr.appendChild(td_quantity);
    tr.appendChild(td_price);
    tr.appendChild(td_price_total);
    //appending row
    table.appendChild(tr);
}

function Calculate_Display_Total () {
    for (const item of cart) {
        total = total + (item.quant * item.price)
    }

    let textTotal = document.querySelector("#review_order>h3");

    textTotal.textContent = `Total: CAD$ ${total.toFixed(2)}`
}

function onClickSubmitOrder() {
    let input_fname = document.querySelector("#complete_order input:first-of-type")
    let input_lname = document.querySelector("#complete_order input:last-of-type")
    let name = input_fname.value + " " + input_lname.value
    let ok = true;

    if (input_fname.value == "") {
        alert("Please enter your first name!")
        ok = false;
    }

    if (input_lname.value == "") {
        alert("Please enter your last name!")
        ok = false;
    }

    if (ok === true) {
        one_order.id = ++id_order;
        one_order.order = cart;
        one_order.name = name;

        all_orders.push(one_order);

        localStorage.setItem('orders', JSON.stringify(all_orders, null, 2))
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart, null, 2))
        window.location = "index.html"
    }
}

function FindLastID() {
    for (const order of all_orders)
        if (order.id > id_order) {
            id_order = order.id
        }
}