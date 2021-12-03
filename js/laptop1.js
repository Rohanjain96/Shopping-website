const sidebars = document.getElementById("side-bars");
function hamburgermenu() {
    sidebars.style.left = '0';
}
function clshamburgermenu() {
    sidebars.style.left = '-250px';
}

function changemainimage(e)
{
    let html='';
    console.log("image clicked");
    console.log(e.src);
    html=`<img src="${e.src}" alt="">`
    console.log(document.getElementsByClassName("preview")[0].innerHTML);
    let image =document.getElementsByClassName("preview")[0];
    image.innerHTML=html;
    console.log(document.querySelector(".preview"));
}



function addtocart(e) {
    let flag = 0;
    let detailproduct = {
        productcode: e.id,
        productprice: document.querySelector(".Price").innerText,
        producttitle: document.querySelector(".product-title").innerText,
        qty: document.getElementById("quantity").value,
        imagepath:document.querySelector(".otherimage").children[0].src,
    };
    counter = localStorage.getItem("counter");
    counter = parseInt(counter)+ parseInt(detailproduct.qty);
    localStorage.setItem('counter', counter);
    
    productinaddtocart = localStorage.getItem("productinaddtocart");
    if (productinaddtocart == null || productinaddtocart == "[]" ) {
        producttopush = [];
        producttopush.push(detailproduct);
        localStorage.setItem("productinaddtocart", JSON.stringify(producttopush));
        return;
    }

    else {
        producttopush = JSON.parse(productinaddtocart);
    }
    producttopush.forEach(element => {
        if (element.productcode == e.id) {
            console.log("qty increase");
            element.qty = parseInt(element.qty) + parseInt(detailproduct.qty);
            localStorage.setItem("productinaddtocart", JSON.stringify(producttopush));
            return;

        }
        else {
            console.log(" first push of element");
            producttopush.push(detailproduct);
            localStorage.setItem("productinaddtocart", JSON.stringify(producttopush));
            return;
        }
    });
    function removerepeatedelement(element, index) {
        productinaddtocart = localStorage.getItem("productinaddtocart");
        producttopush = JSON.parse(productinaddtocart);
        for (i = index; i <producttopush.length; i++)
            {if (producttopush[i].productcode == element.productcode)
                producttopush.splice(i, i);
            }
            localStorage.setItem("productinaddtocart", JSON.stringify(producttopush));   
    }
    productinaddtocart = localStorage.getItem("productinaddtocart");
    producttopush = JSON.parse(productinaddtocart);
    producttopush.forEach((element, index) => {
        removerepeatedelement(element, index + 1);
    });
 }