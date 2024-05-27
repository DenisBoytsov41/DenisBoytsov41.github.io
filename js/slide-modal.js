var modalElements = [
    document.getElementById('productModal'),
    document.getElementById('productModal1'),
    document.getElementById('productModal2'),
    document.getElementById('productModal3'),
    document.getElementById('productModal4'),
    document.getElementById('productModal5'),
    document.getElementById('productModal6'),
    document.getElementById('productModal7'),
    document.getElementById('productModal8')
];

var openModalButtons = [
    document.getElementById('openModalButton'),
    document.getElementById('openModalButton1'),
    document.getElementById('openModalButton2'),
    document.getElementById('openModalButton3'),
    document.getElementById('openModalButton4'),
    document.getElementById('openModalButton5'),
    document.getElementById('openModalButton6'),
    document.getElementById('openModalButton7'),
    document.getElementById('openModalButton8')
];

var closeModalButtons = [
    document.getElementById('closeModalButton'),
    document.getElementById('closeModalButton1'),
    document.getElementById('closeModalButton2'),
    document.getElementById('closeModalButton3'),
    document.getElementById('closeModalButton4'),
    document.getElementById('closeModalButton5'),
    document.getElementById('closeModalButton6'),
    document.getElementById('closeModalButton7'),
    document.getElementById('closeModalButton8')
];

var closeButtons = [
    document.getElementById('btn-secondary'),
    document.getElementById('btn-secondary1'),
    document.getElementById('btn-secondary2'),
    document.getElementById('btn-secondary3'),
    document.getElementById('btn-secondary4'),
    document.getElementById('btn-secondary5'),
    document.getElementById('btn-secondary6'),
    document.getElementById('btn-secondary7'),
    document.getElementById('btn-secondary8')
];
/*var quantity = [
    document.getElementById('quantity'),
    document.getElementById('quantity1'),
    document.getElementById('quantity2'),
    document.getElementById('quantity3'),
    document.getElementById('quantity4'),
    document.getElementById('quantity5'),
    document.getElementById('quantity6'),
    document.getElementById('quantity7'),
    document.getElementById('quantity8')
];
var addToCartButtons = [
    document.getElementById('addToCartButton'),
    document.getElementById('addToCartButton1'),
    document.getElementById('addToCartButton2'),
    document.getElementById('addToCartButton3'),
    document.getElementById('addToCartButton4'),
    document.getElementById('addToCartButton5'),
    document.getElementById('addToCartButton6'),
    document.getElementById('addToCartButton7'),
    document.getElementById('addToCartButton8')
];*/
var quantitys = null;
var addToCartButtons = document.querySelectorAll('.addToCartButton');
var addToCB = document.querySelectorAll('.button-add-to-cart');
var trashElement = document.querySelector(".trash");

// const productModal = Array.prototype.map.call("productModal",["Шашлык из филе курицы","400 г Подается с жареным картофелем, луком, лавашом и соусом","430 ₽"]);


function openModal(index) {
    modalElements[index].style.display = 'block';
}
//localStorage.clear();

function closeModal(index) {
    modalElements[index].style.display = 'none';
}

window.addEventListener('click', function(event) {
    for (var i = 0; i <= modalElements.length-1; i++) {
        if (event.target === modalElements[i]) {
            modalElements[i].style.display = 'none';
            trashElement.style.opacity = "0.5";
        }
    }
});

for (var i = 0; i <= addToCartButtons.length-1; i++) {
    addToCartButtons[i].onclick = function(index) {
        return function() {
            modalElements[index].style.display = 'none';
            trashElement.style.opacity = "0.5";
        };
    }(i);
}
for (var i = 0; i <= closeButtons.length-1; i++) {
    closeButtons[i].onclick = function(index) {
        return function() {
            modalElements[index].style.display = 'none';
            trashElement.style.opacity = "0.5";
        };
    }(i);
}
if(openModalButtons.length !=null)
{
    for (var i = 0; i <= openModalButtons.length-1; i++) {
        openModalButtons[i].addEventListener('click', function(index) {
            return function() {
                trashElement.style.opacity = "0.5";
                openModal(index);
            };
        }(i));
    }
}
for (var i = 0; i <= closeModalButtons.length-1; i++) {
    closeModalButtons[i].addEventListener('click', function(index) {
        return function() {
            trashElement.style.opacity = "0.5";
            closeModal(index);
        };
    }(i));
}

function addToCart() {
    console.log(quantity.length-1);
    for (var i = 0; i <= quantity.length-1; i++) {
        quantity[i].addEventListener('', function(index) {
            return function() {
                trashElement.style.opacity = "0.5";
                quantitys = quantity[index]
            };
        }(i));
    }
}


addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var productName = button.getAttribute('data-product-name');
        var quantityInputId = button.getAttribute('data-quantity-input');
        quantitys = Number(document.getElementById(quantityInputId).value);
        var description = button.getAttribute('data-description');
        var price = button.getAttribute('data-price');
        var img = button.getAttribute('data-img');

        var quantityInput = quantitys;
        trashElement.style.opacity = "1";

        addToCart(productName, quantityInput, description, price, img);
    });
});
addToCB.forEach(function(button) {
    button.addEventListener('click', function() {
        var productName = button.getAttribute('data-product-name');
        var quantityInputId = 1;
        var description = button.getAttribute('data-description');
        var price = button.getAttribute('data-price');
        var img = button.getAttribute('data-img');
        console.log(trashElement);
        trashElement.style.opacity = "1";

        addToCart(productName, quantityInputId, description, price, img);
    });
});


function addToCart(productName, quantity,description, price,img) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    trashElement.style.opacity = "1";
    console.log(cart);
    if (cart !== undefined) {
        //console.log(cart);
        var existingProductIndex = cart.findIndex(item => item.productName === productName);
        console.log(existingProductIndex);
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity = Number(cart[existingProductIndex].quantity) + Number(quantity);
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
           /* console.log(productName);
            console.log(quantity);
            console.log(description);
            console.log(price);
            console.log(img);*/
            cart.push({ productName, quantity,description, price,img });
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }
    else{
        cart = [];
        var existingProductIndex = cart.findIndex(item => item.productName === productName);
        console.log(cart);
        /*console.log(productName);
        console.log(quantity);
        console.log(description);
        console.log(price);
        console.log(img);*/
        cart.push({ productName, quantity,description, price,img });
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    //var cart = JSON.parse(localStorage.getItem('cart')) || [];
}