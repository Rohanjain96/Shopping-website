let tmpl = document.createElement('template');
tmpl.innerHTML = `
<link rel ="stylesheet" href="./css/navbar.css">
<div class="header">
            <div class="bars" id="headerbtn">
                <a>
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </a>
            </div>
            <label>Shopping website</label>
            <div class="search-box">
                <input type="text" id="search" placeholder="Type to search.....">
                <div class="search-icon">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>
            <!-- Signin form -->
            <div class="signin">
                <a href="login.html">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                </a>
            </div>
            <div class="Whishlist">
                <div class="addedtowishlist"> Added to wishlist</div>
                <div class="wishlistcounter" onload="settingcounter()"></div>
                <a href="wishlist.html">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                </a>
            </div>
            <!-- Add to cart -->
            <div class="Addtocart">
                <div class="addedtocart"> Added to cart</div>
                <div class="counter" onload="settingcounter()"></div>
                <a href="cart.html">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </a>
            </div>
        </div>
        <!-- Creating navigation bars -->
        <div class="navigation">
        <nav>
            <ul>
            <div class="bars" id="navigationbtn">
                <a>
                    <i class="fa fa-bars" aria-hidden="true"></i>
                    All
                </a>
            </div>
                    <li>
                        <a href="phonesection.html">Mobiles</a>
                    </li>
                    <li>
                        <a href="#">Laptops</a>
                    </li>
                    <li>
                        <a href="#">Electronics</a>
                    </li>
                    <li>
                        <a href="#">Furniture</a>
                    </li>
                    <li>
                        <a href="#">Men Clothes</a>
                    </li>
                    <li>
                        <a href="#">Women Clothes</a>
                    </li>
                </ul>
            </nav>
        </div>
        <!-- Creating hamburger menu -->
        <div class="side-bars" id="side-bars">
            <div class="closebtn">
                <i class="fa fa-window-close" aria-hidden="true"></i>
            </div>
            <div class="side-bars-container">
                <div class="side-containers">
                    <ul>
                        <li>
                            <a href="#" class="sidemenu-heading ">Trending</a>
                        </li>
                        <li>
                            <a href="#" class="sidemenu-items">Best Sellers</a>
                        </li>
                        <li>
                            <a href="#" class="sidemenu-items">New Releases</a>
                        </li>
                    </ul>
                </div>
                <div class="side-containers">
                    <ul>
                        <a href="#" class="sidemenu-heading">Shop By Departments</a>
                        </li>
                        <li>
                            <a href="phonesection.html" class="sidemenu-items">Mobiles</a>
                            <ul>
                                <li>
                                    <a href="#" class="sidemenudrop-items">All mobiles phone</a>
                                </li>
                                <li>
                                    <a href="#" class="sidemenudrop-items">Cases And covers</a>
                                </li>
                                <li>
                                    <a href="#" class="sidemenudrop-items">Screen guard </a>
                                </li>
                                <li>
                                    <a href="#" class="sidemenudrop-items">Power Banks </a>
                                </li>
                                <li>
                                    <a href="#" class="sidemenudrop-items">Earphones </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" class="sidemenu-items">Laptops</a>
                        </li>
                        <li>
                            <a href="#" class="sidemenu-items">Speakers</a>
                        </li>
                        <li>
                            <a href="#" class="sidemenu-items">Computers</a>
                        </li>
                        <li>
                            <a href="#" class="sidemenu-items">Men Fashion</a>
                        </li>
                        <li>
                            <a href="#" class="sidemenu-items">Women fashion</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
`;
class Navbar extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
    connectedCallback() {
        let counter;
        let wishlistcounter;
        counter = localStorage.getItem("counter");
        if (counter == null) {
            counter = 0;
            localStorage.setItem('counter', counter);
            this.shadowRoot.querySelector(".counter").textContent = counter;
        }
        else {
            this.shadowRoot.querySelector(".counter").textContent = counter;
        }
        wishlistcounter = localStorage.getItem("wishlistcounter");
        if (wishlistcounter == null) {
            wishlistcounter = 0;
            localStorage.setItem('wishlistcounter', wishlistcounter);
            this.shadowRoot.querySelector(".wishlistcounter").textContent = wishlistcounter;
        }
        else {
            this.shadowRoot.querySelector(".wishlistcounter").textContent = wishlistcounter;
        }

        let addtocartbtn = document.querySelectorAll(".fa-shopping-cart");
        addtocartbtn.forEach((e)=>
        {
            e.addEventListener('click',()=>
            {
                let counter = localStorage.getItem('counter');
                this.shadowRoot.querySelector(".counter").textContent = counter;
                atcshowmessage(this);
            })
        })
        let wishlistbtn = document.querySelectorAll(".fa-heart");
        wishlistbtn.forEach((e)=>
        {
            e.addEventListener('click',()=>
            {
                let wishlistcounter = localStorage.getItem('wishlistcounter');
                this.shadowRoot.querySelector(".wishlistcounter").textContent = wishlistcounter;
                atwshowmessage(this);
            })
        })

        hamburgermenu(this);
        clshamburgermenu(this);
        // clshamburgermenu(this);
    };
    attributeChangedCallback(name,oldval,newval)
    {
        hamburgermenu(this);
        clshamburgermenu(this);
    }
}
window.customElements.define('nav-bar', Navbar);
function atwshowmessage(elem)
{
    let addedtowishlist = elem.shadowRoot.querySelector(".addedtowishlist");
    addedtowishlist.style.right = '-80px';
    addedtowishlist.style.display = 'block';
    setTimeout(() => {
        addedtowishlist.style.right = '-120px';
        addedtowishlist.style.display = 'none';
    }, 2000);
}

function atcshowmessage(elem)
{
    let addedtocart = elem.shadowRoot.querySelector(".addedtocart");
    addedtocart.style.right = '-20px';
    addedtocart.style.display = 'block';
    setTimeout(() => {
        addedtocart.style.right = '-120px';
        addedtocart.style.display = 'none';
    }, 2000);
}

function hamburgermenu(elem)
{
    let sidebars = elem.shadowRoot.querySelector('#navigationbtn');
    let sidemenu = elem.shadowRoot.querySelector('#side-bars');
    sidebars.addEventListener('click',()=>sidemenu.style.left = '0');
}

function clshamburgermenu(elem) {
    let clsbtn = elem.shadowRoot.querySelector('.closebtn');
    let sidemenu = elem.shadowRoot.querySelector('#side-bars');
    clsbtn.addEventListener('click',()=>sidemenu.style.left = '-250px');
}