
console.log("javascript added");
const sidebars = document.getElementById("side-bars");
const leftbutton = document.getElementById("left-slider-btn");
const rightbutton = document.getElementById("right-slider-btn");
const items = document.getElementById("slider-items").children.length;
const slider = document.getElementById("slider");
let counter;
counter = localStorage.getItem("counter");
console.log("set counter");
if (counter == null) {
    counter = 0;
    localStorage.setItem('counter', counter);
    document.getElementsByClassName("counter")[0].textContent = counter;
}
else {
    document.getElementsByClassName("counter")[0].textContent = counter;
}

let productinaddtocart;
let producttopush;
console.log(counter);
let responsiveslider = [
    { left: 1, right: 4 },
    { left: 1, right: 3 },
    { left: 1, right: 2 },
    { left: 1, right: 2 },
];
window.onload = () => {
    document.getElementsByClassName("counter")[0].textContent = counter;
};
function hamburgermenu() {
    sidebars.style.left = '0';
}
function clshamburgermenu() {
    sidebars.style.left = '-250px';
}

function rightclicked() {
    leftbutton.style.visibility = 'visible';
    if (window.outerWidth >= 1361) {
        if (responsiveslider[0].left <= 3 && responsiveslider[0].right <= items) {
            responsiveslider[0].left += 1;
            responsiveslider[0].right += 1;
            for (let i = 1; i <= items; i++) {
                document.getElementById(`item-${i}`).style.display = 'none';
            }

            for (let i = responsiveslider[0].left; i <= responsiveslider[0].right; i++) {
                document.getElementById(`item-${i}`).style.display = 'block';
            }
            if (responsiveslider[0].left == 3 && responsiveslider[0].right == items) {
                rightbutton.style.visibility = 'hidden';
                return;
            }
        }
    }
    else if (window.outerWidth >= 1251 && window.outerWidth <= 1360) {
        if (responsiveslider[1].left <= 4 && responsiveslider[1].right <= items) {
            responsiveslider[1].left += 1;
            responsiveslider[1].right += 1;
            for (let i = 1; i <= items; i++) {
                document.getElementById(`item-${i}`).style.display = 'none';
            }

            for (let i = responsiveslider[1].left; i <= responsiveslider[1].right; i++) {
                document.getElementById(`item-${i}`).style.display = 'block';
            }
            if (responsiveslider[1].left == 4 && responsiveslider[1].right == items) {
                rightbutton.style.visibility = 'hidden';
                return;
            }
        }
    }
    else if (window.outerWidth >= 768 && window.outerWidth <= 1250) {
        if (responsiveslider[2].left <= 5 && responsiveslider[2].right <= items) {
            responsiveslider[2].left += 1;
            responsiveslider[2].right += 1;
            for (let i = 1; i <= items; i++) {
                document.getElementById(`item-${i}`).style.display = 'none';
            }

            for (let i = responsiveslider[2].left; i <= responsiveslider[2].right; i++) {
                document.getElementById(`item-${i}`).style.display = 'block';
            }
            if (responsiveslider[2].left == 5 && responsiveslider[2].right == items) {
                rightbutton.style.visibility = 'hidden';
                return;
            }
        }
    }


}
function leftclicked() {
    if (window.outerWidth >= 1361) {

        if (responsiveslider[0].left >= 1 && responsiveslider[0].right >= 4) {
            responsiveslider[0].left -= 1;
            responsiveslider[0].right -= 1;
            for (let i = 1; i <= items; i++) {
                document.getElementById(`item-${i}`).style.display = 'none';
            }

            for (let i = responsiveslider[0].left; i <= responsiveslider[0].right; i++) {
                document.getElementById(`item-${i}`).style.display = 'block';
            }
            if (responsiveslider[0].left == 1 && responsiveslider[0].right == 4) {
                leftbutton.style.visibility = 'hidden';
                return;
            }
            if (responsiveslider[0].left >= 2 && responsiveslider[0].right <= 7) {
                rightbutton.style.visibility = 'visible';
            }
        }
    }
    else if (window.outerWidth >= 1255 && window.outerWidth <= 1360) {

        if (responsiveslider[1].left >= 1 && responsiveslider[1].right >= 3) {
            responsiveslider[1].left -= 1;
            responsiveslider[1].right -= 1;
            for (let i = 1; i <= items; i++) {
                document.getElementById(`item-${i}`).style.display = 'none';
            }

            for (let i = responsiveslider[1].left; i <= responsiveslider[1].right; i++) {
                document.getElementById(`item-${i}`).style.display = 'block';
            }
            if (responsiveslider[1].left == 1 && responsiveslider[1].right == 3) {
                leftbutton.style.visibility = 'hidden';
                return;
            }
            if (responsiveslider[1].left >= 2 && responsiveslider[1].right <= 7) {
                rightbutton.style.visibility = 'visible';
            }
        }
    }
    else if (window.outerWidth >= 768 && window.outerWidth <= 1254) {

        if (responsiveslider[2].left >= 1 && responsiveslider[2].right >= 2) {
            responsiveslider[2].left -= 1;
            responsiveslider[2].right -= 1;
            for (let i = 1; i <= items; i++) {
                document.getElementById(`item-${i}`).style.display = 'none';
            }

            for (let i = responsiveslider[2].left; i <= responsiveslider[2].right; i++) {
                document.getElementById(`item-${i}`).style.display = 'block';
            }
            if (responsiveslider[2].left == 1 && responsiveslider[2].right == 2) {
                leftbutton.style.visibility = 'hidden';
                return;
            }
            if (responsiveslider[2].left >= 2 && responsiveslider[2].right <= 7) {
                rightbutton.style.visibility = 'visible';
            }
        }
    }
}

function addtocart(e) {
    let flag = 0;
    let detailproduct = {
        productcode: e.id,
        productprice: e.children[2].children[1].textContent,
        producttitle: e.children[2].children[0].textContent,
        qty: 1,
        imagepath: e.children[1].children[0].src,
    };
    counter = localStorage.getItem("counter");
    counter++;
    localStorage.setItem('counter', counter);
    document.getElementsByClassName("counter")[0].textContent = counter;
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
            element.qty += 1;
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
