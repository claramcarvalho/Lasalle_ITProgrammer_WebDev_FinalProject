let data_all_orders = JSON.parse(localStorage.getItem('orders'))
let all_orders = [];

if (data_all_orders != null) {
    all_orders = data_all_orders
    LoadOrders()
}

function LoadOrders() {
    for (const line of all_orders) {
        let section_all_orders = document.querySelector("#all_orders>div")

        //creating div
        let div = document.createElement("div")
        section_all_orders.appendChild(div)
        //creating table
        let table = document.createElement("table")
        div.appendChild(table)
        //creating thead
        let thead = document.createElement("thead")
        table.appendChild(thead)

        let tr_head = document.createElement("tr")
        thead.appendChild(tr_head)

        let thid = document.createElement("th")
        thid.textContent = "ID"
        let thname = document.createElement("th")
        thname.textContent = "Customer"
        let thorder = document.createElement("th")
        thorder.textContent = "List of Items"

        tr_head.appendChild(thid)
        tr_head.appendChild(thname)
        tr_head.appendChild(thorder)
        //creating tbody
        let tbody = document.createElement("tbody")
        table.appendChild(tbody)

        let tr_body = document.createElement("tr")
        tbody.appendChild(tr_body)

        let tdid = document.createElement("td")
        tdid.textContent = line.id
        let tdname = document.createElement("td")
        tdname.textContent = line.name
        let tdorder = document.createElement("td")

        tr_body.appendChild(tdid)
        tr_body.appendChild(tdname)
        tr_body.appendChild(tdorder)
        //creating list of items
        let order_table = document.createElement("table")
        tdorder.appendChild(order_table)

        let tbody_order_table = document.createElement("tbody")
        order_table.appendChild(tbody_order_table)

        for (const item of line.order) {
            let tr = document.createElement("tr")
            tbody_order_table.appendChild(tr)

            let td_item = document.createElement("td")
            td_item.textContent = item.item
            tr.appendChild(td_item)

            let td_quant = document.createElement("td")
            td_quant.textContent = item.quant
            tr.appendChild(td_quant)
        }

        let button = document.createElement("button")
        div.appendChild(button)
        button.textContent = "Ready"
        button.setAttribute("type", "button")
        button.addEventListener("click", () => {
            let position = FindPosition(line.id)
            all_orders.splice(position, 1)
            localStorage.setItem('orders', JSON.stringify(all_orders, null, 2))
            window.location.reload();
        })
    }
}

function FindPosition(id) {
    for (i = 0; i < all_orders.length; i++) {
        if (all_orders[i].id == id) {
            return i
        }
    }
}