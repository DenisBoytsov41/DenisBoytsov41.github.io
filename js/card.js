var modalElements = [
    document.getElementById('productModal0'),
    document.getElementById('productModal1'),
    document.getElementById('productModal2'),
    document.getElementById('productModal3'),
    document.getElementById('productModal4'),
    document.getElementById('productModal5'),
    document.getElementById('productModal6'),
    document.getElementById('productModal7'),
    document.getElementById('productModal8'),
    document.getElementById('productModal9'),
    document.getElementById('productModal10'),
    document.getElementById('productModal11')
];

var openModalButtons = [
    document.getElementById('openModalButton0'),
    document.getElementById('openModalButton1'),
    document.getElementById('openModalButton2'),
    document.getElementById('openModalButton3'),
    document.getElementById('openModalButton4'),
    document.getElementById('openModalButton5'),
    document.getElementById('openModalButton6'),
    document.getElementById('openModalButton7'),
    document.getElementById('openModalButton8'),
    document.getElementById('openModalButton9'),
    document.getElementById('openModalButton10'),
    document.getElementById('openModalButton11')
];

var closeModalButtons = [
    document.getElementById('closeModalButton0'),
    document.getElementById('closeModalButton1'),
    document.getElementById('closeModalButton2'),
    document.getElementById('closeModalButton3'),
    document.getElementById('closeModalButton4'),
    document.getElementById('closeModalButton5'),
    document.getElementById('closeModalButton6'),
    document.getElementById('closeModalButton7'),
    document.getElementById('closeModalButton8'),
    document.getElementById('closeModalButton9'),
    document.getElementById('closeModalButton10'),
    document.getElementById('closeModalButton11')
];

var closeButtons = [
    document.getElementById('btn-secondary0'),
    document.getElementById('btn-secondary1'),
    document.getElementById('btn-secondary2'),
    document.getElementById('btn-secondary3'),
    document.getElementById('btn-secondary4'),
    document.getElementById('btn-secondary5'),
    document.getElementById('btn-secondary6'),
    document.getElementById('btn-secondary7'),
    document.getElementById('btn-secondary8'),
    document.getElementById('btn-secondary9'),
    document.getElementById('btn-secondary10'),
    document.getElementById('btn-secondary11')
];

var quantitys = null;
var addToCartButtons = document.querySelectorAll('.addToCartButton');
var addToCB = document.querySelectorAll('.button-add-to-cart');
var trashElement = document.querySelector(".trash");



function openModal(index) {
    modalElements[index].style.display = 'block';
}

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

function reloadznach()
{
    modalElements = [
        document.getElementById('productModal0'),
        document.getElementById('productModal1'),
        document.getElementById('productModal2'),
        document.getElementById('productModal3'),
        document.getElementById('productModal4'),
        document.getElementById('productModal5'),
        document.getElementById('productModal6'),
        document.getElementById('productModal7'),
        document.getElementById('productModal8'),
        document.getElementById('productModal9'),
        document.getElementById('productModal10'),
        document.getElementById('productModal11')
    ];
    
    openModalButtons = [
        document.getElementById('openModalButton0'),
        document.getElementById('openModalButton1'),
        document.getElementById('openModalButton2'),
        document.getElementById('openModalButton3'),
        document.getElementById('openModalButton4'),
        document.getElementById('openModalButton5'),
        document.getElementById('openModalButton6'),
        document.getElementById('openModalButton7'),
        document.getElementById('openModalButton8'),
        document.getElementById('openModalButton9'),
        document.getElementById('openModalButton10'),
        document.getElementById('openModalButton11')
    ];
    
    closeModalButtons = [
        document.getElementById('closeModalButton0'),
        document.getElementById('closeModalButton1'),
        document.getElementById('closeModalButton2'),
        document.getElementById('closeModalButton3'),
        document.getElementById('closeModalButton4'),
        document.getElementById('closeModalButton5'),
        document.getElementById('closeModalButton6'),
        document.getElementById('closeModalButton7'),
        document.getElementById('closeModalButton8'),
        document.getElementById('closeModalButton9'),
        document.getElementById('closeModalButton10'),
        document.getElementById('closeModalButton11')
    ];
    
    closeButtons = [
        document.getElementById('btn-secondary0'),
        document.getElementById('btn-secondary1'),
        document.getElementById('btn-secondary2'),
        document.getElementById('btn-secondary3'),
        document.getElementById('btn-secondary4'),
        document.getElementById('btn-secondary5'),
        document.getElementById('btn-secondary6'),
        document.getElementById('btn-secondary7'),
        document.getElementById('btn-secondary8'),
        document.getElementById('btn-secondary9'),
        document.getElementById('btn-secondary10'),
        document.getElementById('btn-secondary11')
    ];

    quantitys = null;
    addToCartButtons = document.querySelectorAll('.addToCartButton');
    addToCB = document.querySelectorAll('.button-add-to-cart');
    for (var i = 0; i <= addToCartButtons.length-1; i++) {
        addToCartButtons[i].onclick = function(index) {
            if(addToCartButtons[i] != null)
            {
                return function() {
                    modalElements[index].style.display = 'none';
                    trashElement.style.opacity = "0.5";
                };
            }
        }(i);
    }
    
    for (var i = 0; i <= closeButtons.length-1; i++) {
        closeButtons[i].onclick = function(index) {
            if(closeButtons[i] != null)
            {
                return function() {
                    modalElements[index].style.display = 'none';
                    trashElement.style.opacity = "0.5";
                };
            }
        }(i);
    }
    
    if(openModalButtons.length !=null)
    {
        for (var i = 0; i <= openModalButtons.length-1; i++) {
            openModalButtons[i].addEventListener('click', function(index) {
                if(openModalButtons[i] != null)
                {
                    return function() {
                        trashElement.style.opacity = "0.5";
                        openModal(index);
                    };
                }
            }(i));
        }
    }
    for (var i = 0; i <= closeModalButtons.length-1; i++) {
        closeModalButtons[i].addEventListener('click', function(index) {
            if(closeModalButtons[i] !=null)
            {
                return function() {
                    trashElement.style.opacity = "0.5";
                    closeModal(index);
                };
            }
        }(i));
    }
}

for (var i = 0; i <= addToCartButtons.length-1; i++) {
    if(addToCartButtons[i] != null)
    {
        addToCartButtons[i].onclick = function(index) {   
            return function() {
                modalElements[index].style.display = 'none';
                trashElement.style.opacity = "0.5";
            };
        }(i);
    }
}
for (var i = 0; i <= closeButtons.length-1; i++) {
    if(closeButtons[i] != null)
    {
        closeButtons[i].onclick = function(index) {
            console.log(closeButtons[i]);
            return function() {
                modalElements[index].style.display = 'none';
                trashElement.style.opacity = "0.5";
            };
        }(i);
    }
}

if(openModalButtons.length !=null)
{
    for (var i = 0; i <= openModalButtons.length-1; i++) {
        if(openModalButtons[i] != null)
        {
            openModalButtons[i].addEventListener('click', function(index) {
                return function() {
                    trashElement.style.opacity = "0.5";
                    openModal(index);
                };
            }(i));
        }
    }
}
for (var i = 0; i <= closeModalButtons.length-1; i++) {
    if(closeModalButtons[i] !=null)
    {
        closeModalButtons[i].addEventListener('click', function(index) {
            return function() {
                trashElement.style.opacity = "0.5";
                closeModal(index);
            };
        }(i));
    }
}

addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        console.log(button.getAttribute('data-product-name'));
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
    console.log(addToCB.length);
    button.addEventListener('click', function() {
        console.log(button.getAttribute('data-product-name'));
        var productName = button.getAttribute('data-product-name');
        var quantityInputId = 1;
        var description = button.getAttribute('data-description');
        var price = button.getAttribute('data-price');
        var img = button.getAttribute('data-img');
        trashElement.style.opacity = "1";

        addToCart(productName, quantityInputId, description, price, img);
    });
});


function addToCart(productName, quantity,description, price,img) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart);
    trashElement.style.opacity = "1";
    if (cart !== undefined) {
        var existingProductIndex = cart.findIndex(item => item.productName === productName);
        console.log(existingProductIndex);
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity = Number(cart[existingProductIndex].quantity) + Number(quantity);
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            cart.push({ productName, quantity,description, price,img });
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }
    else{
        cart = [];
        var existingProductIndex = cart.findIndex(item => item.productName === productName);
        console.log(cart);
        cart.push({ productName, quantity,description, price,img });
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}