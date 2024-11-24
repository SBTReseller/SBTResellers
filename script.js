// Winkelwagen functionaliteit
let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(`${productName} is toegevoegd aan je winkelwagen!`);
}

// Scroll naar producten
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}
