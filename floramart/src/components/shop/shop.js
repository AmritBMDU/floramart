import React from "react";

export default function Shop(){
    return (
        <main>


        {/*<!-- side toggle start -->*/}
        <div className="fix">
           <div className="side-info">
              <div className="side-info-content">
                 <div className="offset-widget offset-logo mb-40">
                    <div className="row align-items-center">
                       <div className="col-9">
                          <a href="index.html">
                             <img src="assets/img/logo/logo-bl.png" alt="Logo"/>
                          </a>
                       </div>
                       <div className="col-3 text-end"><button className="side-info-close"><i className="fal fa-times"></i></button>
                       </div>
                    </div>
                 </div>
                 <div className="mobile-menu d-lg-none fix"></div>
                 <div className="offset-profile-action d-md-none">
                    <div className="offset-widget mb-40">
                       <div className="action-list action-list-header1">
                          <div className="action-item action-item-cart">
                             <a href="javascript:void(0)" className="view-cart-button">
                                <i className="fal fa-shopping-bag"></i>
                                <span className="action-item-number">3</span></a>
                          </div>
                          <div className="action-item action-item-wishlist">
                             <a href="javascript:void(0)" className="view-wishlist-button">
                                <i className="fal fa-heart"></i>
                                <span className="action-item-number">2</span></a>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="offset-widget offset_searchbar mb-30">
                    <form action="#" className="filter-search-input">
                       <input type="text" placeholder="Search keyword"/>
                       <button><i className="fal fa-search"></i></button>
                    </form>
                 </div>
              </div>
           </div>
        </div>
        <div className="offcanvas-overlay"></div>
        <div className="offcanvas-overlay-white"></div>
  
        <div className="fix">
           <div className="sidebar-action sidebar-cart">
              <button className="close-sidebar">Close<i className="fal fa-times"></i></button>
              <h4 className="sidebar-action-title">Shopping Cart</h4>
              <div className="sidebar-action-list">
                 <div className="sidebar-list-item">
                    <div className="product-image pos-rel">
                       <a href="shop-details.html" className=""><img src="assets/img/shirt/3/1.jpg" alt="img"/></a>
                    </div>
                    <div className="product-desc">
                       <div className="product-name"><a href="shop-details.html">Felted Shirt for Man</a></div>
                       <div className="product-pricing">
                          <span className="item-number">1 &times;</span>
                          <span className="price-now">$24.00</span>
                       </div>
                       <button className="remove-item"><i className="fal fa-times"></i></button>
                    </div>
                 </div>
                 <div className="sidebar-list-item">
                    <div className="product-image pos-rel">
                       <a href="shop-details.html" className=""><img src="assets/img/pant/1/4.jpg" alt="img"/></a>
                    </div>
                    <div className="product-desc">
                       <div className="product-name"><a href="shop-details.html">Denim Jeans Pant</a></div>
                       <div className="product-pricing">
                          <span className="item-number">1 &times;</span>
                          <span className="price-now">$12.00</span>
                       </div>
                       <button className="remove-item"><i className="fal fa-times"></i></button>
                    </div>
                 </div>
                 <div className="sidebar-list-item">
                    <div className="product-image pos-rel">
                       <a href="shop-details.html" className=""><img src="assets/img/jacket/2/2.jpg" alt="img"/></a>
                    </div>
                    <div className="product-desc">
                       <div className="product-name"><a href="shop-details.html">Denim Official Jacket</a></div>
                       <div className="product-pricing">
                          <span className="item-number">1 &times;</span>
                          <span className="price-now">$42.00</span>
                       </div>
                       <button className="remove-item"><i className="fal fa-times"></i></button>
                    </div>
                 </div>
  
              </div>
              <div className="product-price-total">
                 <span>Subtotal :</span>
                 <span className="subtotal-price">$78.00</span>
              </div>
              <div className="sidebar-action-btn">
                 <a href="cart.html" className="fill-btn">View cart</a>
                 <a href="checkout.html" className="border-btn">Checkout</a>
              </div>
           </div>
        </div>
        <div className="fix">
           <div className="sidebar-action sidebar-wishlist">
              <button className="close-sidebar">Close<i className="fal fa-times"></i></button>
              <h4 className="sidebar-action-title">Wishlist</h4>
              <div className="sidebar-action-list">
                 <div className="sidebar-list-item">
                    <div className="product-image pos-rel">
                       <a href="shop-details.html" className=""><img src="assets/img/shirt/1/1.jpg" alt="img"/></a>
                    </div>
                    <div className="product-desc">
                       <div className="product-name"><a href="shop-details.html">Women's Faux-Trim Shirt</a></div>
                       <div className="product-pricing">
                          <span className="price-now">$20.00</span>
                       </div>
                       <button className="remove-item"><i className="fal fa-times"></i></button>
                    </div>
                 </div>
                 <div className="sidebar-list-item">
                    <div className="product-image pos-rel">
                       <a href="shop-details.html" className=""><img src="assets/img/pant/1/1.jpg" alt="img"/></a>
                    </div>
                    <div className="product-desc">
                       <div className="product-name"><a href="shop-details.html">Skinny Jeans Pant</a></div>
                       <div className="product-pricing">
                          <span className="price-now">$24.00</span>
                       </div>
                       <button className="remove-item"><i className="fal fa-times"></i></button>
                    </div>
                 </div>
  
              </div>
              <div className="product-price-total">
                 <span>Subtotal :</span>
                 <span className="subtotal-price">$44.00</span>
              </div>
              <div className="sidebar-action-btn">
                 <a href="cart.html" className="fill-btn">View cart</a>
                 <a href="cart.html" className="border-btn">Checkout</a>
              </div>
           </div>
        </div>
        <div className="fix">
           <div className="sidebar-action sidebar-filter">
              <button className="close-sidebar">Close<i className="fal fa-times"></i></button>
              <h4 className="sidebar-action-title">Filter Items</h4>
              <div className="product-filters mb-0">
                 <div className="filter-widget">
                    <h4 className="filter-widget-title drop-btn">Search</h4>
                    <div className="filter-widget-content">
                       <div className="filter-widget-search">
                          <input type="text" placeholder="Search here.."/>
                          <button type="submit"><i className="fal fa-search"></i></button>
                       </div>
  
                    </div>
                 </div>
                 <div className="filter-widget">
                    <h4 className="filter-widget-title drop-btn">Category</h4>
                    <div className="filter-widget-content">
                       <div className="category-items">
                          <a href="shop.html" className="category-item">
                             <div className="category-name">Shirts</div> <span className="category-items-number">8</span>
                          </a>
                          <a href="shop.html" className="category-item">
                             <div className="category-name">Pants</div> <span className="category-items-number">12</span>
                          </a>
                          <a href="shop.html" className="category-item">
                             <div className="category-name">Jackets</div> <span className="category-items-number">17</span>
                          </a>
                          <a href="shop.html" className="category-item">
                             <div className="category-name">Leggings</div> <span className="category-items-number">6</span>
                          </a>
                          <a href="shop.html" className="category-item">
                             <div className="category-name">Beachware</div> <span className="category-items-number">25</span>
                          </a>
                          <a href="shop.html" className="category-item">
                             <div className="category-name">Underwear</div> <span className="category-items-number">17</span>
                          </a>
                          <a href="shop.html" className="category-item">
                             <div className="category-name">Bag</div> <span className="category-items-number">15</span>
                          </a>
                          <a href="shop.html" className="category-item">
                             <div className="category-name">Belt</div> <span className="category-items-number">9</span>
                          </a>
                       </div>
                    </div>
                 </div>
                 <div className="filter-widget">
                    <h4 className="filter-widget-title drop-btn">Size</h4>
                    <div className="filter-widget-content">
                       <div className="category-sizes">
                          <div className="category-size">
                             <input className="check-box" type="checkbox" id="s-ex-s"/>
                             <label className="check-label" for="s-ex-s">Extra Small</label>
                          </div>
                          <div className="category-size">
                             <input className="check-box" type="checkbox" id="s-sm"/>
                             <label className="check-label" for="s-sm">Small</label>
                          </div>
                          <div className="category-size">
                             <input className="check-box" type="checkbox" id="s-md"/>
                             <label className="check-label" for="s-md">Medium</label>
                          </div>
                          <div className="category-size">
                             <input className="check-box" type="checkbox" id="s-large"/>
                             <label className="check-label" for="s-large">Large</label>
                          </div>
                          <div className="category-size">
                             <input className="check-box" type="checkbox" id="s-ex-l"/>
                             <label className="check-label" for="s-ex-l">Extra Large</label>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="filter-widget">
                    <h4 className="filter-widget-title drop-btn">Rating</h4>
                    <div className="filter-widget-content">
                       <div className="category-ratings">
                          <div className="category-rating">
                             <input className="radio-box" type="radio" id="s-st-5" name="rating"/>
                             <label className="radio-star" for="s-st-5">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                             </label>
                          </div>
                          <div className="category-rating">
                             <input className="radio-box" type="radio" id="s-st-4" name="rating"/>
                             <label className="radio-star" for="s-st-4">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fal fa-star"></i>
                             </label>
                          </div>
                          <div className="category-rating">
                             <input className="radio-box" type="radio" id="s-st-3" name="rating"/>
                             <label className="radio-star" for="s-st-3">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fal fa-star"></i>
                                <i className="fal fa-star"></i>
                             </label>
                          </div>
                          <div className="category-rating">
                             <input className="radio-box" type="radio" id="s-st-2" name="rating"/>
                             <label className="radio-star" for="s-st-2">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fal fa-star"></i>
                                <i className="fal fa-star"></i>
                                <i className="fal fa-star"></i>
                             </label>
                          </div>
                          <div className="category-rating">
                             <input className="radio-box" type="radio" id="s-st-1" name="rating"/>
                             <label className="radio-star" for="s-st-1">
                                <i className="fas fa-star"></i>
                                <i className="fal fa-star"></i>
                                <i className="fal fa-star"></i>
                                <i className="fal fa-star"></i>
                                <i className="fal fa-star"></i>
                             </label>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="filter-widget">
                    <h4 className="filter-widget-title drop-btn">Colour</h4>
                    <div className="filter-widget-content">
                       <div className="category-colours">
                          <div className="category-color">
                             <ul className="product-color-nav">
                                <li className="cl-pink active">
                                   <img src="assets/img/product/product-img1.jpg" alt="img"/>
                                </li>
                                <li className="cl-black">
                                   <img src="assets/img/product/product-img2.jpg" alt="img"/>
                                </li>
                                <li className="cl-blue">
                                   <img src="assets/img/product/product-img3.jpg" alt="img"/>
                                </li>
                                <li className="cl-red">
                                   <img src="assets/img/product/product-img4.jpg" alt="img"/>
                                </li>
                             </ul>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="filter-widget">
                    <h4 className="filter-widget-title drop-btn">Brand</h4>
                    <div className="filter-widget-content">
                       <div className="category-brands">
                          <div className="category-brand">
                             <input className="check-box" type="checkbox" id="s-b-next"/>
                             <label className="check-label" for="s-b-next">Next</label>
                          </div>
                          <div className="category-size">
                             <input className="check-box" type="checkbox" id="s-b-ri"/>
                             <label className="check-label" for="s-b-ri">River Island</label>
                          </div>
                          <div className="category-size">
                             <input className="check-box" type="checkbox" id="s-b-geox"/>
                             <label className="check-label" for="s-b-geox">Geox</label>
                          </div>
                          <div className="category-size">
                             <input className="check-box" type="checkbox" id="s-b-eco"/>
                             <label className="check-label" for="s-b-eco">Ecomart</label>
                          </div>
                          <div className="category-size">
                             <input className="check-box" type="checkbox" id="s-b-abby"/>
                             <label className="check-label" for="s-b-abby">Abby</label>
                          </div>
                          <div className="category-size">
                             <input className="check-box" type="checkbox" id="s-b-nike"/>
                             <label className="check-label" for="s-b-nike">Nike</label>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="filter-widget">
                    <h4 className="filter-widget-title drop-btn">Price</h4>
                    <div className="filter-widget-content">
                       <div className="filter-price">
                          <div className="slider-range">
                             <div className="slider-range-bar"></div>
                             <p>
                                <label for="s-amount">Price :</label>
                                <input type="text" id="s-amount" className="amount" readonly/>
                             </p>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="filter-widget">
                    <h4 className="filter-widget-title drop-btn">Tags</h4>
                    <div className="filter-widget-content">
                       <div className="category-tags">
                          <a href="#" className="category-tag">Fashion</a>
                          <a href="#" className="category-tag">Hats</a>
                          <a href="#" className="category-tag">Sandal</a>
                          <a href="#" className="category-tag">Bags</a>
                          <a href="#" className="category-tag">Snacker</a>
                          <a href="#" className="category-tag">Denim</a>
                          <a href="#" className="category-tag">Sunglasses</a>
                          <a href="#" className="category-tag">Beachwear</a>
                          <a href="#" className="category-tag">Vagabond</a>
                          <a href="#" className="category-tag">Trend</a>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        {/*<!-- side toggle end -->
  
        <!-- page title area start  -->*/}
        <section className="page-title-area" data-background="assets/img/bg/page-title-bg.jpg">
           <div className="container">
              <div className="row">
                 <div className="col-lg-12">
                    <div className="page-title-wrapper text-center">
                       <h1 className="page-title mb-10">Shop</h1>
                       <div className="breadcrumb-menu">
                          <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                             <ul className="trail-items">
                                <li className="trail-item trail-begin"><a href="index.html"><span>Home</span></a></li>
                                <li className="trail-item trail-end"><span>Shop</span></li>
                             </ul>
                          </nav>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
        {/*<!-- page title area end  -->
  
        <!-- shop main area start  -->*/}
        <div className="shop-main-area pt-120 pb-10">
           <div className="container">
              <div className="row">
                 <div className="col-xl-9 col-lg-8 col-md-12">
                    <div className="shop-main-wrapper mb-60">
                       <div className="shop-main-wrapper-head mb-30">
                          <div className="swowing-list">Showing <span>12 of 39</span> Products</div>
                          <div className="sort-type-filter">
                             <div className="sorting-type">
                                <span>Sort by : </span>
                                <select className="sorting-list" name="sorting-list" id="sorting-list">
                                   <option value="1">Default</option>
                                   <option value="2">Most popular</option>
                                   <option value="3">Date</option>
                                   <option value="4">Trending</option>
                                   <option value="4">Featured</option>
                                   <option value="4">Discounted</option>
                                </select>
                             </div>
                             <div className="action-item action-item-filter d-lg-none">
                                <a href="javascript:void(0)" className="view-filter-button">
                                   <i className="flaticon-filter"></i>
                                </a>
                             </div>
                          </div>
                       </div>
                       <div className="products-wrapper">
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/shirt/1/1.jpg" alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                                <div className="product-sticker-wrapper">
                                   <span className="product-sticker new">New</span>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Comfy Winter Shirt</a></div>
                                <div className="product-price">
                                   <span className="price-now">£55.00</span>
                                </div>
                                <ul className="product-color-nav">
                                   <li className="cl-pink active">
                                      <img src="assets/img/shirt/1/1.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-light-white">
                                      <img src="assets/img/shirt/1/3.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-black">
                                      <img src="assets/img/shirt/1/5.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-navy">
                                      <img src="assets/img/shirt/1/7.jpg" alt="img"/>
                                   </li>
                                </ul>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/pant/1/1.jpg" alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
  
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Skinny Jeans Pant</a></div>
                                <div className="product-price">
                                   <span className="price-now">£45.00</span>
                                </div>
                                <ul className="product-color-nav">
                                   <li className="cl-navy active">
                                      <img src="assets/img/pant/1/1.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-light-white">
                                      <img src="assets/img/pant/1/4.jpg" alt="img"/>
                                   </li>
                                </ul>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/pant/2/1.jpg" alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                                <div className="product-sticker-wrapper">
                                   <span className="product-sticker discount"> -25%</span>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Men's Flat-Front Shorts</a></div>
                                <div className="product-price">
                                   <span className="price-now">£30.00</span>
                                   <span className="price-old">£40.00</span>
                                </div>
                                <ul className="product-color-nav">
                                   <li className="cl-brown active">
                                      <img src="assets/img/pant/2/1.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-ash">
                                      <img src="assets/img/pant/2/3.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-navy">
                                      <img src="assets/img/pant/2/5.jpg" alt="img"/>
                                   </li>
                                </ul>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/shoe/1.jpg" alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Eastland Lumber Up Boots</a></div>
                                <div className="product-price">
                                   <span className="price-now">£38.00</span>
                                </div>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/shirt/3/1.jpg" alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Men's Poplin Dress Shirt</a></div>
                                <div className="product-price">
                                   <span className="price-now">£25.00</span>
                                </div>
                                <ul className="product-color-nav">
                                   <li className="cl-yellow active">
                                      <img src="assets/img/shirt/3/1.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-black">
                                      <img src="assets/img/shirt/3/2.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-navy">
                                      <img src="assets/img/shirt/3/3.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-orange">
                                      <img src="assets/img/shirt/3/4.jpg" alt="img"/>
                                   </li>
                                </ul>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/bag/1.jpg" alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                                <div className="product-sticker-wrapper">
                                   <span className="product-sticker new">New</span>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Varsi Leather Bag</a></div>
                                <div className="product-price">
                                   <span className="price-now">£65.00</span>
                                </div>
                                <ul className="product-color-nav">
                                   <li className="cl-brown active">
                                      <img src="assets/img/bag/1.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-ash">
                                      <img src="assets/img/bag/2.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-black">
                                      <img src="assets/img/bag/3.jpg" alt="img"/>
                                   </li>
                                </ul>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/product/800_1034/Image-2-1.jpg"
                                      alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Fit Twill Shirt for Woman</a></div>
                                <div className="product-price">
                                   <span className="price-now">£62.00</span>
                                </div>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/product/800_1034/Image-3-1.jpg"
                                      alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                                <div className="product-sticker-wrapper">
                                   <span className="product-sticker discount"> -25%</span>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Grand Atlantic Chukka Boots</a>
                                </div>
                                <div className="product-price">
                                   <span className="price-now">£24.00</span>
                                   <span className="price-old">£32.00</span>
                                </div>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/product/800_1034/Image-4-1.jpg"
                                      alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Women's Faux-Trim Shirt</a></div>
                                <div className="product-price">
                                   <span className="price-now">£84.00</span>
                                </div>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/product/800_1034/Image-16-1.jpg"
                                      alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                                <div className="product-sticker-wrapper">
                                   <span className="product-sticker new">New</span>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Soft Touch Interlock Polo</a></div>
                                <div className="product-price">
                                   <span className="price-now">£45.00</span>
                                </div>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/product/product-img1.jpg"
                                      alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Ecomart Smart Watch</a></div>
                                <div className="product-price">
                                   <span className="price-now">£30.00</span>
                                   <span className="price-old">£38.00</span>
                                </div>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/sunglass/2.jpg" alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Ecomart Smart Glass</a></div>
                                <div className="product-price">
                                   <span className="price-now">£25.00</span>
                                   <span className="price-old">£39.00</span>
                                </div>
                                <ul className="product-color-nav">
                                   <li className="cl-black active">
                                      <img src="assets/img/sunglass/2.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-ash">
                                      <img src="assets/img/sunglass/5.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-brown">
                                      <img src="assets/img/sunglass/8.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-navy">
                                      <img src="assets/img/sunglass/11.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-wood">
                                      <img src="assets/img/sunglass/14.jpg" alt="img"/>
                                   </li>
                                </ul>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/shirt/2/1.jpg" alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Cotton Shirt fot Men</a></div>
                                <div className="product-price">
                                   <span className="price-now">£85.00</span>
                                   <span className="price-old">£99.00</span>
                                </div>
                                <ul className="product-color-nav">
                                   <li className="cl-brown active">
                                      <img src="assets/img/shirt/2/1.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-navy">
                                      <img src="assets/img/shirt/2/4.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-ash">
                                      <img src="assets/img/shirt/2/7.jpg" alt="img"/>
                                   </li>
                                </ul>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/product/800_1034/Image-5-1.jpg"
                                      alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Double-breasted Blazer</a></div>
                                <div className="product-price">
                                   <span className="price-now">£32.00</span>
                                </div>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/product/800_1034/Image-1-1.jpg"
                                      alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                                <div className="product-sticker-wrapper">
                                   <span className="product-sticker new">New</span>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Ribbed Cotton Bodysuits</a></div>
                                <div className="product-price">
                                   <span className="price-now">£71.00</span>
                                </div>
                                <ul className="product-color-nav">
                                   <li className="cl-ash active">
                                      <img src="assets/img/product/800_1034/Image-1-1.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-light-white">
                                      <img src="assets/img/product/800_1034/Image-1-2.jpg" alt="img"/>
                                   </li>
                                </ul>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/jacket/1/1.jpg" alt="img"/></a>
                                <div className="product-action"/>
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Men's Tricot Track Jacket</a></div>
                                <div className="product-price">
                                   <span className="price-now">£35.00</span>
                                </div>
                                <ul className="product-color-nav">
                                   <li className="cl-black active">
                                      <img src="assets/img/jacket/1/1.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-navy">
                                      <img src="assets/img/jacket/1/4.jpg" alt="img"/>
                                   </li>
                                </ul>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/product/800_1034/Image-6-1.jpg"
                                      alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                                <div className="product-sticker-wrapper">
                                   <span className="product-sticker new">New</span>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Wedding Diamond Ring</a></div>
                                <div className="product-price">
                                   <span className="price-now">£64.00</span>
                                </div>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/sunglass/1.jpg" alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Polarized Sunglasses</a></div>
                                <div className="product-price">
                                   <span className="price-now">£43.00</span>
                                </div>
                                <ul className="product-color-nav">
                                   <li className="cl-black active">
                                      <img src="assets/img/sunglass/1.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-ash">
                                      <img src="assets/img/sunglass/4.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-brown">
                                      <img src="assets/img/sunglass/7.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-navy">
                                      <img src="assets/img/sunglass/10.jpg" alt="img"/>
                                   </li>
                                </ul>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/product/800_1034/Image-8-1.jpg"
                                      alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                                <div className="product-sticker-wrapper">
                                   <span className="product-sticker discount"> -30%</span>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Baby Dress for Girl</a></div>
                                <div className="product-price">
                                   <span className="price-now">£35.00</span>
                                   <span className="price-old">£50.00</span>
                                </div>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/product/800_1034/Image-9-1.jpg"
                                      alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Fit Twill Shirt for Woman</a></div>
                                <div className="product-price">
                                   <span className="price-now">£34.00</span>
                                </div>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/product/800_1034/Image-10-1.jpg"
                                      alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                                <div className="product-sticker-wrapper">
                                   <span className="product-sticker new">New</span>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Skinny Cotton Pant</a></div>
                                <div className="product-price">
                                   <span className="price-now">£41.00</span>
                                </div>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/product/800_1034/Image-7-1.jpg"
                                      alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Denim Official Coat</a></div>
                                <div className="product-price">
                                   <span className="price-now">£35.00</span>
                                </div>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/product/800_1034/Image-11-1.jpg"
                                      alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                                <div className="product-sticker-wrapper">
                                   <span className="product-sticker discount"> -20%</span>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Tinted Sunglasses</a></div>
                                <div className="product-price">
                                   <span className="price-now">£48.00</span>
                                   <span className="price-old">£60.00</span>
                                </div>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/product/800_1034/Image-12-1.jpg"
                                      alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Men's classNameic Stretch Shirt</a>
                                </div>
                                <div className="product-price">
                                   <span className="price-now">£63.00</span>
                                </div>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/jacket/2/1.jpg" alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                                <div className="product-sticker-wrapper">
                                   <span className="product-sticker discount"> -20%</span>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Packable Quilted Puffer Jacket</a>
                                </div>
                                <div className="product-price">
                                   <span className="price-now">£28.00</span>
                                   <span className="price-old">£35.00</span>
                                </div>
                                <ul className="product-color-nav">
                                   <li className="cl-ash active">
                                      <img src="assets/img/jacket/2/1.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-navy">
                                      <img src="assets/img/jacket/2/2.jpg" alt="img"/>
                                   </li>
                                   <li className="cl-blue">
                                      <img src="assets/img/jacket/2/3.jpg" alt="img"/>
                                   </li>
                                </ul>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/product/800_1034/Image-13-1.jpg"
                                      alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Girls Metallic Coat</a></div>
                                <div className="product-price">
                                   <span className="price-now">£38.00</span>
                                </div>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/product/800_1034/Image-14-1.jpg"
                                      alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Varsi Leather Bag</a></div>
                                <div className="product-price">
                                   <span className="price-now">£85.00</span>
                                </div>
                             </div>
                          </div>
                          <div className="single-product">
                             <div className="product-image pos-rel">
                                <a href="shop-details.html" className=""><img src="assets/img/product/800_1034/Image-15-1.jpg"
                                      alt="img"/></a>
                                <div className="product-action">
                                   <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                   <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                   <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                </div>
                                <div className="product-action-bottom">
                                   <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                      Cart</a>
                                </div>
                             </div>
                             <div className="product-desc">
                                <div className="product-name"><a href="shop-details.html">Men's classNameic Fit Polo</a></div>
                                <div className="product-price">
                                   <span className="price-now">£26.00</span>
                                </div>
                             </div>
                          </div>
  
                       </div>
  
                    </div>
                 </div>
                 <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="sidebar-widget-wrapper mb-110 d-none d-lg-block">
                       <div className="product-filters mb-50">
                          <div className="filter-widget">
                             <h4 className="filter-widget-title drop-btn">Search</h4>
                             <div className="filter-widget-content">
                                <div className="filter-widget-search">
                                   <input type="text" placeholder="Search here.."/>
                                   <button type="submit"><i className="fal fa-search"></i></button>
                                </div>
  
                             </div>
                          </div>
                          <div className="filter-widget">
                             <h4 className="filter-widget-title drop-btn">Category</h4>
                             <div className="filter-widget-content">
                                <div className="category-items">
                                   <a href="shop.html" className="category-item">
                                      <div className="category-name">Shirts</div> <span className="category-items-number">8</span>
                                   </a>
                                   <a href="shop.html" className="category-item">
                                      <div className="category-name">Pants</div> <span className="category-items-number">12</span>
                                   </a>
                                   <a href="shop.html" className="category-item">
                                      <div className="category-name">Jackets</div> <span
                                         className="category-items-number">17</span>
                                   </a>
                                   <a href="shop.html" className="category-item">
                                      <div className="category-name">Leggings</div> <span
                                         className="category-items-number">6</span>
                                   </a>
                                   <a href="shop.html" className="category-item">
                                      <div className="category-name">Beachware</div> <span
                                         className="category-items-number">25</span>
                                   </a>
                                   <a href="shop.html" className="category-item">
                                      <div className="category-name">Underwear</div> <span
                                         className="category-items-number">17</span>
                                   </a>
                                   <a href="shop.html" className="category-item">
                                      <div className="category-name">Bag</div> <span className="category-items-number">15</span>
                                   </a>
                                   <a href="shop.html" className="category-item">
                                      <div className="category-name">Belt</div> <span className="category-items-number">9</span>
                                   </a>
                                </div>
                             </div>
                          </div>
                          <div className="filter-widget">
                             <h4 className="filter-widget-title drop-btn">Size</h4>
                             <div className="filter-widget-content">
                                <div className="category-sizes">
                                   <div className="category-size">
                                      <input className="check-box" type="checkbox" id="ex-s"/>
                                      <label className="check-label" for="ex-s">Extra Small</label>
                                   </div>
                                   <div className="category-size">
                                      <input className="check-box" type="checkbox" id="sm"/>
                                      <label className="check-label" for="sm">Small</label>
                                   </div>
                                   <div className="category-size">
                                      <input className="check-box" type="checkbox" id="md"/>
                                      <label className="check-label" for="md">Medium</label>
                                   </div>
                                   <div className="category-size">
                                      <input className="check-box" type="checkbox" id="large"/>
                                      <label className="check-label" for="large">Large</label>
                                   </div>
                                   <div className="category-size">
                                      <input className="check-box" type="checkbox" id="ex-l"/>
                                      <label className="check-label" for="ex-l">Extra Large</label>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div className="filter-widget">
                             <h4 className="filter-widget-title drop-btn">Rating</h4>
                             <div className="filter-widget-content">
                                <div className="category-ratings">
                                   <div className="category-rating">
                                      <input className="radio-box" type="radio" id="st-5" name="rating"/>
                                      <label className="radio-star" for="st-5">
                                         <i className="fas fa-star"></i>
                                         <i className="fas fa-star"></i>
                                         <i className="fas fa-star"></i>
                                         <i className="fas fa-star"></i>
                                         <i className="fas fa-star"></i>
                                      </label>
                                   </div>
                                   <div className="category-rating">
                                      <input className="radio-box" type="radio" id="st-4" name="rating"/>
                                      <label className="radio-star" for="st-4">
                                         <i className="fas fa-star"></i>
                                         <i className="fas fa-star"></i>
                                         <i className="fas fa-star"></i>
                                         <i className="fas fa-star"></i>
                                         <i className="fal fa-star"></i>
                                      </label>
                                   </div>
                                   <div className="category-rating">
                                      <input className="radio-box" type="radio" id="st-3" name="rating"/>
                                      <label className="radio-star" for="st-3">
                                         <i className="fas fa-star"></i>
                                         <i className="fas fa-star"></i>
                                         <i className="fas fa-star"></i>
                                         <i className="fal fa-star"></i>
                                         <i className="fal fa-star"></i>
                                      </label>
                                   </div>
                                   <div className="category-rating">
                                      <input className="radio-box" type="radio" id="st-2" name="rating"/>
                                      <label className="radio-star" for="st-2">
                                         <i className="fas fa-star"></i>
                                         <i className="fas fa-star"></i>
                                         <i className="fal fa-star"></i>
                                         <i className="fal fa-star"></i>
                                         <i className="fal fa-star"></i>
                                      </label>
                                   </div>
                                   <div className="category-rating">
                                      <input className="radio-box" type="radio" id="st-1" name="rating"/>
                                      <label className="radio-star" for="st-1">
                                         <i className="fas fa-star"></i>
                                         <i className="fal fa-star"></i>
                                         <i className="fal fa-star"></i>
                                         <i className="fal fa-star"></i>
                                         <i className="fal fa-star"></i>
                                      </label>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div className="filter-widget">
                             <h4 className="filter-widget-title drop-btn">Colour</h4>
                             <div className="filter-widget-content">
                                <div className="category-colours">
                                   <div className="category-color">
                                      <ul className="product-color-nav">
                                         <li className="cl-pink active">
                                            <img src="assets/img/product/product-img1.jpg" alt="img"/>
                                         </li>
                                         <li className="cl-black">
                                            <img src="assets/img/product/product-img2.jpg" alt="img"/>
                                         </li>
                                         <li className="cl-blue">
                                            <img src="assets/img/product/product-img3.jpg" alt="img"/>
                                         </li>
                                         <li className="cl-red">
                                            <img src="assets/img/product/product-img4.jpg" alt="img"/>
                                         </li>
                                      </ul>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div className="filter-widget">
                             <h4 className="filter-widget-title drop-btn">Brand</h4>
                             <div className="filter-widget-content">
                                <div className="category-brands">
                                   <div className="category-brand">
                                      <input className="check-box" type="checkbox" id="b-next"/>
                                      <label className="check-label" for="b-next">Next</label>
                                   </div>
                                   <div className="category-size">
                                      <input className="check-box" type="checkbox" id="b-ri"/>
                                      <label className="check-label" for="b-ri">River Island</label>
                                   </div>
                                   <div className="category-size">
                                      <input className="check-box" type="checkbox" id="b-geox"/>
                                      <label className="check-label" for="b-geox">Geox</label>
                                   </div>
                                   <div className="category-size">
                                      <input className="check-box" type="checkbox" id="b-eco"/>
                                      <label className="check-label" for="b-eco">Ecomart</label>
                                   </div>
                                   <div className="category-size">
                                      <input className="check-box" type="checkbox" id="b-abby"/>
                                      <label className="check-label" for="b-abby">Abby</label>
                                   </div>
                                   <div className="category-size">
                                      <input className="check-box" type="checkbox" id="b-nike"/>
                                      <label className="check-label" for="b-nike">Nike</label>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div className="filter-widget">
                             <h4 className="filter-widget-title drop-btn">Price</h4>
                             <div className="filter-widget-content">
                                <div className="filter-price">
                                   <div className="slider-range">
                                      <div className="slider-range-bar"></div>
                                      <p>
                                         <label for="amount">Price :</label>
                                         <input type="text" id="amount" className="amount" readonly/>
                                      </p>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div className="filter-widget">
                             <h4 className="filter-widget-title drop-btn">Tags</h4>
                             <div className="filter-widget-content">
                                <div className="category-tags">
                                   <a href="#" className="category-tag">Fashion</a>
                                   <a href="#" className="category-tag">Hats</a>
                                   <a href="#" className="category-tag">Sandal</a>
                                   <a href="#" className="category-tag">Bags</a>
                                   <a href="#" className="category-tag">Snacker</a>
                                   <a href="#" className="category-tag">Denim</a>
                                   <a href="#" className="category-tag">Sunglasses</a>
                                   <a href="#" className="category-tag">Beachwear</a>
                                   <a href="#" className="category-tag">Vagabond</a>
                                   <a href="#" className="category-tag">Trend</a>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        
        {/*<!-- shop main area end  -->*/}
  
  
  
  
  
  
  
     </main>
    );
}