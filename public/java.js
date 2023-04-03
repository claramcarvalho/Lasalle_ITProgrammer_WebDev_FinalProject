let total = 0;

//buttons menu
let button_menu = document.querySelector("#menu_button");
let button_close_menu = document.querySelector("#close_menu_button");

//buttons cart
let button_cart = document.querySelector("#cart_button");
let button_close_cart = document.querySelector("#close_cart_button");

//buttons menu
let button_gyoza_menu = document.querySelector("#link_gyoza");
let button_ramen_menu = document.querySelector("#link_ramen");
let button_share_menu = document.querySelector("#link_share");
let button_alcohol_menu = document.querySelector("#link_alcohol");
let button_soft_menu = document.querySelector("#link_soft");

//menus themselves
let gyoza_menu = document.querySelector("#gyoza_menu");
let ramen_menu = document.querySelector("#ramen_menu");
let share_menu = document.querySelector("#share_menu");
let alcohol_menu = document.querySelector("#alcohol_menu");
let soft_menu = document.querySelector("#soft_menu");

//open nav menu
function onClickOpenMenu() {
    let nav_menu = document.querySelector("#menu_nav>div");
    nav_menu.setAttribute("style", "display:flex");
}
function onClickCloseMenu() {
    let nav_menu = document.querySelector("#menu_nav>div");
    nav_menu.setAttribute("style", "display:none");
}

//open cart
function onClickOpenCart() {
    let cart = document.querySelector("#cart_itself");
    cart.setAttribute("style", "display:flex");
}
function onClickCloseCart() {
    let cart = document.querySelector("#cart_itself");
    cart.setAttribute("style", "display:none");
}

//open food menu
function onClickShowGyoza(event) {
    gyoza_menu.setAttribute("style", "display:grid");
    ramen_menu.setAttribute("style", "display:none");
    share_menu.setAttribute("style", "display:none");
    alcohol_menu.setAttribute("style", "display:none");
    soft_menu.setAttribute("style", "display:none");
}
function onClickShowRamen(event) {
    gyoza_menu.setAttribute("style", "display:none");
    ramen_menu.setAttribute("style", "display:grid");
    share_menu.setAttribute("style", "display:none");
    alcohol_menu.setAttribute("style", "display:none");
    soft_menu.setAttribute("style", "display:none");
}
function onClickShowShare(event) {
    gyoza_menu.setAttribute("style", "display:none");
    ramen_menu.setAttribute("style", "display:none");
    share_menu.setAttribute("style", "display:grid");
    alcohol_menu.setAttribute("style", "display:none");
    soft_menu.setAttribute("style", "display:none");
}
function onClickShowAlcohol() {
    gyoza_menu.setAttribute("style", "display:none");
    ramen_menu.setAttribute("style", "display:none");
    share_menu.setAttribute("style", "display:none");
    alcohol_menu.setAttribute("style", "display:grid");
    soft_menu.setAttribute("style", "display:none");
}
function onClickShowSoft() {
    gyoza_menu.setAttribute("style", "display:none");
    ramen_menu.setAttribute("style", "display:none");
    share_menu.setAttribute("style", "display:none");
    alcohol_menu.setAttribute("style", "display:none");
    soft_menu.setAttribute("style", "display:grid");
}

// event listeners
button_menu.addEventListener("click", onClickOpenMenu);
button_close_menu.addEventListener("click", onClickCloseMenu);
button_cart.addEventListener("click", onClickOpenCart);
button_close_cart.addEventListener("click", onClickCloseCart);
button_gyoza_menu.addEventListener("click", onClickShowGyoza);
button_ramen_menu.addEventListener("click", onClickShowRamen);
button_share_menu.addEventListener("click", onClickShowShare);
button_alcohol_menu.addEventListener("click", onClickShowAlcohol);
button_soft_menu.addEventListener("click", onClickShowSoft);

/*
 * ================ begin gyoza cart====================*/

let bt_AddGyoza = document.querySelector("#gyoza_menu button");
let gyozaForm = document.querySelector("#form_gyoza");

bt_AddGyoza.addEventListener("click", onClickAddGyoza);

function onClickAddGyoza()
{
    let gyozaRdButtons = gyozaForm.querySelectorAll("input[name=gyoza]");
    let flavor_Selected = null;
    let sizeRdButtons = gyozaForm.querySelectorAll("input[name=quant]");
    let quant_Selected = null;

    for (const gyoza of gyozaRdButtons) {
        if (gyoza.checked) { flavor_Selected = gyoza.value }
    }
    for (const quant of sizeRdButtons) {
        if (quant.checked) { quant_Selected = quant.value }
    }

    if (flavor_Selected == null) {
        alert("Please select one of the flavors before adding to the Cart.")
        return null;
    }
    else if (quant_Selected == null) {
        alert("Please select the quantity before adding to the Cart.")
        return null;
    }

    let price;

    switch (quant_Selected) {
        case "2 un.":
            price = 7;
            break;
        case "4 un.":
            price = 10;
            break;
        case "8 un.":
            price = 15;
            break;
        }
    

    AddRowToCart("Gyoza", flavor_Selected, quant_Selected, price);
    onClickOpenCart();
    total = total + price;

    let sum = cart.querySelector("#cart_itself>h4");
    sum.textContent = `Total: ${total.toFixed(2)}`;
}

/*
 * ================ end gyoza cart====================*/

/*
 * ================ begin Ramen carts====================*/

let bt_AddRamen = document.querySelector("#ramen_menu button");
let ramenForm = document.querySelector("#form_ramen");

bt_AddRamen.addEventListener("click", onClickAddRamen);
//bt_AddRamen.addEventListener("click", onClickAdd(ramenForm,"ramen","Ramens",18.99));

function onClickAddRamen() {
    let ramenRdButtons = ramenForm.querySelectorAll("input[name=ramen]");
    let flavor_Selected = null;
    let sizeInpBox = ramenForm.querySelector("input[name=quantity]");
    let quant_Selected = null;

    for (const ramen of ramenRdButtons) {
        if (ramen.checked) { flavor_Selected = ramen.value }
    }

    quant_Selected = sizeInpBox.value;

    if (flavor_Selected == null) {
        alert("Please select one of the Ramens before adding to the Cart.")
        return null;
    }
    else if (quant_Selected == null) {
        alert("Please select the quantity before adding to the Cart.")
        return null;
    }

    let price = quant_Selected*18.99;

    AddRowToCart("Ramen", flavor_Selected, quant_Selected, price);
    onClickOpenCart();
    total = total + price;

    let sum = cart.querySelector("#cart_itself>h4");
    sum.textContent = `Total: ${total.toFixed(2)}`;
}

/*
 * ================ end Ramen cart====================*/

/*
 * ================ begin Share carts====================*/

let bt_AddShare = document.querySelector("#share_menu button");
let shareForm = document.querySelector("#form_share");

bt_AddShare.addEventListener("click", onClickAddShare);

function onClickAddShare() {
    let RdButtons = shareForm.querySelectorAll("input[name=share]");
    let flavor_Selected = null;
    let sizeInpBox = shareForm.querySelector("input[name=quantity]");
    let quant_Selected = null;

    for (const item of RdButtons) {
        if (item.checked) { flavor_Selected = item.value }
    }

    quant_Selected = sizeInpBox.value;

    if (flavor_Selected == null) {
        alert("Please select one of the Plates to Share before adding to the Cart.")
        return null;
    }
    else if (quant_Selected == null) {
        alert("Please select the quantity before adding to the Cart.")
        return null;
    }

    let price = quant_Selected * 23.99;

    AddRowToCart("To Share", flavor_Selected, quant_Selected, price);
    onClickOpenCart();
    total = total + price;

    let sum = cart.querySelector("#cart_itself>h4");
    sum.textContent = `Total: ${total.toFixed(2)}`;
}

/*
 * ================ end Share cart====================*/

/*
 * ================ begin Alcohol carts====================*/

let bt_AddAlcohol = document.querySelector("#alcohol_menu button");
let alcoholForm = document.querySelector("#form_alcohol");

bt_AddAlcohol.addEventListener("click", onClickAddAlcohol);

function onClickAddAlcohol() {
    let RdButtons = alcoholForm.querySelectorAll("input[name=drink]");
    let flavor_Selected = null;
    let sizeInpBox = alcoholForm.querySelector("input[name=quantity]");
    let quant_Selected = null;

    for (const item of RdButtons) {
        if (item.checked) { flavor_Selected = item.value }
    }

    quant_Selected = sizeInpBox.value;

    if (flavor_Selected == null) {
        alert("Please select one of the Drinks before adding to the Cart.")
        return null;
    }
    else if (quant_Selected == null) {
        alert("Please select the quantity before adding to the Cart.")
        return null;
    }

    let price = quant_Selected * 12.50;

    AddRowToCart("Alcoholic Beverages", flavor_Selected, quant_Selected, price);
    onClickOpenCart();
    total = total + price;

    let sum = cart.querySelector("#cart_itself>h4");
    sum.textContent = `Total: ${total.toFixed(2)}`;
}

/*
 * ================ end Alcohol cart====================*/

/*
 * ================ begin Soft carts====================*/

let bt_AddSoft = document.querySelector("#soft_menu button");
let softForm = document.querySelector("#form_soft");

bt_AddSoft.addEventListener("click", onClickAddSoft);

function onClickAddSoft() {
    let RdButtons = softForm.querySelectorAll("input[name=soft]");
    let flavor_Selected = null;
    let sizeInpBox = softForm.querySelector("input[name=quantity]");
    let quant_Selected = null;

    for (const item of RdButtons) {
        if (item.checked) { flavor_Selected = item.value }
    }

    quant_Selected = sizeInpBox.value;

    if (flavor_Selected == null) {
        alert("Please select one of the Beverages before adding to the Cart.")
        return null;
    }
    else if (quant_Selected == null) {
        alert("Please select the quantity before adding to the Cart.")
        return null;
    }

    let price = quant_Selected * 9.50;

    AddRowToCart("Non-alcoholic Beverages", flavor_Selected, quant_Selected, price);
    onClickOpenCart();
    total = total + price;

    let sum = cart.querySelector("#cart_itself>h4");
    sum.textContent = `Total: ${total.toFixed(2)}`;
}

/*
 * ================ end Soft cart====================*/

/*
 * ----------------SELECTIONS ON CARTS----------------
 * */

function AddRowToCart(type_plate, flavor_Selected, quant_Selected, price) {

    let table = document.querySelector("#cart_itself>table");
    let tr = document.createElement("tr");

    let td_type = document.createElement("td");
    td_type.textContent = type_plate;
    let td_flavor = document.createElement("td");
    td_flavor.textContent = flavor_Selected;
    let td_quantity = document.createElement("td");
    td_quantity.textContent = quant_Selected;
    let td_price = document.createElement("td");
    td_price.textContent = "CAD$ " + price;
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
    tr.appendChild(td_delete);
    //appending row
    table.appendChild(tr);

    del_img.addEventListener("click", () => {
        tr.remove();
        total = total - price;
        let sum = cart.querySelector("#cart_itself>h4");
        sum.textContent = `Total: ${total.toFixed(2)}`;
    })
}

/*trying to make only one function*/
//function onClickAdd(form, type, name, unPrice) {
//    let RdButtons = form.querySelectorAll(`input[name="${CSS.escape(type)}"]`);
//    let flavor_Selected = null;
//    let sizeInpBox = form.querySelector("input[name=quantity]");
//    let quant_Selected = null;

//    for (const item of RdButtons) {
//        if (item.checked) { flavor_Selected = item.value }
//    }

//    quant_Selected = sizeInpBox.value;

//    if (flavor_Selected == null) {
//        alert(`Please select one of the "${name}" before adding to the Cart.`);
//        return null;
//    }
//    else if (quant_Selected == null) {
//        alert("Please select the quantity before adding to the Cart.")
//        return null;
//    }

//    let price = quant_Selected * unPrice;

//    AddRowToCart(name, flavor_Selected, quant_Selected, price);
//}

