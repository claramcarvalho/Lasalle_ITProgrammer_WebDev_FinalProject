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
    cart.setAttribute("style", "display:grid");
}
function onClickCloseCart() {
    let cart = document.querySelector("#cart_itself");
    cart.setAttribute("style", "display:none");
}

//open food menu
function onClickShowGyoza() {
    gyoza_menu.setAttribute("style", "display:grid");
    ramen_menu.setAttribute("style", "display:none");
    share_menu.setAttribute("style", "display:none");
    alcohol_menu.setAttribute("style", "display:none");
    soft_menu.setAttribute("style", "display:none");
}
function onClickShowRamen() {
    gyoza_menu.setAttribute("style", "display:none");
    ramen_menu.setAttribute("style", "display:grid");
    share_menu.setAttribute("style", "display:none");
    alcohol_menu.setAttribute("style", "display:none");
    soft_menu.setAttribute("style", "display:none");
}
function onClickShowShare() {
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
function onClickSubmitOrder(event) {
    event.PreventDefault();

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