// Simpele interacties
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product toegevoegd aan winkelwagen!');
    });
});

document.getElementById('cart-button').addEventListener('click', () => {
    alert('Winkelwagen: Hier komen je producten!');
});
