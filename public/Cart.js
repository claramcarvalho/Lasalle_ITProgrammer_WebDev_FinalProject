let nbitens = 0;
let total = 0;
let cart = [];
let current_id = 0;
let data = JSON.parse(localStorage.getItem('cart'))

let cart_object = document.querySelector("#cart_itself");

let bt_AddGyoza = document.querySelector("#gyoza_menu button");
let gyozaForm = document.querySelector("#form_gyoza");
bt_AddGyoza.addEventListener("click", () => onClickAdd(gyozaForm, "gyoza", "Gyoza", 2.99));

let bt_AddRamen = document.querySelector("#ramen_menu button");
let ramenForm = document.querySelector("#form_ramen");
bt_AddRamen.addEventListener("click", () => onClickAdd(ramenForm, "ramen", "Ramen", 18.99));

let bt_AddShare = document.querySelector("#share_menu button");
let shareForm = document.querySelector("#form_share");
bt_AddShare.addEventListener("click", () => onClickAdd(shareForm, "share", "Plates to Share", 23.99));

let bt_AddAlcohol = document.querySelector("#alcohol_menu button");
let alcoholForm = document.querySelector("#form_alcohol");
bt_AddAlcohol.addEventListener("click", () => onClickAdd(alcoholForm, "drink", "Alcoholic Beverages", 12.50));

let bt_AddSoft = document.querySelector("#soft_menu button");
let softForm = document.querySelector("#form_soft");
bt_AddSoft.addEventListener("click", () => onClickAdd(softForm, "soft", "Non Alcoholic Beverages", 9.50));

if (data != null) {
    cart = data
    LoadCart()
}

let bt_Empty = cart_object.querySelector("button")
bt_Empty.addEventListener("click", EmptyCart)

function onClickAdd(form, type, name, un_price) {
    let RdButtons = form.querySelectorAll(`input[name=${type}]`);
    let flavor_Selected = "";
    let sizeInpBox = form.querySelector("input[name=quantity]");
    let quant_Selected = "";

    for (const item of RdButtons) {
        if (item.checked) { flavor_Selected = item.value }
    }

    quant_Selected = sizeInpBox.value;

    if (flavor_Selected == "") {
        alert("Please select one item before adding to the Cart.")
        return null;
    }
    else if (quant_Selected == "") {
        alert("Please select the quantity before adding to the Cart.")
        return null;
    }

    let found = false;
    //go through cart to verify item was already chosen 
    for (i = 0; i < cart.length; i++) {
        if (cart[i].item == flavor_Selected) { //if flavor was found
            found = true //flag
            let item_sel = cart[i] //storage item in scope to alter it
            DeleteItem(cart[i].id) //delete from cart
            item_sel.quant = parseInt(item_sel.quant) + parseInt(quant_Selected) //actualize quantity
            cart.push(item_sel); //insert item in cart variable
            SaveCartLocalStorage() //save item in local storage
            DeleteAllChildsFromCart()
            LoadCart()
            ActualizeTotalCart()
            break
        }
    }

    if (found === false) {
        let item = { type: name, item: flavor_Selected, quant: quant_Selected, price: un_price }
        item.id = ++current_id

        AddItemToCart(item);
        onClickOpenCart();
        total = total + (quant_Selected * un_price);
        ActualizeTotalCart()
    }
}

function AddRow(item) {
    let table = document.querySelector("#cart_itself>table>tbody");

    if (nbitens === 0) {
        DeleteAllChildsFromCart()
    }
    let tr = document.createElement("tr");
    //cell type
    let td_type = document.createElement("td");
    td_type.textContent = item.type
    //cell flavor
    let td_flavor = document.createElement("td");
    td_flavor.textContent = item.item
    //cell quantity
    let td_quantity = document.createElement("td");
    let input_quantity = document.createElement("input");
    input_quantity.setAttribute('type', 'number');
    input_quantity.setAttribute('min', '1');
    input_quantity.value = parseInt(item.quant, 10);
    td_quantity.appendChild(input_quantity);
    //cell price unity
    let td_price = document.createElement("td");
    td_price.textContent = "CAD$ " + item.price;
    //cell price total
    let td_price_total = document.createElement("td");
    let price_total = item.quant * item.price;
    td_price_total.textContent = "CAD$ " + price_total.toFixed(2);
    //cell delete
    let td_delete = document.createElement("td");
    let del_img = document.createElement("img");
    del_img.setAttribute("src", "images/delete.png");
    del_img.setAttribute("alt", "delete_item");
    td_delete.appendChild(del_img);
    //appending cells
    tr.appendChild(td_type);
    tr.appendChild(td_flavor);
    tr.appendChild(td_quantity);
    tr.appendChild(td_price);
    tr.appendChild(td_price_total);
    tr.appendChild(td_delete);
    //appending row
    table.appendChild(tr);
    nbitens++;
    console.log(nbitens);

    del_img.addEventListener("click", () => {
        tr.remove();
        total = total - price_total;
        DeleteItem(item.id)
        ActualizeTotalCart()
        if (nbitens == 1) {
            EmptyCart();
        }
        else {
            nbitens--
        }
    })

    input_quantity.addEventListener('change', () => {
        let new_price = input_quantity.value * item.price;

        total = total - price_total + new_price;
        price_total = new_price;

        td_price_total.textContent = `CAD$ ${price_total.toFixed(2)}`;

        DeleteItem(item.id)
        item.quant = input_quantity.value
        cart.push(item);
        SaveCartLocalStorage()
        ActualizeTotalCart()
    })

}

function AddItemToCart(item) {
    AddRow(item)
    cart.push(item)
    SaveCartLocalStorage()
}

function DeleteItem(id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart.splice(i, 1);
            break;
        }
    }
    SaveCartLocalStorage();
}

function SaveCartLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart, null, 2))
}

function LoadCart() {
    for (const item of cart) {
        AddRow(item)
    }
}

function EmptyCart() {
    DeleteAllChildsFromCart()

    let table_cart = cart_object.querySelector("table>tbody");
    let tr_empty = document.createElement("tr")
    table_cart.appendChild(tr_empty);

    let td_empty = document.createElement("td");
    td_empty.setAttribute('colspan', 6)
    td_empty.textContent = "Your cart is empty!"
    tr_empty.appendChild(td_empty);

    cart = [];
    SaveCartLocalStorage()
}

function ActualizeTotalCart() {
    let total_cart = 0
    for (const item of cart) {
        total_cart = total_cart + (item.quant * item.price)
    }

    let sum = cart_object.querySelector("h4");
    sum.textContent = `Total: ${total_cart.toFixed(2)}`;
}

function DeleteAllChildsFromCart() {
    let table_cart = cart_object.querySelector("table>tbody");
    while (table_cart.firstChild) {
        table_cart.removeChild(table_cart.lastChild);
    }
    nbitens = 0
}