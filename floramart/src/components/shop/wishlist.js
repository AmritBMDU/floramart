import React from "react";

export default function Wishlist(){
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
        {/*<!-- side toggle end -->
  
        <!-- page title area start  -->*/}
        <section className="page-title-area" data-background="assets/img/bg/page-title-bg.jpg">
           <div className="container">
              <div className="row">
                 <div className="col-lg-12">
                    <div className="page-title-wrapper text-center">
                       <h1 className="page-title mb-10">My Wishlist</h1>
                       <div className="breadcrumb-menu">
                          <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                             <ul className="trail-items">
                                <li className="trail-item trail-begin"><a href="index.html"><span>Home</span></a></li>
                                <li className="trail-item trail-end"><span>Wishlist</span></li>
                             </ul>
                          </nav>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
        {/*<!-- page title area end  -->
  
        <!-- cart area start  -->*/}
        <div className="cart-area pt-100 pb-100">
           <div className="container container-small">
              <div className="row">
                 <div className="col-12">
                    <form action="#">
                       <div className="table-content table-responsive">
                          <table className="table">
                             <thead>
                                <tr>
                                   <th className="product-thumbnail">Images</th>
                                   <th className="cart-product-name">Product</th>
                                   <th className="product-price">Unit Price</th>
                                   <th className="product-quantity">Add to cart</th>
                                   <th className="product-subtotal">Total</th>
                                   <th className="product-remove">Remove</th>
                                </tr>
                             </thead>
                             <tbody>
                                <tr>
                                   <td className="product-thumbnail"><a href="shop-details.html"><img
                                            src="assets/img/shirt/1/1.jpg" alt="img"/></a></td>
                                   <td className="product-name"><a href="shop-details.html">Women's Faux-Trim Shirt</a></td>
                                   <td className="product-price"><span className="amount">$20.00</span></td>
                                   <td className="product-quantity">
                                      <a href="cart.html" className="border-btn">Add to Cart</a>
                                   </td>
                                   <td className="product-subtotal"><span className="amount">$20.00</span></td>
                                   <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                </tr>
                                <tr>
                                   <td className="product-thumbnail"><a href="shop-details.html"><img
                                            src="assets/img/pant/1/1.jpg" alt="img"/></a></td>
                                   <td className="product-name"><a href="shop-details.html">Skinny Jeans Pant
                                      </a></td>
                                   <td className="product-price"><span className="amount">$24.00</span></td>
                                   <td className="product-quantity">
                                      <a href="cart.html" className="border-btn">Add to Cart</a>
                                   </td>
                                   <td className="product-subtotal"><span className="amount">$24.00</span></td>
                                   <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                </tr>
                             </tbody>
                          </table>
                       </div>
                    </form>
                 </div>
              </div>
           </div>
        </div>
        {/*<!-- cart area end  -->*/}
  
  
  
  
  
  
  
     </main>
    );
}