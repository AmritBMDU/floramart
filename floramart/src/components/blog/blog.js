import React from "react";

export default function Blog(){
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
                  <h1 class="page-title mb-10">Holiday Home Decoration I’ve
                        Recently Ordered</h1>
                     <div className="breadcrumb-menu">
                        <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                           <ul className="trail-items">
                           <li class="trail-item trail-begin"><a href="index.html"><span>Home</span></a></li>
                              <li class="trail-item trail-end"><span>Holiday Home Decoration I’ve
                                    Recently Ordered</span></li>
                           </ul>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/*<!-- page title area end  -->

      <!-- blog area start  -->*/}
      <div className="blog-area pt-120 pb-90">
         <div className="container container-small">
            <div className="row">

               <div className="col-xl-8 col-lg-12">
                  <div className="blog-main-wrapper mb-30">
                     <div className="row">
                        <div className="col-xl-12 col-lg-6 col-md-12">
                           <div className="blog-wrapper position-relative mb-30">
                              <div className="blog-thumb ">
                                 <a href="blog-details.html"><img src="assets/img/blog/b-3.jpg" alt="blog-img"/></a>
                              </div>
                              <div className="blog-content-wrapper">
                                 <div className="blog-meta">
                                    <div className="blog-date">
                                       <i className="flaticon-calendar"></i>
                                       <span>20 Jan 2022</span>
                                    </div>
                                    <div className="blog-user">
                                       <i className="flaticon-avatar"></i>
                                       <span>Mark Hanry</span>
                                    </div>
                                 </div>
                                 <div className="blog-content">
                                    <a href="blog-details.html">
                                       <h3>Holiday Home Decoration I’ve
                                          Recently Ordered</h3>
                                    </a>
                                    <p>Entrepreneurs and go-getters often feel as if they carry the weight of an entire
                                       organization on their
                                       backs, and therefore could always use a little extra motivation. Everyone must
                                       work, but for many of us that job isn’t just a paycheck, it’s an opportunity to
                                       express ourselves and make ... </p>
                                    <a className="blog-btn" href="blog-details.html">Read more</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-12 col-lg-6 col-md-12">
                           <div className="blog-wrapper position-relative mb-30">
                              <div className="blog-thumb ">
                                 <a href="blog-details.html"><img src="assets/img/blog/b-1.jpg" alt="blog-img"/></a>
                              </div>
                              <div className="blog-content-wrapper">
                                 <div className="blog-meta">
                                    <div className="blog-date">
                                       <i className="flaticon-calendar"></i>
                                       <span>23 Jan 2022</span>
                                    </div>
                                    <div className="blog-user">
                                       <i className="flaticon-avatar"></i>
                                       <span>Brian Hoff</span>
                                    </div>
                                 </div>
                                 <div className="blog-content">
                                    <a href="blog-details.html">
                                       <h3>Worthy Cyber Monday Fashion
                                          From Ecomart</h3>
                                    </a>
                                    <p>There are so many websites out there that have not considered the overall
                                       usability of their visually impaired users.
                                       When it comes to designing better links and sending better emails, Slava
                                       Shestopalov has a few tips on how to improve
                                       your website’s experience while accessibility in mind. The participants ...</p>
                                    <a className="blog-btn" href="blog-details.html">Read more</a>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="col-xl-12 col-lg-6 col-md-12">
                           <div className="blog-wrapper position-relative mb-30">
                              <div className="blog-thumb ">
                                 <a href="blog-details.html"><img src="assets/img/blog/b-2.jpg" alt="blog-img"/></a>
                              </div>
                              <div className="blog-content-wrapper">
                                 <div className="blog-meta">
                                    <div className="blog-date">
                                       <i className="flaticon-calendar"></i>
                                       <span>18 Jan 2022</span>
                                    </div>
                                    <div className="blog-user">
                                       <i className="flaticon-avatar"></i>
                                       <span>Ecomart</span>
                                    </div>
                                 </div>
                                 <div className="blog-content">
                                    <a href="blog-details.html">
                                       <h3>Unique Ideas for Fashion You
                                          Haven’t heard yet</h3>
                                    </a>
                                    <p>There are so many websites out there that have not considered the overall
                                       usability of their visually impaired users.
                                       When it comes to designing better links and sending better emails, Slava
                                       Shestopalov has a few tips on how to improve
                                       your website’s experience while accessibility in mind. The participants ...</p>
                                    <a className="blog-btn" href="blog-details.html">Read more</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="common-pagination mt-30 mb-20">
                        <ul>
                           <li><a href="#"><i className="fal fa-angle-left"></i></a></li>
                           <li className="active"><a href="#"><span>01</span></a></li>
                           <li><a href="#"><span>02</span></a></li>
                           <li><a href="#"><i className="fal fa-angle-right"></i></a></li>
                        </ul>
                     </div>
                  </div>

               </div>
               <div className="col-xl-4 col-lg-8 col-md-8">
                  <div className="sidebar-widget-wrapper">
                     <div className="sidebar__search p-relative mb-30">
                        <form action="#">
                           <input type="text" placeholder="Search for blogs..."/>
                           <button type="submit">
                              {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 584.4 584.4"
                                 style="enable-background:new 0 0 584.4 584.4;" xml:space="preserve"> */}
                                 <g>
                                    <g>
                                       <path className="st0"
                                          d="M565.7,474.9l-61.1-61.1c-3.8-3.8-8.8-5.9-13.9-5.9c-6.3,0-12.1,3-15.9,8.3c-16.3,22.4-36,42.1-58.4,58.4    c-4.8,3.5-7.8,8.8-8.3,14.5c-0.4,5.6,1.7,11.3,5.8,15.4l61.1,61.1c12.1,12.1,28.2,18.8,45.4,18.8c17.1,0,33.3-6.7,45.4-18.8    C590.7,540.6,590.7,499.9,565.7,474.9z">
                                       </path>
                                       <path className="st1"
                                          d="M254.6,509.1c140.4,0,254.5-114.2,254.5-254.5C509.1,114.2,394.9,0,254.6,0C114.2,0,0,114.2,0,254.5    C0,394.9,114.2,509.1,254.6,509.1z M254.6,76.4c98.2,0,178.1,79.9,178.1,178.1s-79.9,178.1-178.1,178.1S76.4,352.8,76.4,254.5    S156.3,76.4,254.6,76.4z">
                                       </path>
                                    </g>
                                 </g>
                              {/* </svg> */}
                           </button>
                        </form>
                     </div>
                     <div className="sidebar__widget mb-30">
                        <div className="sidebar__widget-head mb-35">
                           <h4 className="sidebar__widget-title">Recent posts</h4>
                        </div>
                        <div className="sidebar__widget-content">
                           <div className="rc__post-wrapper">
                              <div className="rc__post d-flex align-items-center">
                                 <div className="rc__thumb mr-20">
                                    <a href="blog-details.html"><img src="assets/img/blog/b-3.jpg" alt="img"/></a>
                                 </div>
                                 <div className="rc__content">
                                    <div className="rc__meta">
                                       <span>October 15, 2021</span>
                                    </div>
                                    <h6 className="rc__title"><a href="blog-details.html">The Importance Intrinsic
                                          Motivation.</a></h6>
                                 </div>
                              </div>
                              <div className="rc__post d-flex align-items-center">
                                 <div className="rc__thumb mr-20">
                                    <a href="blog-details.html"><img src="assets/img/blog/b-1.jpg" alt="img"/></a>
                                 </div>
                                 <div className="rc__content">
                                    <div className="rc__meta">
                                       <span>March 26, 2021</span>
                                    </div>
                                    <h6 className="rc__title"><a href="blog-details.html">A Better Alternative To Grading
                                          Student.</a></h6>
                                 </div>
                              </div>
                              <div className="rc__post d-flex align-items-center">
                                 <div className="rc__thumb mr-20">
                                    <a href="blog-details.html"><img src="assets/img/blog/b-2.jpg" alt="img"/></a>
                                 </div>
                                 <div className="rc__content">
                                    <div className="rc__meta">
                                       <span>October 15, 2021</span>
                                    </div>
                                    <h6 className="rc__title"><a href="blog-details.html">Strategic Social Media &amp;
                                          Evolution of Visual</a>
                                    </h6>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="sidebar__widget mb-30">
                        <div className="sidebar__widget-head mb-35">
                           <h4 className="sidebar__widget-title">Category</h4>
                        </div>
                        <div className="sidebar__widget-content">
                           <div className="sidebar__category">
                              <ul>
                                 <li><a href="blog.html">Shirts(2)</a></li>
                                 <li><a href="blog.html">Jackets (4)</a></li>
                                 <li><a href="blog.html">Beachware (8)</a></li>
                                 <li><a href="blog.html">Underwear (5)</a></li>
                                 <li><a href="blog.html">Bag (3)</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="sidebar__widget mb-30">
                        <div className="sidebar__widget-head mb-35">
                           <h4 className="sidebar__widget-title">Tags</h4>
                        </div>
                        <div className="sidebar__widget-content">
                           <div className="sidebar__tag">
                              <a href="#">Fashion</a>
                              <a href="#">Hats</a>
                              <a href="#">Bags</a>
                              <a href="#">Snacker</a>
                              <a href="#">Denim</a>
                              <a href="#">Sunglasses</a>
                              <a href="#">Vagabond</a>
                              <a href="#">Tips</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/*<!-- blog area end  -->*/}







   </main>
    );
}