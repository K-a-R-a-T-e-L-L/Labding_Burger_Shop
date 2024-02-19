document.getElementById('main-action-button').onclick = function () {
    document.getElementById('products').scrollIntoView({behavior: "smooth"});
};


let Links = document.querySelectorAll('.link_list__item_list > a');

for(let i = 0; i < Links.length; i++ ){
    Links[i].onclick = function () {
        document.getElementById(Links[i].getAttribute('data-link')).scrollIntoView({behavior: "smooth"});
    }
};


let Buttons = document.getElementsByClassName('box_order__button_order');

for(let i = 0; i < Buttons.length; i++ ){
    Buttons[i].onclick = function () {
        document.getElementById('order').scrollIntoView({behavior: "smooth"});
    }
};


let Burger = document.getElementById('burger');
let Name = document.getElementById('name');
let Phone = document.getElementById('phone');
let OrderButton = document.getElementById('order-button');


OrderButton.onclick = function(e) {
    e.preventDefault();
    let Error = false;
    [Burger, Name, Phone].forEach(el => {
        if(!el.value){
            el.parentElement.style.background = 'red';
            Error = true;
        }
        else{
            el.parentElement.style.background = '';
        }
    });
    if(!Error){
        [Burger, Name, Phone].forEach(el => {
            el.value = ""
        });
        alert("Спасибо за заказ!");
    }
};


let price = document.getElementsByClassName('box_order__title_h4');
document.getElementById('currency').onclick = (e) => {
    let currency = e.target.innerText;
    
    let newCurrency = "$";
    let coofficient = 1;

    if(currency === "$"){
        newCurrency = "₽";
        coofficient = 80; 
    }
    else if(currency === "₽"){
        newCurrency = "BYN";
        coofficient = 3;
    }
    else if (currency === 'BYN') {
        newCurrency = '€';
        coofficient = 0.9;
    } else if (currency === '€') {
        newCurrency = '¥';
        coofficient = 6.9;
    }

    e.target.innerText = newCurrency;

    for(let i = 0; i < price.length; i++){
        price[i].innerText = +(price[i].getAttribute('data-base-price') * coofficient).toFixed(1) + ' ' + newCurrency
    }
}