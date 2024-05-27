document.addEventListener('DOMContentLoaded', function() {
    var cartSection = document.getElementById('cart-section');
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartSection.innerHTML = '<p>Ваша корзина пуста</p>';
    } else {
        cart.forEach(function(item) {
        });
    }
});