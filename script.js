const cart = []; 
const totalPriceElem = document.getElementById("total-price"); 
const cartItemsElem = document.getElementById("cart-items"); 


document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const menuItem = button.parentElement; 
        const itemName = menuItem.querySelector("h3").textContent; 
        const itemPrice = parseFloat(menuItem.getAttribute("data-price")); 
        cart.push({ name: itemName, price: itemPrice });
        updateCart(); 
    });
});

function updateCart() {
    cartItemsElem.innerHTML = ""; 
    let total = 0; 
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - ₹${item.price}`; 
        cartItemsElem.appendChild(listItem); 
        total += item.price; 
    });

    totalPriceElem.textContent = total.toFixed(2); 
}

document.getElementById("checkout").addEventListener("click", () => {
    if (cart.length > 0) { 
        alert("Thank you for your order!"); 
        cart.length = 0; 
        updateCart(); 
    } else {
        alert("Your cart is empty!"); 
    }
});
