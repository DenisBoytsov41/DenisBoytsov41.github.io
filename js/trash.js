document.addEventListener('DOMContentLoaded', function() {
    var cartSection = document.getElementById('cart-section');
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (localStorage.getItem('cart') === undefined || localStorage.getItem('cart') === null) {
        cartSection.innerHTML = '<p style ="text-align: center; font-size: 20px;">Ваша корзина пуста</p>';
        var trashElement = document.querySelector(".trash");
        trashElement.style.opacity = "0.5!important";
    } else {
        var cart = JSON.parse(localStorage.getItem('cart')) || [];
        var cartSection = document.getElementById('cart-section');
        var cartItems = document.getElementById('cart-items');
        var cartTotal = document.getElementById('total-price');
        var trashElement = document.querySelector(".trash");
        trashElement.style.opacity = "1";

        if (cart.length > 0) {
            cartSection.innerHTML = '<link rel="stylesheet" href="../css/slide.css"> <h2>Корзина</h2>';
            var totalPrice = 0;
            cart.forEach(item => {
                var productPrice = item.price * item.quantity;
                totalPrice += productPrice;
                var productElement = createProductElement(item.productName, item.quantity, item.description, item.price, item.img);
                cartItems.appendChild(productElement);
            });

            if (cartTotal) {
                cartTotal.textContent ='Общая стоимость: '+  totalPrice + ' ₽';
            }

            var divider = document.createElement('hr');
            divider.className = 'divider';
            cartSection.appendChild(cartItems);
            cartSection.appendChild(divider);

            var clearCartButton = document.createElement('button');
            clearCartButton.textContent = 'Удалить всё';
            clearCartButton.className = 'remove-button';
            clearCartButton.id = 'clear-cart-button';
            clearCartButton.addEventListener('click', function () {
               localStorage.clear();
               location.reload();
            });
            cartSection.appendChild(cartTotal);
            cartTotal.appendChild(clearCartButton);
        } else {
            cartSection.innerHTML = '<p style ="text-align: center; font-size: 20px;">Ваша корзина пуста</p>';
            trashElement.style.opacity = "0.5";
        }    
    }
    /*
        var cart = JSON.parse(localStorage.getItem('cart')) || [];

        var cartSection = document.getElementById('cart-section');
        var cartItems = document.getElementById('cart-items');
        var cartTotal = document.getElementById('total-price');
        
        cartSection.innerHTML = '<link rel="stylesheet" href="slide.css"> <h2>Корзина</h2>';
        cartTotal.innerHTML = '<p>Общая стоимость: <span id="total-price"></span> ₽</p>';
        
        var totalPrice = 0;
        cart.forEach(item => {
            var productPrice = item.price * item.quantity;
            totalPrice += productPrice;
            var productElement = createProductElement(item.productName, item.quantity, item.description, item.price, item.img);
            cartItems.appendChild(productElement);
        });
        cartTotal.querySelector('#total-price').textContent = totalPrice + ' ₽';
        
        var divider = document.createElement('hr');
        divider.className = 'divider';
        cartSection.appendChild(divider);
        
        var clearCartButton = document.createElement('button');
        clearCartButton.textContent = 'Удалить всё';
        clearCartButton.id = 'clear-cart-button';
        cartSection.appendChild(clearCartButton);
     */
    function createProductElement(productName, quantity, description, price, imgUrl) {
        var productElement = document.createElement('div');
        productElement.className = 'col-md-8 col-sm-8 custom-div';
        productElement.style.border = 'none';
    
        var linkElement = document.createElement('a');
        linkElement.style.textDecoration = 'none';
    
        var productWrapper = document.createElement('div');
        productWrapper.className = 'container mt-10';
    
        var rowElement = document.createElement('div');
        rowElement.className = 'row';
    
        var colElement = document.createElement('div');
        colElement.className = 'col-lg-20';
    
        var screenElement = document.createElement('div');
        screenElement.className = 'screen';
    
        var imgElement = document.createElement('div');
        imgElement.className = 'div-position';
        imgElement.innerHTML = '<img class="element img-fluid" src="' + imgUrl + '" />';
    
        var productInfoElement = document.createElement('div');
        productInfoElement.className = 'div-product-wrapper';
    
        var productHeaderElement = document.createElement('div');
        productHeaderElement.className = 'div-product-header d-flex justify-content-between align-items-center';
    
        var headingElement = document.createElement('div');
        headingElement.className = 'heading';
    
        var labelElement = document.createElement('div');
        labelElement.className = 'label';
        labelElement.textContent = productName;
    
        var descriptionElement = document.createElement('div');
        descriptionElement.className = 'p-product';
    
        var textWrapperElement = document.createElement('p');
        textWrapperElement.className = 'text-wrapper';
        textWrapperElement.textContent = description;

        var priceWrapperElement = document.createElement('p');
        priceWrapperElement.className = 'text-wrapper';
        priceWrapperElement.textContent = "Цена: " + price + " ₽";
    
        var quantityElement = document.createElement('div');
        quantityElement.className = 'div-product';
    
        var quantityWrapperElement = document.createElement('div');
        quantityWrapperElement.className = 'div-wrapper';
    
        var quantityTextElement = document.createElement('div');
        quantityTextElement.className = 'text-wrapper-2';
        quantityTextElement.textContent = 'Количество: ' + quantity;
    
        var increaseButton = document.createElement('button');
        increaseButton.textContent = '+';
        increaseButton.className = 'quantity-button';
        increaseButton.addEventListener('click', function () {
            quantity = Math.min(99,quantity+1);
            quantityTextElement.textContent = 'Количество: ' + quantity;
            var cart = JSON.parse(localStorage.getItem('cart')) || [];
            var i = 0;
            cart.forEach(item => {
                if(i===0)
                {
                    var existingProductIndex = cart.findIndex(item => item.productName === productName);
                    //console.log(existingProductIndex);
                    if (existingProductIndex !== -1) {
                        //cart.splice(existingProductIndex, 1);
                        cart[existingProductIndex].quantity = quantity;
                        //console.log(cart.splice(existingProductIndex, 1));
                        i++;
                        localStorage.setItem('cart', JSON.stringify(cart));
                        console.log(localStorage.getItem('cart'));
                    }
                }
            });
            newtotal();
        });
    
        var decreaseButton = document.createElement('button');
        decreaseButton.textContent = '-';
        decreaseButton.className = 'quantity-button';
        decreaseButton.addEventListener('click', function () {
            quantity = Math.max(quantity - 1, 0);
            quantityTextElement.textContent = 'Количество: ' + quantity;
            var i = 0;
            var cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.forEach(item => {
                if(i===0)
                {
                    var existingProductIndex = cart.findIndex(item => item.productName === productName);
                    //console.log(existingProductIndex);
                    if (existingProductIndex !== -1) {
                        //cart.splice(existingProductIndex, 1);
                        cart[existingProductIndex].quantity = quantity;
                        i++;
                        //console.log(cart.splice(existingProductIndex, 1));
                        localStorage.setItem('cart', JSON.stringify(cart));
                        console.log(localStorage.getItem('cart'));
                    }
                }
            });
            if (quantity === 0) {
                productElement.remove();
                var cart = JSON.parse(localStorage.getItem('cart')) || [];
                var i = 0;
                cart.forEach(item => {
                    if(i===0)
                    {
                        var existingProductIndex = cart.findIndex(item => item.productName === productName);
                        //console.log(existingProductIndex);
                        if (existingProductIndex !== -1) {
                            cart.splice(existingProductIndex, 1);
                            i++;
                            //console.log(cart.splice(existingProductIndex, 1));
                            localStorage.setItem('cart', JSON.stringify(cart));
                            console.log(localStorage.getItem('cart'));
                        }
                    }
                });
            }
            newtotal();
        });
    
        var removeButton = document.createElement('button');
        removeButton.textContent = 'Удалить';
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click', function () {
            productElement.remove();
            var cart = JSON.parse(localStorage.getItem('cart')) || [];
            var existingProductIndex = cart.findIndex(item => item.productName === productName);
            if (existingProductIndex !== -1) {
                cart.splice(existingProductIndex, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
            }
            newtotal();
        });
    
        quantityElement.appendChild(increaseButton);
        quantityElement.appendChild(decreaseButton);
        quantityElement.appendChild(removeButton);
        productInfoElement.appendChild(quantityElement);
        productElement.appendChild(linkElement);
        linkElement.appendChild(productWrapper);
        productWrapper.appendChild(rowElement);
        rowElement.appendChild(colElement);
        colElement.appendChild(screenElement);
        screenElement.appendChild(imgElement);
        screenElement.appendChild(productInfoElement);
        productInfoElement.appendChild(productHeaderElement);
        productHeaderElement.appendChild(headingElement);
        headingElement.appendChild(labelElement);
        productInfoElement.appendChild(descriptionElement);
        descriptionElement.appendChild(textWrapperElement);
        descriptionElement.appendChild(priceWrapperElement);
        productInfoElement.appendChild(quantityElement);
        quantityElement.appendChild(quantityWrapperElement);
        quantityWrapperElement.appendChild(quantityTextElement);
        if (cart.length ===0)
            {
                cartSection.innerHTML = '<p style ="text-align: center; font-size: 20px;">Ваша корзина пуста</p>';
                trashElement.style.opacity = "0.5";
            }

        return productElement;
    }
    function newtotal()
    {
        var cart = JSON.parse(localStorage.getItem('cart')) || [];
        var cartSection = document.getElementById('cart-section');
        var cartTotal = document.getElementById('total-price');
        var totalPrice = 0;
        cart.forEach(item => {
            var productPrice = item.price * item.quantity;
            totalPrice += productPrice;
            //var productElement = createProductElement(item.productName, item.quantity, item.description, item.price, item.img);
            //cartItems.appendChild(productElement);
        });
        console.log(totalPrice);
        cartTotal.textContent ='Общая стоимость: '+  totalPrice + ' ₽';
        var clearCartButton = document.createElement('button');
        clearCartButton.textContent = 'Удалить всё';
        clearCartButton.id = 'clear-cart-button';
        clearCartButton.className = 'remove-button';
        clearCartButton.addEventListener('click', function () {
            localStorage.clear();
            location.reload();
         });
        cartSection.appendChild(cartTotal);
        cartTotal.appendChild(clearCartButton);
        if (cart.length ===0)
            {
                cartSection.innerHTML = '<p style ="text-align: center; font-size: 20px;">Ваша корзина пуста</p>';
                trashElement.style.opacity = "0.5";
            }
    }    
    
});
