import React from "react";
import {Link} from "react-router-dom"
export default function Header() {
    return (
        <header className="header2">
            <div className="header-note">
                <p>Get 20% OFF on the <span> first order!</span>Use code SIGNUP20</p>
                <span className="note-close-btn"><i className="flaticon-cancel"></i></span>
            </div>
            <div className="header-top d-none d-md-block">
                <div className="container header-container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="header-top-link">
                                <Link to={{pathname:"/about"}} className="text-btn">About Us</Link>
                                <a href="register.html" className="text-btn">My account</a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="header-top-right">
                                <a href="contact.html" className="text-btn">Track Order</a>
                                <select name="lan-select" id="lan-select" className="language-select border-left">
                                    <option value="1">English</option>
                                    <option value="2">Hindi</option>
                                    <option value="3">Arabic</option>
                                    <option value="3">Bengali</option>
                                    <option value="3">French</option>
                                </select>
                                <select name="currency-select" id="currency-select" className="currency-select border-left">
                                    <option value="1">USD</option>
                                    <option value="2">EUR</option>
                                    <option value="3">JPY</option>
                                    <option value="4">GBP</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="header-sticky" className="header-main header-main1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="header-main-content-wrapper">
                                <div className="header-main-left header-main-left-header1">
                                    <div className="header-logo">
                                        <a href="index.html" className="logo-bl"><img src="assets/img/logo/logo.png"
                                            alt="logo-img" /></a>
                                    </div>
                                    <div className="main-menu main-menu2 d-none d-lg-block">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li><Link to={{pathname:"/home"}} className="text-btn">Home</Link>
                                                </li>
                                                <li><Link to={{pathname:"/about"}} className="text-btn">About Us</Link></li>
                                                <li className="menu-item-has-children"><a href="#">Shop</a>
                                                    <ul className="sub-menu">
                                                        <li ><Link to={{pathname:"/shop"}} className="text-btn">Shop</Link>
                                                            {/* <ul className="sub-menu">
                                                                <li><a href="shop-sidebar-5-column.html">Shop Sidebar 5 Column</a></li>
                                                                <li><a href="shop-sidebar-4-column.html">Shop Sidebar 4 Column</a></li>
                                                                <li><a href="shop-sidebar-3-column.html">Shop Sidebar 3 Column</a></li>
                                                                <li><a href="shop-full-6-column.html">Shop Full 6 Column</a></li>
                                                                <li><a href="shop-full-5-column.html">Shop Full 5 Column</a></li>
                                                                <li><a href="shop-full-4-column.html">Shop Full 4 Column</a></li>
                                                            </ul> */}
                                                        </li>
                                                        <li><Link to={{pathname:"/shopdetails"}} className="text-btn">Shop Details</Link></li>
                                                        <li><Link to={{pathname:"/wishlist"}} className="text-btn">Wishlist</Link></li>
                                                        <li><Link to={{pathname:"/cart"}} className="text-btn">Cart</Link></li>
                                                        <li><Link to={{pathname:"/checkout"}} className="text-btn">Checkout</Link></li>
                                                    </ul>
                                                </li>
                                                
                                                <li><Link to={{pathname:"/blog"}} className="text-btn">Blog</Link>
                                                    
                                                </li>
                                                <li><Link to={{pathname:"/contact"}} className="text-btn">Contact</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="header-main-right header-main-right-header1">
                                    <div className="action-list d-none d-xl-flex action-list-header2">
                                        <div className="action-item action-item-cart">
                                            <a href="javascript:void(0)" className="view-cart-button">
                                                <i className="fal fa-shopping-bag"></i>
                                                <span className="action-item-number">3</span></a>
                                            <a href="#" className="cart-items-price">$78.00</a>
                                        </div>
                                        <div className="action-item action-item-wishlist">
                                            <a href="javascript:void(0)" className="view-wishlist-button">
                                                <i className="fal fa-heart"></i>
                                                <span className="action-item-number">2</span></a>
                                        </div>
                                        <div className="user-btn">
                                            <Link to={{pathname:"/signin"}}>
                                                <div className="user-icon">
                                                    <i className="flaticon-avatar"></i>

                                                </div>
                                                <span><span>Sign in</span>Account</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="menu-bar d-xl-none ml-20">
                                        <a className="side-toggle" href="javascript:void(0)">
                                            <div className="bar-icon">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom d-none d-lg-block">
                <div className="container">
                    <div className="header-bottom-inner">
                        <div className="category-menu pos-rel">
                            <div className="category-click">
                                <div className="bar-icon bar-icon-2">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span>Category</span>
                            </div>
                            <div className="category-items">
                                <a href="shop.html" className="category-item">
                                    <div className="category-name">Cakes</div> <span className="category-items-number">8</span>
                                </a>
                                <a href="shop.html" className="category-item">
                                    <div className="category-name">Flowers</div> <span className="category-items-number">12</span>
                                </a>
                                <a href="shop.html" className="category-item">
                                    <div className="category-name">Gifts</div> <span className="category-items-number">17</span>
                                </a>
                                <a href="shop.html" className="category-item">
                                    <div className="category-name">Books</div> <span className="category-items-number">6</span>
                                </a>

                            </div>
                        </div>
                        <form action="#" className="filter-search-input header-search-2 d-none d-xl-inline-block">
                            <input type="text" placeholder="Search Products....." />
                            <button><i className="fal fa-search"></i></button>
                        </form>
                        <div className="header-support-social">
                            <div className="irc-item footer-support header-bottom-support">
                                <div className="irc-item-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="43.051" height="42.064"
                                        viewBox="0 0 43.051 42.064">
                                        <g id="customer-support2" transform="translate(-0.643 -1.361)">
                                            <path id="Path_251" data-name="Path 51"
                                                d="M41.05,19.581a18.893,18.893,0,0,0-37.763,0A4.444,4.444,0,0,0,.643,23.639v4.985a4.445,4.445,0,0,0,4.44,4.44,2.876,2.876,0,0,0,2.873-2.873v-8.12a2.867,2.867,0,0,0-2.591-2.845,16.834,16.834,0,0,1,33.605,0,2.867,2.867,0,0,0-2.588,2.844V30.19a2.866,2.866,0,0,0,2.626,2.847V35.09a4.2,4.2,0,0,1-4.191,4.19h-3.1a3.085,3.085,0,0,0-2.929-2.085h-3.2a3.071,3.071,0,0,0-1.3.286,3.122,3.122,0,0,0-1.812,2.83,3.12,3.12,0,0,0,3.116,3.116h3.2a3.128,3.128,0,0,0,2.931-2.086h3.1a6.257,6.257,0,0,0,6.25-6.25V32.671a4.443,4.443,0,0,0,2.626-4.049V23.637a4.444,4.444,0,0,0-2.644-4.056ZM5.9,22.071V30.19A.814.814,0,0,1,5.082,31,2.384,2.384,0,0,1,2.7,28.623V23.638a2.383,2.383,0,0,1,2.381-2.381A.814.814,0,0,1,5.9,22.071ZM29.818,40.53a1.061,1.061,0,0,1-1.034.837h-3.2a1.056,1.056,0,0,1-.438-2.017,1.023,1.023,0,0,1,.438-.1h3.2a1.061,1.061,0,0,1,1.034,1.275ZM41.634,28.623A2.384,2.384,0,0,1,39.254,31a.814.814,0,0,1-.813-.813V22.071a.814.814,0,0,1,.813-.813,2.384,2.384,0,0,1,2.381,2.381Z"
                                                transform="translate(0 0)" fill="#171717"></path>
                                            <path id="Path_252" data-name="Path 52"
                                                d="M33.629,33.546a4.368,4.368,0,0,0,4.363-4.363v-8.89a4.369,4.369,0,0,0-4.363-4.363H20.294a4.368,4.368,0,0,0-4.363,4.363v8.89a4.368,4.368,0,0,0,4.363,4.363h.082v2.3a2.139,2.139,0,0,0,2.136,2.145,2.094,2.094,0,0,0,1.507-.636l3.833-3.812ZM26.7,31.786l-4.148,4.125a.052.052,0,0,1-.071.016.069.069,0,0,1-.047-.078V32.516a1.03,1.03,0,0,0-1.03-1.03H20.295a2.306,2.306,0,0,1-2.3-2.3v-8.89a2.306,2.306,0,0,1,2.3-2.3H33.63a2.309,2.309,0,0,1,2.3,2.3v8.89a2.306,2.306,0,0,1-2.3,2.3h-6.2a1.031,1.031,0,0,0-.726.3Z"
                                                transform="translate(-4.793 -4.568)" fill="#171717"></path>
                                            <path id="Path_253" data-name="Path 53"
                                                d="M24.019,26.787a1.519,1.519,0,1,0,1.521,1.519A1.522,1.522,0,0,0,24.019,26.787Z"
                                                transform="translate(-6.853 -7.972)" fill="#171717"></path>
                                            <path id="Path_254" data-name="Path 54"
                                                d="M31.305,26.787a1.519,1.519,0,1,0,1.521,1.519A1.522,1.522,0,0,0,31.305,26.787Z"
                                                transform="translate(-9.137 -7.972)" fill="#171717"></path>
                                            <path id="Path_255" data-name="Path 55"
                                                d="M38.591,26.787a1.519,1.519,0,1,0,1.521,1.519A1.522,1.522,0,0,0,38.591,26.787Z"
                                                transform="translate(-11.422 -7.972)" fill="#171717"></path>
                                        </g>
                                    </svg>

                                </div>
                                <div className="irc-item-content">
                                    <div className="support-number"><a href="tel:555-900-888">555 - 900 - 888</a></div>
                                    <p>24/7 Support Center</p>
                                </div>

                            </div>
                            <div className="social__links header-bottom-social">
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}