import React from "react";

export default function Checkout(){
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
                     <h1 className="page-title mb-10">Checkout</h1>
                     <div className="breadcrumb-menu">
                        <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                           <ul className="trail-items">
                              <li className="trail-item trail-begin"><a href="index.html"><span>Home</span></a></li>
                              <li className="trail-item trail-end"><span>Checkout</span></li>
                           </ul>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/*<!-- page title area end  -->

      <!-- coupon-area start -->*/}
      <section className="coupon-area pt-100 pb-30">
         <div className="container container-small">
            <div className="row">
               <div className="col-md-6">
                  <div className="coupon-accordion">
                     {/*<!-- ACCORDION START -->*/}
                     <h3>Returning customer? <span id="showlogin">Click here to login</span></h3>
                     <div id="checkout-login" className="coupon-content">
                        <div className="coupon-info">
                           <p className="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras
                              sed est
                              sit amet ipsum luctus.</p>
                           <form action="#">
                              <p className="form-row-first">
                                 <label>Username or email <span className="required">*</span></label>
                                 <input type="text" />
                              </p>
                              <p className="form-row-last">
                                 <label>Password <span className="required">*</span></label>
                                 <input type="text" />
                              </p>
                              <p className="form-row">
                                 <button className="fill-btn" type="submit">Login</button>
                                 <label>
                                    <input type="checkbox" />
                                    Remember me
                                 </label>
                              </p>
                              <p className="lost-password">
                                 <a href="#">Lost your password?</a>
                              </p>
                           </form>
                        </div>
                     </div>
                     {/*<!-- ACCORDION END -->*/}
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="coupon-accordion">
                     {/*<!-- ACCORDION START -->*/}
                     <h3>Have a coupon? <span id="showcoupon">Click here to enter your code</span></h3>
                     <div id="checkout_coupon" className="coupon-checkout-content">
                        <div className="coupon-info">
                           <form action="#">
                              <p className="checkout-coupon">
                                 <input type="text" placeholder="Coupon Code" />
                                 <button className="fill-btn" type="submit">Apply Coupon</button>
                              </p>
                           </form>
                        </div>
                     </div>
                     {/*<!-- ACCORDION END -->*/}
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/*<!-- coupon-area end -->

      <!-- checkout-area start -->*/}
      <section className="checkout-area pb-70">
         <div className="container container-small">
            <form action="#">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="checkbox-form">
                        <h3>Billing Details</h3>
                        <div className="row">
                           <div className="col-md-12">
                              <div className="country-select">
                                 <label>Country <span className="required">*</span></label>
                                 <select>
                                    <option value="volvo">bangladesh</option>
                                    <option value="saab">Algeria</option>
                                    <option value="mercedes">Afghanistan</option>
                                    <option value="audi">Ghana</option>
                                    <option value="audi2">Albania</option>
                                    <option value="audi3">Bahrain</option>
                                    <option value="audi4">Colombia</option>
                                    <option value="audi5">Dominican Republic</option>
                                 </select>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="checkout-form-list">
                                 <label>First Name <span className="required">*</span></label>
                                 <input type="text" placeholder="" />
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="checkout-form-list">
                                 <label>Last Name <span className="required">*</span></label>
                                 <input type="text" placeholder="" />
                              </div>
                           </div>
                           <div className="col-md-12">
                              <div className="checkout-form-list">
                                 <label>Company Name</label>
                                 <input type="text" placeholder="" />
                              </div>
                           </div>
                           <div className="col-md-12">
                              <div className="checkout-form-list">
                                 <label>Address <span className="required">*</span></label>
                                 <input type="text" placeholder="Street address" />
                              </div>
                           </div>
                           <div className="col-md-12">
                              <div className="checkout-form-list">
                                 <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                              </div>
                           </div>
                           <div className="col-md-12">
                              <div className="checkout-form-list">
                                 <label>Town / City <span className="required">*</span></label>
                                 <input type="text" placeholder="Town / City" />
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="checkout-form-list">
                                 <label>State / County <span className="required">*</span></label>
                                 <input type="text" placeholder="" />
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="checkout-form-list">
                                 <label>Postcode / Zip <span className="required">*</span></label>
                                 <input type="text" placeholder="Postcode / Zip" />
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="checkout-form-list">
                                 <label>Email Address <span className="required">*</span></label>
                                 <input type="email" placeholder="" />
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="checkout-form-list">
                                 <label>Phone <span className="required">*</span></label>
                                 <input type="text" placeholder="Postcode / Zip" />
                              </div>
                           </div>
                           <div className="col-md-12">
                              <div className="checkout-form-list create-acc">
                                 <input id="cbox" type="checkbox" />
                                 <label>Create an account?</label>
                              </div>
                              <div id="cbox_info" className="checkout-form-list create-account">
                                 <p>Create an account by entering the information below. If you are a
                                    returning
                                    customer please login at the top of the page.</p>
                                 <label>Account password <span className="required">*</span></label>
                                 <input type="password" placeholder="password" />
                              </div>
                           </div>
                        </div>
                        <div className="different-address">
                           <div className="ship-different-title">
                              <label>Ship to a different address?</label>
                              <input id="ship-box" type="checkbox" />
                           </div>
                           <div id="ship-box-info">
                              <div className="row">
                                 <div className="col-md-12">
                                    <div className="country-select">
                                       <label>Country <span className="required">*</span></label>
                                       <select>
                                          <option value="volvo">bangladesh</option>
                                          <option value="saab">Algeria</option>
                                          <option value="mercedes">Afghanistan</option>
                                          <option value="audi">Ghana</option>
                                          <option value="audi2">Albania</option>
                                          <option value="audi3">Bahrain</option>
                                          <option value="audi4">Colombia</option>
                                          <option value="audi5">Dominican Republic</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="checkout-form-list">
                                       <label>First Name <span className="required">*</span></label>
                                       <input type="text" placeholder="" />
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="checkout-form-list">
                                       <label>Last Name <span className="required">*</span></label>
                                       <input type="text" placeholder="" />
                                    </div>
                                 </div>
                                 <div className="col-md-12">
                                    <div className="checkout-form-list">
                                       <label>Company Name</label>
                                       <input type="text" placeholder="" />
                                    </div>
                                 </div>
                                 <div className="col-md-12">
                                    <div className="checkout-form-list">
                                       <label>Address <span className="required">*</span></label>
                                       <input type="text" placeholder="Street address" />
                                    </div>
                                 </div>
                                 <div className="col-md-12">
                                    <div className="checkout-form-list">
                                       <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                    </div>
                                 </div>
                                 <div className="col-md-12">
                                    <div className="checkout-form-list">
                                       <label>Town / City <span className="required">*</span></label>
                                       <input type="text" placeholder="Town / City" />
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="checkout-form-list">
                                       <label>State / County <span className="required">*</span></label>
                                       <input type="text" placeholder="" />
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="checkout-form-list">
                                       <label>Postcode / Zip <span className="required">*</span></label>
                                       <input type="text" placeholder="Postcode / Zip" />
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="checkout-form-list">
                                       <label>Email Address <span className="required">*</span></label>
                                       <input type="email" placeholder="" />
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="checkout-form-list">
                                       <label>Phone <span className="required">*</span></label>
                                       <input type="text" placeholder="Postcode / Zip" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="order-notes">
                              <div className="checkout-form-list">
                                 <label>Order Notes</label>
                                 <textarea id="checkout-mess" cols="30" rows="10"
                                    placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="your-order mb-30 ">
                        <h3>Your order</h3>
                        <div className="your-order-table table-responsive">
                           <table>
                              <thead>
                                 <tr>
                                    <th className="product-name">Product</th>
                                    <th className="product-total">Total</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr className="cart_item">
                                    <td className="product-name">
                                       Felted Shirt for Man <strong className="product-quantity"> × 1</strong>
                                    </td>
                                    <td className="product-total">
                                       <span className="amount">$24.00</span>
                                    </td>
                                 </tr>
                                 <tr className="cart_item">
                                    <td className="product-name">
                                       Denim Jeans Pant <strong className="product-quantity"> ×
                                          1</strong>
                                    </td>
                                    <td className="product-total">
                                       <span className="amount">$12.00</span>
                                    </td>
                                 </tr>
                                 <tr className="cart_item">
                                    <td className="product-name">
                                       Denim Official Jacket <strong className="product-quantity"> ×
                                          1</strong>
                                    </td>
                                    <td className="product-total">
                                       <span className="amount">$42.00</span>
                                    </td>
                                 </tr>
                              </tbody>
                              <tfoot>
                                 <tr className="cart-subtotal">
                                    <th>Cart Subtotal</th>
                                    <td><span className="amount">$78.00</span></td>
                                 </tr>
                                 <tr className="shipping">
                                    <th>Shipping</th>
                                    <td>
                                       <ul>
                                          <li>
                                             <input type="radio" />
                                             <label>
                                                Flat Rate: <span className="amount">$7.00</span>
                                             </label>
                                          </li>
                                          <li>
                                             <input type="radio" />
                                             <label>Free Shipping:</label>
                                          </li>
                                          <li></li>
                                       </ul>
                                    </td>
                                 </tr>
                                 <tr className="order-total">
                                    <th>Order Total</th>
                                    <td><strong><span className="amount">$85.00</span></strong>
                                    </td>
                                 </tr>
                              </tfoot>
                           </table>
                        </div>

                        <div className="payment-method">
                           <div className="accordion" id="checkoutAccordion">
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="checkoutOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#bankOne" aria-expanded="true" aria-controls="bankOne">
                                       Direct Bank Transfer
                                    </button>
                                 </h2>
                                 <div id="bankOne" className="accordion-collapse collapse show"
                                    aria-labelledby="checkoutOne" data-bs-parent="#checkoutAccordion">
                                    <div className="accordion-body">
                                       Make your payment directly into our bank account. Please use your
                                       Order ID
                                       as the payment reference. Your order won’t be shipped until the
                                       funds have
                                       cleared in our account.
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="paymentTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#payment" aria-expanded="false" aria-controls="payment">
                                       Cheque Payment
                                    </button>
                                 </h2>
                                 <div id="payment" className="accordion-collapse collapse" aria-labelledby="paymentTwo"
                                    data-bs-parent="#checkoutAccordion">
                                    <div className="accordion-body">
                                       Please send your cheque to Store Name, Store Street, Store Town,
                                       Store
                                       State / County, Store
                                       Postcode.
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="paypalThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#paypal" aria-expanded="false" aria-controls="paypal">
                                       PayPal
                                    </button>
                                 </h2>
                                 <div id="paypal" className="accordion-collapse collapse" aria-labelledby="paypalThree"
                                    data-bs-parent="#checkoutAccordion">
                                    <div className="accordion-body">
                                       Pay via PayPal; you can pay with your credit card if you don’t have
                                       a
                                       PayPal account.
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="order-button-payment mt-20">
                              <button type="submit" className="fill-btn">Place order</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </section>
      {/*<!-- checkout-area end -->*/}







   </main>
    );
}