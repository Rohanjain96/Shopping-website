const sidebars = document.getElementById("side-bars");
const filtersection = document.querySelector(".filtersections");
let wishlistcounter;
function hamburgermenu() {
    sidebars.style.left = '0';
}
function clshamburgermenu() {
    sidebars.style.left = '-250px';
}

function hamburgerfiltersection() {
    filtersection.style.left = '0';
}
function clshamburgfiltersection() {
    filtersection.style.left = '-250px';
}
let counter;
counter = localStorage.getItem("counter");
if (counter == null) {
    counter = 0;
    localStorage.setItem('counter', counter);
    document.getElementsByClassName("counter")[0].textContent = counter;
}
else {
    document.getElementsByClassName("counter")[0].textContent = counter;
}
wishlistcounter = localStorage.getItem("wishlistcounter");
console.log("set counter");
if (wishlistcounter == null) {
    wishlistcounter = 0;
    localStorage.setItem('wishlistcounter', wishlistcounter);
    document.getElementsByClassName("wishlistcounter")[0].textContent = wishlistcounter;
}
else {
    document.getElementsByClassName("wishlistcounter")[0].textContent = wishlistcounter;
}
const leftbutton = document.getElementById("left-slider-btn");
const rightbutton = document.getElementById("right-slider-btn");
const items = document.getElementById("slider-items").children.length;
const slider = document.getElementById("slider");
let responsiveslider = [
    { left: 1, right: 5 },
    { left: 1, right: 4 },
    { left: 1, right: 3 },
    { left: 1, right: 3 },
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

        if (responsiveslider[0].left >= 1 && responsiveslider[0].right >= 5) {
            responsiveslider[0].left -= 1;
            responsiveslider[0].right -= 1;
            for (let i = 1; i <= items; i++) {
                document.getElementById(`item-${i}`).style.display = 'none';
            }

            for (let i = responsiveslider[0].left; i <= responsiveslider[0].right; i++) {
                document.getElementById(`item-${i}`).style.display = 'block';
            }
            if (responsiveslider[0].left == 1 && responsiveslider[0].right == 5) {
                leftbutton.style.visibility = 'hidden';
                return;
            }
            if (responsiveslider[0].left >= 2 && responsiveslider[0].right <= 7) {
                rightbutton.style.visibility = 'visible';
            }
        }
    }
    else if (window.outerWidth >= 1160 && window.outerWidth <= 1360) {

        if (responsiveslider[1].left >= 1 && responsiveslider[1].right >= 4) {
            responsiveslider[1].left -= 1;
            responsiveslider[1].right -= 1;
            for (let i = 1; i <= items; i++) {
                document.getElementById(`item-${i}`).style.display = 'none';
            }

            for (let i = responsiveslider[1].left; i <= responsiveslider[1].right; i++) {
                document.getElementById(`item-${i}`).style.display = 'block';
            }
            if (responsiveslider[1].left == 1 && responsiveslider[1].right == 4) {
                leftbutton.style.visibility = 'hidden';
                return;
            }
            if (responsiveslider[1].left >= 2 && responsiveslider[1].right <= 7) {
                rightbutton.style.visibility = 'visible';
            }
        }
    }
    else if (window.outerWidth >= 768 && window.outerWidth <= 1159) {

        if (responsiveslider[2].left >= 1 && responsiveslider[2].right >= 3) {
            responsiveslider[2].left -= 1;
            responsiveslider[2].right -= 1;
            for (let i = 1; i <= items; i++) {
                document.getElementById(`item-${i}`).style.display = 'none';
            }

            for (let i = responsiveslider[2].left; i <= responsiveslider[2].right; i++) {
                document.getElementById(`item-${i}`).style.display = 'block';
            }
            if (responsiveslider[2].left == 1 && responsiveslider[2].right == 3) {
                leftbutton.style.visibility = 'hidden';
                return;
            }
            if (responsiveslider[2].left >= 2 && responsiveslider[2].right <= 7) {
                rightbutton.style.visibility = 'visible';
            }
        }
    }
}

let flag = 0;
function filter() {
    let checkbox = document.querySelectorAll("input[type=checkbox]");
    let rangecheckbox = document.querySelectorAll("input[type=radio]");
    let min;
    let max;
    let prices;
    let removecomma;
    let smartphoneprice;
    let checkedarr = [];
    let smartphones = document.querySelectorAll('.smartphone');

    for (check of checkbox) {
        if (check.checked == true) {
            flag = 1;
            checkedarr.push(check);
            console.log(checkedarr);
        }
    }
    for (let item of smartphones) {
        item.style.display = 'none';
    }
    for (const items of checkedarr) {   
        for (let item of smartphones) {
            if (item.children[1].textContent.includes(items.parentElement.textContent)) {
                console.log(item.children[1].textContent);
                item.style.display = 'block';
            }
        }
    }
    
    for (rangecheck of rangecheckbox) {
        if (rangecheck.checked == true) {
            flag = 1;
            prices=rangecheck.parentElement.textContent;
            removecomma=prices.split('-');
            if(removecomma[0].includes(',',''))
            {
                min = removecomma[0].replace(',','');
            }
            else
            {
                min=removecomma[0];
            }
            if(removecomma[1].includes(',',''))
            {
                max = removecomma[1].replace(',','');
            }
            else
            {
                max=removecomma[1];
            }
        }
    }
    for (let rangeitem of smartphones) {
        smartphoneprice = rangeitem.children[2].children[0].textContent;
        if(smartphoneprice.includes(',',''))
        {
            smartphoneprice = parseInt(smartphoneprice.replace(',',''));
        }

                    if (smartphoneprice>parseInt(min) && smartphoneprice<parseInt(max)) {
                        rangeitem.style.display = 'block';
                    }
    }
    
    
    if (flag == 0) {
        for (let item of smartphones) {
            item.style.display = 'block';
        }
    }
    flag=0;
}

