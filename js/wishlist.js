let html = "";
let showmessage = document.querySelector(".showmessage");
let list = document.querySelector("#list");
populate();
function populate()
{
    showmessage.style.display='block';
    list.style.display='none';
    productinaddtowishlist = localStorage.getItem("productinaddtowishlist");
if (productinaddtowishlist == null||productinaddtowishlist =="[]") {
    producttopush = [];
}

else {
    producttopush = JSON.parse(productinaddtowishlist);
    showmessage.style.display='none';
    list.style.display='block';
}
    producttopush.forEach(element => {
        html += ` <div class="item-container">
        <div class="items" id=${element.productcode}>
            <div class="img-container">
                <img src="${element.imagepath}">
            </div>
            <div class="item-name">${element.producttitle}</div>
            <div class="price"><i class="fa fa-inr">${element.productprice}</i></div>
            <div class="addtocart-btn" style="color: black;" onclick="addtocart(this.parentElement)">
                Add to cart
            </div>
            <div class="rem-btn" style="color: black;" onclick="removefromwishlist(this.parentElement)">
                Remove
            </div>
        </div>
    </div>`;
    });
    document.getElementById("list").innerHTML = html;
}


function addtocart(e) {
    console.log(e.children[0].children[0].src);
    let detailproduct = {
        productcode: e.id,
        productprice: e.children[2].textContent,
        producttitle: e.children[1].textContent,
        qty: 1,
        imagepath: e.children[0].children[0].src,
    };
    counter = localStorage.getItem("counter");
    counter++;
    localStorage.setItem('counter', counter);
    productinaddtocart = localStorage.getItem("productinaddtocart");
    if (productinaddtocart == null || productinaddtocart == "[]") {
        producttopush = [];
        producttopush.push(detailproduct);
        localStorage.setItem("productinaddtocart", JSON.stringify(producttopush));
        removefromwishlist(e);
        return;
    }

    else {
        producttopush = JSON.parse(productinaddtocart);
    }
    producttopush.forEach(element => {
        if (element.productcode == e.id) {
            console.log("qty increase");
            element.qty += 1;
            localStorage.setItem("productinaddtocart", JSON.stringify(producttopush));
            removefromwishlist(e);
            return;

        }
        else {
            console.log(" first push of element");
            producttopush.push(detailproduct);
            localStorage.setItem("productinaddtocart", JSON.stringify(producttopush));
            removefromwishlist(e);
            return;
        }
    });

    function removerepeatedelement(element, index) {
        productinaddtocart = localStorage.getItem("productinaddtocart");
        producttopush = JSON.parse(productinaddtocart);
        for (i = index; i < producttopush.length; i++) {
            if (producttopush[i].productcode == element.productcode)
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



function removefromwishlist(e)
{
    productinaddtowishlist = localStorage.getItem("productinaddtowishlist");
    if (productinaddtowishlist == null) {
        producttopush = [];
        showmessage.style.display = 'block';
    }
    
    else {
        producttopush = JSON.parse(productinaddtowishlist);
    }
    producttopush.forEach((element,index) => {
        if (element.productcode == e.id) {
            wishlistcounter = localStorage.getItem("wishlistcounter");
            wishlistcounter = wishlistcounter - 1;
            localStorage.setItem('wishlistcounter', wishlistcounter);
            producttopush.splice(index, 1);
            localStorage.setItem("productinaddtowishlist", JSON.stringify(producttopush));
        }
    });
    productinaddtowishlist = localStorage.getItem("productinaddtowishlist");
    if (productinaddtowishlist == null) {
        producttopush = [];
        showmessage.style.display = 'block';
        list.style.display='none';
    }
    location.reload();
}