import React from "react";

export default function Signin(){
   return (
    <main>


      {/* <!-- side toggle start --> */}
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
      {/* <!-- side toggle end -->

      <!-- page title area start  --> */}
      <section className="page-title-area" data-background="assets/img/bg/page-title-bg.jpg">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="page-title-wrapper text-center">
                     <h1 className="page-title mb-10">Login</h1>
                     <div className="breadcrumb-menu">
                        <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                           <ul className="trail-items">
                              <li className="trail-item trail-begin"><a href="index.html"><span>Home</span></a></li>
                              <li className="trail-item trail-end"><span>Login</span></li>
                           </ul>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* <!-- page title area end  -->

      <!-- register area start  --> */}
      <div className="register-area pt-120 pb-120">
         <div className="container container-small">
            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <div className="signup-form-wrapper">
                     <div className="signup-wrapper">
                        <input type="text" placeholder="Email or Username"/>
                     </div>
                     <div className="signup-wrapper">
                        <input type="text" placeholder="Password"/>
                     </div>
                     <div className="signup-action">
                        <div className="course-sidebar-list">
                           <input className="signup-checkbo" type="checkbox" id="sing-in"/>
                           <label className="sign-check" for="sing-in"><span>Remember me</span></label>
                        </div>
                     </div>
                     <div className="sing-buttom mb-20">
                        <button className="sing-btn">Register now</button>
                     </div>
                     <div className="registered wrapper">
                        <div className="not-register">
                           <span>Not registered?</span><span><a href="#">Sign up</a></span>
                        </div>
                        <div className="forget-password">
                           <a href="#">Forgot password?</a>
                        </div>
                     </div>
                     <div className="sign-social text-center">
                        <span>Or Sign- in with</span>
                     </div>
                     <div className="sign-social-icon">
                        <div className="sign-facebook">
                           <svg xmlns="http://www.w3.org/2000/svg" width="9.034" height="18.531"
                              viewBox="0 0 9.034 18.531">
                              <path id="Path_212" data-name="Path 212"
                                 d="M183.106,757.2v-1.622c0-.811.116-1.274,1.39-1.274h1.621v-3.127h-2.664c-3.243,0-4.285,1.506-4.285,4.169v1.969h-2.085v3.127h1.969v9.265h4.054v-9.265h2.664l.347-3.243Z"
                                 transform="translate(-177.083 -751.176)" fill="#2467ec"></path>
                           </svg>
                           <a href="#">Facebook</a>
                        </div>
                        <div className="sign-gmail">
                           <svg xmlns="http://www.w3.org/2000/svg" width="21.692" height="16.273"
                              viewBox="0 0 21.692 16.273">
                              <g id="gmail" transform="translate(0 -63.953)">
                                 <path id="Path_8685" data-name="Path 8685"
                                    d="M1.479,169.418H4.93v-8.381l-2.26-3.946L0,157.339v10.6a1.479,1.479,0,0,0,1.479,1.479Z"
                                    transform="translate(0 -89.192)" fill="#0085f7"></path>
                                 <path id="Path_8686" data-name="Path 8686"
                                    d="M395.636,169.418h3.451a1.479,1.479,0,0,0,1.479-1.479v-10.6l-2.666-.248-2.264,3.946v8.381Z"
                                    transform="translate(-378.874 -89.192)" fill="#00a94b"></path>
                                 <path id="Path_8687" data-name="Path 8687"
                                    d="M349.816,65.436,347.789,69.3l2.027,2.541,4.93-3.7V66.176A2.219,2.219,0,0,0,351.2,64.4Z"
                                    transform="translate(-333.054)" fill="#ffbc00"></path>
                                 <path id="Path_8688" data-name="Path 8688"
                                    d="M72.7,105.365l-1.932-4.08L72.7,98.956l5.916,4.437,5.916-4.437v6.409L78.619,109.8Z"
                                    transform="translate(-67.773 -33.52)" fill="#ff4131" fill-rule="evenodd"></path>
                                 <path id="Path_8689" data-name="Path 8689"
                                    d="M0,66.176v1.972l4.93,3.7V65.436L3.55,64.4A2.219,2.219,0,0,0,0,66.176Z"
                                    transform="translate(0)" fill="#e51c19"></path>
                              </g>
                           </svg>
                           <a href="#">Google</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- register area end  --> */}







   </main>
   );
}