class pageHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section>
        <nav>
            <a href="index.html">
                <img src="assets/img/amazon_logo.png" width="100" alt="Amazon-logo">
            </a>
            <div class="nav-country">
                <img src="assets/img/location_icon.png" height="20" alt="location-icon">
                <article>
                    <p>Deliver to</p>
                    <h1>United States</h1>
                </article>
            </div>
            <div class="nav-search">
                <div class="nav-search-category">
                    <p>All</p>
                    <img src="assets/img/dropdown_icon.png" height="12" alt="dropdownicon">
                </div>
                <input type="text" class="nav-search-input" placeholder="Search Amazon">
                <img src="assets/img/search_icon.png" class="nav-search-icon" alt="search-icon">
            </div>
            <div class="nav-language">
                <img src="assets/img/us_flag.png" width="25px" alt="flag-image">
                <p>EN</p>
                <img src="assets/img/dropdown_icon.png" width="8px" alt="dropdown-image">
            </div>
            <div class="nav-text">
                <p>Hello, Sign in</p>
                <h1>
                    Account & Lists 
                    <img src="assets/img/dropdown_icon.png" width="8px" alt="dropdownicon">
                </h1>
            </div>
            <div class="nav-text">
                <p>Return</p>
                <h1>& Orders</h1>
            </div>
            <a href="" class="nav-cart">
                <img src="assets/img/cart_icon.png" width="35px" alt="cart-icon">
                <h4>Cart</h4>
            </a>
        </nav>
        <div class="nav-botton">
            <article>
                <img src="assets/img/menu_icon.png" width="25px" alt="Menu-icon">
                <p>All</p>
            </article>
            <p>Today's Deals</p>
            <p>Customer Service</p>
            <p>Registry</p>
            <p>Gift Cards</p>
            <p>Sell</p>
        </div>
        </section>
        `
    }
};

class pageFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section>
        <footer>

            <div class="footer-links">
                <div class="footer-links-list">
                    <h4>Get to Know Us</h4>
                    <ul>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">About Amazon</a></li>
                        <li><a href="#">Investor Relations</a></li>
                        <li><a href="#">Amazon Devices</a></li>
                        <li><a href="#">Amazon Science</a></li>
                    </ul>
                </div>

                <div class="footer-links-list">
                    <h4>Make Money with US</h4>
                    <ul>
                        <li><a href="#">Sell products on Amazon</a></li>
                        <li><a href="#">Sell on Amazon Business</a></li>
                        <li><a href="#">Sell apps on Amazon</a></li>
                        <li><a href="#">Become an Affiliate</a></li>
                        <li><a href="#">Advertise Your Products</a></li>
                        <li><a href="#">Self-Publish with Us</a></li>
                    </ul>
                </div>

                <div class="footer-links-list">
                    <h4>Amazon Payment Products</h4>
                    <ul>
                        <li><a href="#">Sell products on Amazon</a></li>
                        <li><a href="#">Sell on Amazon Business</a></li>
                        <li><a href="#">Amazon Business Card</a></li>
                        <li><a href="#">Shop with Points</a></li>
                        <li><a href="#">Reload Your Balance</a></li>
                        <li><a href="#">Amazon Currency Converter</a></li>
                    </ul>
                </div>

                <div class="footer-links-list">
                    <h4>Let Us Help You</h4>
                    <ul>
                        <li><a href="#">Amazon and COVID-19</a></li>
                        <li><a href="#">Your Account</a></li>
                        <li><a href="#">Your Orders</a></li>
                        <li><a href="#">Shipping Rates & Policies</a></li>
                        <li><a href="#">Returns & Replacements</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-logo-button">
                <a href="index.html"><img src="assets/img/amazon_logo.png" width="60" alt="amazon-logo"></a>
                <a href="#" class="logo-button-a">English</a>
                <a href="#" class="logo-button-a">$ USD - U.S Dollar</a>
                <a href="#" class="logo-button-a">United States</a>
            </div>

            <div class="footer-copyright-link">
                <a href="#">Conditions of Use</a>
                <a href="#">Policy Notice</a>
                <a href="#">Consumer Health Data Privacy Disclosure</a>
                <a href="#">Your Ads Privacy Choices</a>
            </div>
            <p class="footer-copyright-text">
                &#169; 1996 - <script>document.write(new Date().getFullYear());</script>, 
                Amazon.com, Inc. or its affiliates
            </p>
        </footer>
        </section>
        `
    }
};

class pageProducts extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ``
    }
};

customElements.define('include-header', pageHeader);
customElements.define('include-footer', pageFooter);