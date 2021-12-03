let html = "";
let price = 0;
let showmessage = document.querySelector(".showmessage");
let list = document.querySelector("#list");
populate();
function populate()
{
    showmessage.style.display='block';
    list.style.display='none';
    productinaddtocart = localStorage.getItem("productinaddtocart");
if (productinaddtocart == null||productinaddtocart =='[]') {
    producttopush = [];

}

else {
    producttopush = JSON.parse(productinaddtocart);
    showmessage.style.display='none';
    list.style.display='block';
}
    producttopush.forEach(element => {
        html += ` <div class="item-container">
        <div class="items" id=${element.productcode}>
        <div class="img-container">
        <img src="${element.imagepath}">
        <span>x${element.qty}</span>
        </div>
        <div class="item-name">${element.producttitle}</div>
        <div class="inc-count-btn" style="color: black;" onclick="changequantity(this.parentElement,1)">
        +
        </div>
        <div class="quantity">${element.qty} </div>
        <div class="desc-count-btn" style="color: black;" onclick="changequantity(this.parentElement,-1)">
        -
        </div>
        <div class="price"><i class="fa fa-inr">${element.productprice}</i></div>
        <div class="rem-btn" style="color: black;" onclick="removefromcart(this.parentElement)">
        Remove
        </div>
        </div>
        </div>`;
    });
    document.getElementById("list").innerHTML = html;
}

function changequantity(e, change) {
    productinaddtocart = localStorage.getItem("productinaddtocart");
    if (productinaddtocart == null) {
        producttopush = [];
    }
    
    else {
        producttopush = JSON.parse(productinaddtocart);
    }
    producttopush.forEach(element => {
        if (element.productcode == e.id) {
            element.qty += change;
            e.children[0].children[1].textContent =  `x${element.qty}`;
            e.children[3].innerHTML = element.qty;
            localStorage.setItem("productinaddtocart", JSON.stringify(producttopush));
            if(element.qty==0)
            {
                removefromcart(e);
                e.style.display="none";
            }
            return;
        }
    });
    counter = localStorage.getItem("counter");
    if (change == 1) {
        counter++;
    }
    else if (change == -1) {
        counter = counter - 1;
    }
    localStorage.setItem('counter', counter);
    calculateprice();
    showmessages();
}

calculateprice();

function calculateprice() {
    price = 0;
    productinaddtocart = localStorage.getItem("productinaddtocart");
    if (productinaddtocart == null) {
        price=0;
    }
    
    else {
        producttopush = JSON.parse(productinaddtocart);
    }
    producttopush.forEach(element => {
            element.productprice = element.productprice.replace(",", "");
        price = price + parseInt(element.qty) * parseInt(element.productprice);
    });
    let newhtml= `<div class="price"><i class="fa fa-inr"> ${price}</i></div>`
    document.getElementsByClassName("totalPrice")[0].innerHTML=newhtml;
}

function removefromcart(e)
{
    productinaddtocart = localStorage.getItem("productinaddtocart");
    if (productinaddtocart == null) {
        producttopush = [];
    }
    
    else {
        producttopush = JSON.parse(productinaddtocart);
    }
    producttopush.forEach((element,index) => {
        if (element.productcode == e.id) {
            counter = localStorage.getItem("counter");
            counter = counter - element.qty;
            localStorage.setItem('counter', counter);
            producttopush.splice(index, 1);
            localStorage.setItem("productinaddtocart", JSON.stringify(producttopush));
            let removingelement = list.children[index];
            list.removeChild(removingelement);
            calculateprice();
        }
    });
    showmessages();
}

function showmessages()
{
    counter = localStorage.getItem("counter");
    if(counter==0)
    {
        showmessage.style.display = 'block';
        list.style.display='none';
    }
}