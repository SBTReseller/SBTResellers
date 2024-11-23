let cart = [];

document.querySelectorAll('.buy-button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const productName = document.querySelectorAll('.product h3')[index].innerText;
        const productPrice = document.querySelectorAll('.product .price')[index].innerText;
        cart.push({ name: productName, price: productPrice });
        alert(`${productName} toegevoegd aan winkelwagen!`);
    });
});

document.getElementById('cart-button').addEventListener('click', () => {
    let cartDetails = cart.map(item => `${item.name} - ${item.price}`).join('\n');
    alert(`Winkelwagen:\n${cartDetails || "Je winkelwagen is leeg."}`);
});
