import React from "react";

export default function ShopDetails(){
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
                     <h1 className="page-title mb-10">Shop</h1>
                     <div className="breadcrumb-menu">
                        <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                           <ul className="trail-items">
                              <li className="trail-item trail-begin"><a href="index.html"><span>Home</span></a></li>
                              <li className="trail-item trail-end"><span>Felted Shirt for Man</span></li>
                           </ul>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/*<!-- page title area end  -->

      <!-- shop details area start  -->*/}
      <section className="shop-details-area pt-120 pb-90">
         <div className="container container-small">
            <div className="row">
               <div className="col-lg-6">
                  <div className="product-details-tab-wrapper mb-30">
                     <div className="product-details-tab">
                        <div className="tab-content" id="productDetailsTab">
                           <div className="tab-pane fade active show" id="pro-1" role="tabpanel"
                              aria-labelledby="pro-1-tab">
                              <img className="active" src="assets/img/shirt/3/1.jpg" alt="..."/>
                           </div>
                           <div className="tab-pane fade" id="pro-2" role="tabpanel" aria-labelledby="pro-2-tab">
                              <img className="active" src="assets/img/shirt/3/5.jpg" alt="..."/>
                           </div>
                           <div className="tab-pane fade" id="pro-3" role="tabpanel" aria-labelledby="pro-3-tab">
                              <img className="active" src="assets/img/shirt/3/9.jpg" alt="..."/>
                           </div>
                        </div>
                     </div>
                     <div className="product-details-nav">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                           <li className="nav-item" role="presentation">
                              <button className="nav-link active" id="pro-1-tab" data-bs-toggle="tab"
                                 data-bs-target="#pro-1" type="button" role="tab" aria-controls="pro-1"
                                 aria-selected="false">
                                 <img src="assets/img/shirt/3/1.jpg" alt="..."/>
                              </button>
                           </li>
                           <li className="nav-item" role="presentation">
                              <button className="nav-link" id="pro-2-tab" data-bs-toggle="tab" data-bs-target="#pro-2"
                                 type="button" role="tab" aria-controls="pro-2" aria-selected="true">
                                 <img src="assets/img/shirt/3/5.jpg" alt="..."/>
                              </button>
                           </li>
                           <li className="nav-item" role="presentation">
                              <button className="nav-link" id="pro-3-tab" data-bs-toggle="tab" data-bs-target="#pro-3"
                                 type="button" role="tab" aria-controls="pro-3" aria-selected="false">
                                 <img src="assets/img/shirt/3/9.jpg" alt="..."/>
                              </button>
                           </li>
                        </ul>
                     </div>
                  </div>

               </div>
               <div className="col-lg-6">
                  <div className="product-side-info mb-30">
                     <h4 className="product-name mb-10">Felted Shirt for Man</h4>
                     <span className="product-price">$24.00</span>

                     <p className="mb-30">Matent maecenas nec massa viverra aci ute litora aliquam habitant proin commodo
                        bibendum rutru
                        habitant est magnis
                        quisque aliquet congue vesti bulum suscipi erose tellus odio elite purus feugiat prim libero
                        senes nisie gravia</p>
                     <div className="available-sizes">
                        <span>Available Sizes : </span>
                        <div className="product-available-sizes">
                           <span>SM</span>
                           <span>L</span>
                           <span>Xl</span>
                           <span>XXl</span>
                        </div>
                     </div>
                     <div className="product-quantity-cart mb-25">
                        <div className="product-quantity-form">
                           <form action="#">
                              <button className="cart-minus"><i className="far fa-minus"></i></button>
                              <input className="cart-input" type="text" value="1"/>
                              <button className="cart-plus"><i className="far fa-plus"></i></button>
                           </form>
                        </div>
                        <a href="cart.html" className="fill-btn">Add to Cart</a>
                     </div>
                     <a href="wishlist.html" className="border-btn">Add to Wishlist</a>
                     <div className="product__details__tag tagcloud mt-25 mb-10"><span>Tags : </span>
                        <a href="#" rel="tag">Shirt</a>
                        <a href="#" rel="tag">Cotton</a>
                        <a href="#" rel="tag">Smart</a>
                        <a href="#" rel="tag">Fashion</a>
                     </div>
                  </div>
               </div>
            </div>

            <div className="product_info-faq-area pb-0">
               <div className="">
                  <nav className="product-details-nav">
                     <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link show" id="nav-general-tab" data-bs-toggle="tab" href="#nav-general"
                           role="tab" aria-selected="false">Description</a>
                        <a className="nav-item nav-link active" id="nav-seller-tab" data-bs-toggle="tab" href="#nav-seller"
                           role="tab" aria-selected="true">Reviews</a>
                     </div>
                  </nav>
                  <div className="tab-content product-details-content" id="nav-tabContent">
                     <div className="tab-pane fade" id="nav-general" role="tabpanel">
                        <div className="tabs-wrapper mt-35">
                           <div className="product__details-des">
                              <p>Very clean and organized with easy to follow tutorials, Exercises, and solutions. This
                                 course
                                 does start from the
                                 beginning with very little knowledge and gives a great overview of common tools used
                                 for data
                                 science and progresses
                                 into more complex concepts and ideas. This course is amazing..! I started this course
                                 as a
                                 beginner and learnt a lot. Instructors
                                 are great. Query handling
                                 can be improved.Overall very happy with the course.</p>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade active show" id="nav-seller" role="tabpanel">
                        <div className="tabs-wrapper mt-35">
                           <div className="course-review-item mb-30">
                              <div className="course-reviews-img">
                                 <a href="#"><img src="assets/img/testimonial/course-reviews-1.png"
                                       alt="image not found"/></a>
                              </div>
                              <div className="course-review-list">
                                 <h5><a href="#">Sotapdi Kunda</a></h5>
                                 <div className="course-start-icon">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span>55 min ago</span>
                                 </div>
                                 <p>Very clean and organized with easy to follow tutorials, Exercises, and
                                    solutions.
                                    This course does start from the beginning with very little knowledge and
                                    gives a
                                    great overview of common tools used for data science and progresses into
                                    more
                                    complex concepts and ideas.</p>
                              </div>
                           </div>
                           <div className="course-review-item mb-30">
                              <div className="course-reviews-img">
                                 <a href="#"><img src="assets/img/testimonial/course-reviews-2.png"
                                       alt="image not found"/></a>
                              </div>
                              <div className="course-review-list">
                                 <h5><a href="#">Samantha</a></h5>
                                 <div className="course-start-icon">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span>45 min ago</span>
                                 </div>
                                 <p>The course is good at explaining very basic intuition of the concepts. It
                                    will get
                                    you scratching the surface so to say. where this course is unique is the
                                    implementation methods are so well defined Thank you to the team !.</p>
                              </div>
                           </div>
                           <div className="course-review-item mb-30">
                              <div className="course-reviews-img">
                                 <a href="#"><img src="assets/img/testimonial/course-reviews-3.png"
                                       alt="image not found"/></a>
                              </div>
                              <div className="course-review-list">
                                 <h5><a href="#">Michell Mariya</a></h5>
                                 <div className="course-start-icon">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span>30 min ago</span>
                                 </div>
                                 <p>This course is amazing..!
                                    I started this course as a beginner and learnt a lot. Instructors are great.
                                    Query
                                    handling can be improved.Overall very happy with the course.</p>
                              </div>
                           </div>
                           <div className="product__details-comment ">
                              <div className="comment-title mb-20">
                                 <h3>Add a review</h3>
                                 <p>Your email address will not be published. Required fields are marked *</p>
                              </div>
                              <div className="comment-rating mb-20">
                                 <span>Overall ratings</span>
                                 <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fal fa-star"></i></a></li>
                                 </ul>
                              </div>
                              <div className="comment-input-box mb-20">
                                 <form action="#">
                                    <div className="row">
                                       <div className="col-xxl-12">
                                          <textarea placeholder="Your review"
                                             className="comment-input comment-textarea mb-20"></textarea>
                                       </div>
                                       <div className="col-xxl-6">
                                          <div className="comment-input mb-20">
                                             <input type="text" placeholder="Your Name"/>
                                          </div>
                                       </div>
                                       <div className="col-xxl-6">
                                          <div className="comment-input mb-20">
                                             <input type="email" placeholder="Your Email"/>
                                          </div>
                                       </div>
                                       <div className="col-xxl-12">
                                          <div className="comment-submit">
                                             <button type="submit" className="fill-btn">Submit</button>
                                          </div>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/*<!-- shop details area end  -->*/}

      <div className="related_product pb-70">
         <div className="container container-small">
            <div className="section-title mb-55">
               <h2>Related Product</h2>
            </div>
            {/*<!-- Slider main container -->*/}
            <div className="swiper-container r-product-active">
               {/*<!-- Additional required wrapper -->*/}
               <div className="swiper-wrapper">
                  <div className="swiper-slide">
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
                  </div>
                  <div className="swiper-slide">
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
                  </div>
                  <div className="swiper-slide">
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
                  </div>
                  <div className="swiper-slide">
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
                  </div>
                  <div className="swiper-slide">
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
                  </div>
               </div>
               {/*<!-- If we need pagination -->*/}
               <div className="testimonial-pagination text-center"></div>
               <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>
         </div>
      </div>







   </main>
    );
}