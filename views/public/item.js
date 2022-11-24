if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger');
    for(let i = 0; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem)
    }


    var addToCartButtons = document.getElementsByClassName('normal');
    for(let i = 0; i < addToCartButtons.item.length; i++){
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);

    }

}

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }

    updateCartTotal();
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement;
    var imgItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imageSrc = imgItem.getElementsByClassName('shop-item-image')[0].src;

    console.log(title, price, imageSrc);
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for(let i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];

        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;

        total = total + (price * quantity);
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}