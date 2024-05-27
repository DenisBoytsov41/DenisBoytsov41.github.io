
var products = [
    {
        name: "Тако",
        description: "300г Тортилья, курица, сальса, сыр, зелень",
        price: 220,
        img: "../img/vKazZUXJ5nY.jpg"
    },
    {
        name: "Кесадилья",
        description: "300г Тортилья, курица, сыр, фирменны соус",
        price: 210,
        img: "../img/IwUPt0WrMLk.jpg"
    },
    {
        name: "Шаурма XXL",
        description: "700г Курица, капуста, огурцы, помидоры, фирменный соус",
        price: 370,
        img: "../img/KbE9t3H3JyA.jpg"
    },
    {
        name: "Буррито",
        description: "300г Тортилья, курица, фасоль, огурцы,помидоры, соус фирменный",
        price: 220,
        img: "../img/UwNHW5l2L5I.jpg"
    },
    {
        name: "Шаурма Армянская",
        description: "400г Курица, капуста, помидоры, перец маринованный, лук, зелень, соус острый",
        price: 250,
        img: "../img/XGOQ3-xoYLk.jpg"
    },
    {
        name: "Люля-кебаб из курицы в лаваше",
        description: "350г Помидоры, лук, фирменный соус",
        price: 270,
        img: "../img/gdnfGWaESlQ.jpg"
    },
    {
        name: "Шаурма Вегетарианская",
        description: "400г Капуста, огурцы, помидоры, картофель фри, фирменный соус",
        price: 210,
        img: "../img/vEz40Gg0m1M.jpg"
    },
    {
        name: "Шаурма Гавайская",
        description: "400г Курица, капуста, огурцы, помидоры, ананас, фирменный соус",
        price: 240,
        img: "../img/OaLi3YW95Dg.jpg"
    },
    {
        name: "Шаурма на тарелке",
        description: "450г Курица, капуста, огурцы, помидоры, фирменный соус",
        price: 201,
        img: "../img/ZWpFzFPXUJE.jpg"
    },
    {
        name: "Шаурма с сыром",
        description: "400г Курица, капуста, огурцы, помидоры, сыр, фирменный соус",
        price: 240,
        img: "../img/-n66GLgBias.jpg"
    },
    {
        name: "Шаурма с картофелем фри",
        description: "400г Курица, капуста, огурцы, помидоры, картофель фри, фирменный соус",
        price: 240,
        img: "../img/fYaQODaaRCk.jpg"
    },
    {
        name: "Шаурма Традиционная",
        description: "400г Курица, капуста, огурцы, помидоры, фирменный соус",
        price: 230,
        img: "../img/WIJY_s9GaJM.jpg"
    }
    ,
    {
        name: "Шаурма Кавказская",
        description: "400г Курица, капуста, соленые огурцы, помидоры, перец «Чили», фирменный соус",
        price: 230,
        img: "../img/Vu4qAp6IdZM.jpg"
    }
    ,
    {
        name: "Шаурма со свининой",
        description: "400г Свинина на углях, помидоры, огурцы, фирменный соус",
        price: 300,
        img: "../img/YCwN6Dsmuio.jpg"
    }
    ,
    {
        name: "Шаурма Гавайская СВИНИНА",
        description: "-",
        price: 270,
        img: "../img/389H0tBQW_s.jpg"
    }
    ,
    {
        name: "Шаурма Кавказская СВИНИНА",
        description: "-",
        price: 260,
        img: "../img/389H0tBQW_s.jpg"
    }
    ,
    {
        name: "Шаурма в сыр. лаваше СВИНИНА",
        description: "-",
        price: 280,
        img: "../img/389H0tBQW_s.jpg"
    }
    ,
    {
        name: "Шаурма Армянская СВИНИНА",
        description: "-",
        price: 280,
        img: "../img/389H0tBQW_s.jpg"
    }
    ,
    {
        name: "Шаурма с фри СВИНИНА",
        description: "-",
        price: 270,
        img: "../img/389H0tBQW_s.jpg"
    }
    ,
    {
        name: "ШАШЛЫК ИЗ КУРИЦЫ В ЛАВАШЕ",
        description: "-",
        price: 290,
        img: "../img/389H0tBQW_s.jpg"
    }
    ,
    {
        name: "ШАШЛЫК ИЗ СВИНИНЫ В ЛАВАШЕ",
        description: "-",
        price: 340,
        img: "../img/389H0tBQW_s.jpg"
    }
    
];

const itemsPerPage = 12;
const totalPages = Math.ceil(products.length / itemsPerPage);

function displayProducts(pageNumber) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageProducts = products.slice(startIndex, endIndex);

    const pageContainer = document.getElementById('page-container');
    pageContainer.innerHTML = ''
    var index = 0;
    currentPageProducts.forEach(product => {
        var productCard = createProductElement(product,index);
        var createMod = createModal(product,index);
        var pageContainer = document.getElementById('page-container');
        pageContainer.appendChild(productCard);
        pageContainer.appendChild(createMod);
        index++;
    });
    displayPagination(pageNumber);
}
function createProductElement(product,index) {
    var productElement = document.createElement('div');
    productElement.className = 'col-md-3 col-sm-6';
    productElement.innerHTML = '';
    productElement.innerHTML = '<link rel="stylesheet" href="../css/card.css">';

    var cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    var viewOverlayDiv = document.createElement('div');
    viewOverlayDiv.className = 'view overlay';
    viewOverlayDiv.id = 'openModalButton' + index % 12;

    var imgElement = document.createElement('img');
    imgElement.className = 'card-img-top';
    imgElement.src = product.img;
    imgElement.alt = product.name;

    var maskDiv = document.createElement('div');
    maskDiv.className = 'mask rgba-white-slight';

    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = 'card-body text-center';

    var titleLink = document.createElement('a');
    titleLink.href = '#';

    var titleHeading = document.createElement('h5');
    titleHeading.textContent = product.name;

    var descriptionParagraph = document.createElement('p');
    descriptionParagraph.className = 'text-wrapper';
    descriptionParagraph.textContent = product.description;

    var priceDiv = document.createElement('div');
    priceDiv.className = 'text-wrapper-3';
    priceDiv.textContent = product.price + ' ₽';

    var addToCartButton = document.createElement('img');
    addToCartButton.className = 'button-add-to-cart';
    addToCartButton.setAttribute('data-product-name', product.name);
    addToCartButton.setAttribute('data-quantity-input', 'quantity' + index % 12);
    addToCartButton.setAttribute('data-description', product.description);
    addToCartButton.setAttribute('data-price', product.price);
    addToCartButton.setAttribute('data-img', product.img);
    addToCartButton.src = '../img/button-add-to-cart.svg';
    addToCartButton.alt = 'Добавить в корзину';

    productElement.appendChild(cardDiv);
    cardDiv.appendChild(viewOverlayDiv);
    viewOverlayDiv.appendChild(imgElement);
    viewOverlayDiv.appendChild(maskDiv);
    cardDiv.appendChild(cardBodyDiv);
    cardBodyDiv.appendChild(titleLink);
    titleLink.appendChild(titleHeading);
    cardBodyDiv.appendChild(descriptionParagraph);
    cardBodyDiv.appendChild(priceDiv);
    cardBodyDiv.appendChild(addToCartButton);

    return productElement;
}
function createModal (product,index)
{
    var modalDiv = document.createElement('div');
    modalDiv.className = 'location-modal';
    modalDiv.id = 'productModal' + index % 12;
    modalDiv.setAttribute('tabindex', '-1');
    modalDiv.setAttribute('role', 'dialog');
    modalDiv.setAttribute('aria-labelledby', 'productModalLabel');
    modalDiv.setAttribute('aria-hidden', 'true');

    var modalDialogDiv = document.createElement('div');
    modalDialogDiv.className = 'modal-dialog';
    modalDialogDiv.setAttribute('role', 'document');

    var modalContentDiv = document.createElement('div');
    modalContentDiv.className = 'modal-content';

    var modalHeaderDiv = document.createElement('div');
    modalHeaderDiv.className = 'modal-header';

    var modalTitle = document.createElement('h5');
    modalTitle.className = 'modal-title';
    modalTitle.id = 'productModalLabel' + index % 12;
    modalTitle.textContent = product.name;

    var closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'close';
    closeButton.setAttribute('data-dismiss', 'modal');
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.id = 'closeModalButton' + index % 12;

    var closeIcon = document.createElement('span');
    closeIcon.className = 'close' + index % 12;
    closeIcon.textContent = '×';

    var modalBodyDiv = document.createElement('div');
    modalBodyDiv.className = 'modal-body';

    var productImage = document.createElement('img');
    productImage.className = 'element img-fluid';
    productImage.src = product.img;

    var descriptionParagraph1 = document.createElement('p');
    descriptionParagraph1.textContent = product.description;

    var priceParagraph = document.createElement('p');
    priceParagraph.textContent = product.price + ' ₽';

    var quantityLabel = document.createElement('label');
    quantityLabel.setAttribute('for', 'quantity');
    quantityLabel.textContent = 'Количество:';

    var quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.id = 'quantity' + index % 12;
    quantityInput.className = 'form-control';
    quantityInput.setAttribute('min', '1');
    quantityInput.value = '1';

    var modalFooterDiv = document.createElement('div');
    modalFooterDiv.className = 'modal-footer';

    var closeButtonSecondary = document.createElement('button');
    closeButtonSecondary.type = 'button';
    closeButtonSecondary.className = 'btn btn-secondary';
    closeButtonSecondary.setAttribute('data-dismiss', 'modal');
    closeButtonSecondary.id = 'btn-secondary' + index % 12;
    closeButtonSecondary.textContent = 'Закрыть';

    var addToCartButton = document.createElement('button');
    addToCartButton.type = 'button';
    addToCartButton.className = 'btn btn-primary addToCartButton';
    addToCartButton.textContent = 'Добавить в корзину';
    addToCartButton.setAttribute('data-product-name', product.name);
    addToCartButton.setAttribute('data-quantity-input', 'quantity' + index % 12);
    addToCartButton.setAttribute('data-description', product.description);
    addToCartButton.setAttribute('data-price', product.price);
    addToCartButton.setAttribute('data-img', product.img);
    addToCartButton.onclick = '';

    closeButton.appendChild(closeIcon);
    modalHeaderDiv.appendChild(modalTitle);
    modalHeaderDiv.appendChild(closeButton);
    modalBodyDiv.appendChild(productImage);
    modalBodyDiv.appendChild(descriptionParagraph1);
    modalBodyDiv.appendChild(priceParagraph);
    modalBodyDiv.appendChild(quantityLabel);
    modalBodyDiv.appendChild(quantityInput);
    modalFooterDiv.appendChild(closeButtonSecondary);
    modalFooterDiv.appendChild(addToCartButton);
    modalContentDiv.appendChild(modalHeaderDiv);
    modalContentDiv.appendChild(modalBodyDiv);
    modalContentDiv.appendChild(modalFooterDiv);
    modalDialogDiv.appendChild(modalContentDiv);
    modalDiv.appendChild(modalDialogDiv);

    return modalDiv;
    //document.body.appendChild(modalDiv);
}
function displayPagination(currentPage) {
    const paginationContainer = document.getElementById('pagination-container');
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('li');
        pageItem.className = 'page-item';
        const pageLink = document.createElement('a');
        pageLink.className = 'page-link';
        pageLink.href = '#';
        pageLink.textContent = i;
        pageLink.addEventListener('click', function() {
            displayProducts(i);
            reloadScript('../js/card.js');            
        });
        pageItem.appendChild(pageLink);

        if (i === currentPage) {
            pageItem.classList.add('active');
        }

        paginationContainer.appendChild(pageItem);
    }
}

displayProducts(1);
function reloadScript(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.documentElement.appendChild(script);
}
