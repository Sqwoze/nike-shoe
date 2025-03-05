let addPair = document.getElementById("add-pair")
let removePair = document.getElementById("remove-pair")
let pairCount = document.getElementById("pairs-counter")
let placeOrder = document.getElementById("order-placement")

let pairCounter = 0

function increment() {
    pairCounter += 1
    pairCount.textContent = pairCounter
}

function decrement() {
    pairCounter -= 1
    pairCount.textContent = pairCounter
}

function orderPlacement() {
    placeOrder.textContent = "Your order is successful."
    pairCount.textContent = 1
}