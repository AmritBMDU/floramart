import React from "react";

export default function About() {
    return (
        
        
     
        <main>
     
     
           
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
                          <h1 className="page-title mb-10">About</h1>
                          <div className="breadcrumb-menu">
                             <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                                <ul className="trail-items">
                                   <li className="trail-item trail-begin"><a href="index.html"><span>Home</span></a></li>
                                   <li className="trail-item trail-end"><span>About</span></li>
                                </ul>
                             </nav>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </section>
           {/*<!-- page title area end  -->
     
    <!-- about-heading area start  -->*/}
           <div className="about-heading">
              <div className="container container-small">
                 <div className="row">
                    <div className="col-lg-12">
                       <div className="about-heading-content">
                          <h2 className="heading-title">"Uncountable and unrivalled world's largest online and offline fashion
                             house since 1990"</h2>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           {/*<!-- about-heading area end  -->
     
    <!-- about-area start  -->*/}
           <section className="about-area pb-90">
              <div className="container container-small">
                 <div className="row align-items-center">
                    <div className="col-lg-6">
                       <div className="about-thumb pos-rel mb-30">
                          <img className="about-thumb-main" src="assets/img/about/about-thumb.jpg" alt="img"/>
                          <img className="est-time-img" src="assets/img/about/1990.png" alt="img"/>
                       </div>
                    </div>
                    <div className="col-lg-6">
                       <div className="about-content mb-30 align-pb-35">
                          <div className="section-title">
                             <h2 className="section-main-title mb-30">The fashion everything that
                                you want in your life.</h2>
                          </div>
                          <p className="mb-40">We get it. Getting dressed can be hard and we’re here to help with that. Whether
                             you’re more of
                             a casual girl I feel
                             you, give me joggers all day every day or are looking to spice things up for your next date
                             night, you’ve come to the
                             right place. Dig through our piles of posts. Booties, booties, booties rockin’ everywhere! When
                             it comes to Fall and
                             Winter fashion, boots are my weakness. As part of our growth, Roman has launched a new range of
                             shoes and handbags.</p>
                          <div className="about-btn">
                             <a href="shop.html" className="fill-btn">Explore Products</a>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
     
           </section>
           {/*<!-- about-area end  -->
     
    <!-- features area start  -->*/}
           <div className="features-area features-area4">
              <div className="container container-small">
                 <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                       <div className="features-single mb-30">
                          <div className="irc-item">
                             <div className="irc-item-icon">
                                <svg id="_003-scooter" data-name="003-scooter" xmlns="http://www.w3.org/2000/svg"
                                   width="46.699" height="40.604" viewBox="0 0 46.699 40.604">
                                   <path id="Path_3267" data-name="Path 3267"
                                      d="M50.456,29.234h11.6a3.356,3.356,0,0,0,3.352-3.352V14.731a3.427,3.427,0,0,0-3.423-3.424H50.456a3.427,3.427,0,0,0-3.423,3.424V25.81a3.427,3.427,0,0,0,3.423,3.424ZM61.983,12.722a2.011,2.011,0,0,1,2.008,2.009V25.882a1.939,1.939,0,0,1-1.937,1.937h-11.6a2.011,2.011,0,0,1-2.008-2.009V14.731a2.01,2.01,0,0,1,2.008-2.009Z"
                                      transform="translate(-47.033 -11.307)" fill="#171717" />
                                   <path id="Path_3268" data-name="Path 3268"
                                      d="M46.526,41.883H59.247a.708.708,0,0,0,.708-.708V37.97a3.33,3.33,0,0,0-3.326-3.325h-10.1A3.33,3.33,0,0,0,43.2,37.97v.587a3.33,3.33,0,0,0,3.326,3.326ZM58.54,40.468H46.526a1.91,1.91,0,0,1-1.91-1.91v-.587a1.91,1.91,0,0,1,1.91-1.91h10.1a1.91,1.91,0,0,1,1.91,1.91Z"
                                      transform="translate(-38.869 -18.132)" fill="#171717" />
                                   <path id="Path_3269" data-name="Path 3269"
                                      d="M26.589,55.345H57.783a.708.708,0,1,0,0-1.415H26.589A1.79,1.79,0,0,1,24.8,52.193c1.031-6.683,6.17-7.871,6.389-7.918A.708.708,0,1,0,30.9,42.89c-.064.013-6.344,1.415-7.5,9.149a.747.747,0,0,0-.008.105A3.207,3.207,0,0,0,26.589,55.345Z"
                                      transform="translate(-23.386 -20.539)" fill="#171717" />
                                   <path id="Path_3270" data-name="Path 3270"
                                      d="M46.021,55.345a.708.708,0,0,0,.551-1.15,7.567,7.567,0,0,1-.035-10.131A.708.708,0,1,0,45.5,43.1a9.113,9.113,0,0,0-.034,11.983A.708.708,0,0,0,46.021,55.345Z"
                                      transform="translate(-25.643 -20.538)" fill="#171717" />
                                   <path id="Path_3271" data-name="Path 3271"
                                      d="M53.272,65.441A6.246,6.246,0,0,0,59.511,59.2a.708.708,0,0,0-1.415,0,4.824,4.824,0,1,1-9.648,0,.708.708,0,0,0-1.415,0A6.246,6.246,0,0,0,53.272,65.441Z"
                                      transform="translate(-41.138 -25.107)" fill="#171717" />
                                   <path id="Path_3272" data-name="Path 3272"
                                      d="M55.106,52.1h3.267a.708.708,0,1,0,0-1.415H55.108a.708.708,0,1,0,0,1.415Z"
                                      transform="translate(-45.92 -22.824)" fill="#171717" />
                                   <path id="Path_3273" data-name="Path 3273"
                                      d="M13.5,63.317A6.5,6.5,0,1,0,7,56.808,6.5,6.5,0,0,0,13.5,63.317Zm0-11.59a5.088,5.088,0,1,1-5.082,5.082A5.088,5.088,0,0,1,13.5,51.727Z"
                                      transform="translate(26.691 -22.714)" fill="#171717" />
                                   <path id="Path_3274" data-name="Path 3274"
                                      d="M8.107,55.337a.708.708,0,0,0,.675-.92,7.783,7.783,0,1,1,15.2-2.36,5.785,5.785,0,0,1-.114,1.216.676.676,0,0,0-.016.146.708.708,0,0,0,1.411.1,7.358,7.358,0,0,0,.134-1.459A9.2,9.2,0,1,0,7.432,54.846.708.708,0,0,0,8.107,55.337Z"
                                      transform="translate(21.302 -20.535)" fill="#171717" />
                                   <path id="Path_3275" data-name="Path 3275"
                                      d="M19.709,48.117a.708.708,0,0,0,.708-.708V34.222a5.8,5.8,0,0,1,4.528-5.757l.047-.008,2.519,10.637a.707.707,0,1,0,1.377-.325L26.225,27.511a.7.7,0,0,0-.747-.541,7.877,7.877,0,0,0-.786.1A7.14,7.14,0,0,0,19,34.222V47.409A.708.708,0,0,0,19.709,48.117Z"
                                      transform="translate(9.301 -15.887)" fill="#171717" />
                                   <path id="Path_3276" data-name="Path 3276"
                                      d="M19.708,25.984H31.1a.708.708,0,0,0,.708-.708v-5.8a.708.708,0,0,0-.708-.708H28.722A4.029,4.029,0,0,0,24.7,22.792v1.775h-4.99a.708.708,0,1,0,0,1.415ZM30.4,24.569H26.113V22.794a2.612,2.612,0,0,1,2.609-2.609H30.4Z"
                                      transform="translate(6.396 -13.489)" fill="#171717" />
                                   <path id="Path_3277" data-name="Path 3277"
                                      d="M47.741,20.915H64.7a.708.708,0,1,0,0-1.415H47.741a.708.708,0,1,0,0,1.415Z"
                                      transform="translate(-47.033 -13.703)" fill="#171717" />
                                   <path id="Path_3278" data-name="Path 3278"
                                      d="M14.831,61.427a3.284,3.284,0,1,0-3.284-3.284,3.285,3.285,0,0,0,3.284,3.284Zm0-5.153a1.869,1.869,0,1,1-1.869,1.869A1.869,1.869,0,0,1,14.831,56.274Z"
                                      transform="translate(25.366 -24.044)" fill="#171717" />
                                </svg>
                             </div>
                             <div className="irc-item-content">
                                <div className="irc-item-heading">Free Shipping</div>
                                <p>On All Order Over $599</p>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                       <div className="features-single mb-30">
                          <div className="irc-item">
                             <div className="irc-item-icon">
                                <svg id="_004-return" data-name="004-return" xmlns="http://www.w3.org/2000/svg"
                                   width="41.583" height="40.603" viewBox="0 0 41.583 40.603">
                                   <path id="Path_3279" data-name="Path 3279"
                                      d="M263.129,392.394a.609.609,0,0,0,.609-.609v-1.07a.609.609,0,1,0-1.219,0v1.07A.609.609,0,0,0,263.129,392.394Zm0,0"
                                      transform="translate(-241.198 -358.423)" fill="#171717" />
                                   <path id="Path_3280" data-name="Path 3280"
                                      d="M408.754,392.394a.609.609,0,0,0,.609-.609v-1.07a.609.609,0,1,0-1.219,0v1.07A.609.609,0,0,0,408.754,392.394Zm0,0"
                                      transform="translate(-374.997 -358.423)" fill="#171717" />
                                   <path id="Path_3281" data-name="Path 3281"
                                      d="M319.429,404.232a2.54,2.54,0,0,0,1.918-.854.609.609,0,1,0-.917-.8,1.364,1.364,0,0,1-2,0,.609.609,0,0,0-.918.8,2.539,2.539,0,0,0,1.918.854Zm0,0"
                                      transform="translate(-291.586 -369.69)" fill="#171717" />
                                   <path id="Path_3282" data-name="Path 3282"
                                      d="M101.007,7.387l5.508,4.8a1.492,1.492,0,0,0,2.453-1.116v-.948a10.7,10.7,0,0,1,4.372,1.2,7.814,7.814,0,0,1,3.65,4.446,1.492,1.492,0,0,0,1.427,1.031c.156,0,.312-.013.467-.02a1.508,1.508,0,0,0,1.425-1.569V15.2a11.929,11.929,0,0,0-1.032-4.222,13.808,13.808,0,0,0-5.852-6.143,20.344,20.344,0,0,0-4.458-1.784V1.47A1.5,1.5,0,0,0,106.515.354l-5.508,4.8a1.5,1.5,0,0,0,0,2.232Zm.8-1.313,5.508-4.8a.263.263,0,0,1,.434.2V3.519a.609.609,0,0,0,.471.593c.117.027.248.063.368.1A19.209,19.209,0,0,1,112.8,5.886a12.639,12.639,0,0,1,5.364,5.6,10.7,10.7,0,0,1,.924,3.785v.009a.277.277,0,0,1-.264.287l-.4.018h-.014a.281.281,0,0,1-.268-.187,9.043,9.043,0,0,0-4.229-5.142,12.136,12.136,0,0,0-5.5-1.375.625.625,0,0,0-.673.608v1.584a.264.264,0,0,1-.434.2l-5.508-4.8a.265.265,0,0,1,0-.395Zm0,0"
                                      transform="translate(-92.345 -0.001)" fill="#171717" />
                                   <path id="Path_3283" data-name="Path 3283"
                                      d="M1.81,228.131H3.284v9.584A2.485,2.485,0,0,0,5.766,240.2H35.817a2.485,2.485,0,0,0,2.482-2.482v-9.584h1.473a1.831,1.831,0,0,0,1.684-2.485l-3.2-8.025a.609.609,0,0,0-.566-.384H34.472a.609.609,0,0,0,0,1.219h2.805l3.048,7.641a.6.6,0,0,1-.552.815H20.689a.6.6,0,0,1-.552-.374l-3.224-8.082H32.035a.609.609,0,1,0,0-1.218H3.893a.609.609,0,0,0-.566.383l-3.2,8.025a1.83,1.83,0,0,0,1.684,2.485Zm14.2,6.444a.609.609,0,0,0,.609-.609V221.019L19,226.99a1.8,1.8,0,0,0,1.684,1.141H37.081v9.584a1.265,1.265,0,0,1-1.264,1.264H16.623V236.4a.609.609,0,1,0-1.219,0v2.576H5.766A1.265,1.265,0,0,1,4.5,237.716v-9.584h6.837a1.824,1.824,0,0,0,1.684-1.141l2.382-5.971v12.948a.609.609,0,0,0,.609.609ZM1.258,226.1l3.048-7.641H15.115l-3.224,8.082a.6.6,0,0,1-.552.374H1.81a.6.6,0,0,1-.552-.815Zm0,0"
                                      transform="translate(0 -199.595)" fill="#171717" />
                                </svg>
     
                             </div>
                             <div className="irc-item-content">
                                <div className="irc-item-heading">Easy Returns</div>
                                <p>30 Day Returns Policy</p>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                       <div className="features-single mb-30">
                          <div className="irc-item">
                             <div className="irc-item-icon">
                                <svg id="_001-payment-security" data-name="001-payment-security"
                                   xmlns="http://www.w3.org/2000/svg" width="40.603" height="40.604"
                                   viewBox="0 0 40.603 40.604">
                                   <g id="Group_2181" data-name="Group 2181" transform="translate(0 0)">
                                      <path id="Path_3246" data-name="Path 3246"
                                         d="M33.47,353.747a.6.6,0,0,0-.595.595v9.775a.992.992,0,0,1-.991.991H2.184a.992.992,0,0,1-.991-.991v-7.935a.595.595,0,1,0-1.19,0v7.935A2.183,2.183,0,0,0,2.184,366.3h29.7a2.183,2.183,0,0,0,2.181-2.181v-9.775A.6.6,0,0,0,33.47,353.747Z"
                                         transform="translate(-0.003 -325.694)" fill="#171717" />
                                      <path id="Path_3247" data-name="Path 3247"
                                         d="M66.156,433.576a.595.595,0,1,0,0-1.19H54.816a.595.595,0,1,0,0,1.19Z"
                                         transform="translate(-49.921 -398.097)" fill="#171717" />
                                      <path id="Path_3248" data-name="Path 3248"
                                         d="M236.331,433.576a.595.595,0,1,0,0-1.19h-1.8a.595.595,0,1,0,0,1.19Z"
                                         transform="translate(-215.386 -398.097)" fill="#171717" />
                                      <path id="Path_3249" data-name="Path 3249"
                                         d="M288.17,433.576a.595.595,0,1,0,0-1.19h-1.8a.595.595,0,1,0,0,1.19Z"
                                         transform="translate(-263.114 -398.097)" fill="#171717" />
                                      <path id="Path_3250" data-name="Path 3250"
                                         d="M340.011,433.576a.595.595,0,1,0,0-1.19h-1.8a.595.595,0,0,0,0,1.19Z"
                                         transform="translate(-310.844 -398.097)" fill="#171717" />
                                      <path id="Path_3251" data-name="Path 3251"
                                         d="M290.864,196.963a.6.6,0,0,0-.812-.218l-.492.284v-.568a.595.595,0,0,0-1.19,0v.568l-.492-.284a.595.595,0,0,0-.595,1.03l.492.284-.492.284a.595.595,0,1,0,.595,1.03l.492-.284v.568a.595.595,0,0,0,1.19,0v-.568l.492.284a.595.595,0,1,0,.595-1.03l-.492-.284.492-.284A.6.6,0,0,0,290.864,196.963Z"
                                         transform="translate(-264.227 -180.334)" fill="#171717" />
                                      <path id="Path_3252" data-name="Path 3252"
                                         d="M351.244,196.963a.6.6,0,0,0-.812-.218l-.492.284v-.568a.595.595,0,0,0-1.19,0v.568l-.492-.284a.595.595,0,1,0-.595,1.03l.492.284-.492.284a.595.595,0,1,0,.595,1.03l.492-.284v.568a.595.595,0,0,0,1.19,0v-.568l.492.284a.595.595,0,0,0,.595-1.03l-.492-.284.492-.284A.6.6,0,0,0,351.244,196.963Z"
                                         transform="translate(-319.819 -180.334)" fill="#171717" />
                                      <path id="Path_3253" data-name="Path 3253"
                                         d="M410.32,196.462a.595.595,0,0,0-1.19,0v.568l-.492-.284a.595.595,0,0,0-.595,1.03l.492.284-.492.284a.595.595,0,1,0,.595,1.03l.492-.284v.568a.595.595,0,1,0,1.19,0v-.568l.492.284a.595.595,0,1,0,.595-1.03l-.492-.284.492-.284a.595.595,0,1,0-.595-1.03l-.492.284Z"
                                         transform="translate(-375.411 -180.334)" fill="#171717" />
                                      <path id="Path_3254" data-name="Path 3254"
                                         d="M40.011,3.005H35.4a5.768,5.768,0,0,1-4-1.6h0L30.213.275a.99.99,0,0,0-1.369,0L27.67,1.4a5.767,5.767,0,0,1-4,1.607H19.057a.6.6,0,0,0-.595.595V15.592a10.728,10.728,0,0,0,1.165,4.855H1.193V18.874a.992.992,0,0,1,.991-.991H16.527a.595.595,0,0,0,0-1.19H2.184A2.183,2.183,0,0,0,0,18.874v8.646a.595.595,0,0,0,1.19,0V25.39H24.644l4.368,2.746a1,1,0,0,0,1.056,0l5.538-3.485a10.7,10.7,0,0,0,5-9.055V3.6a.6.6,0,0,0-.595-.595ZM1.193,21.636H20.334A10.742,10.742,0,0,0,22.811,24.2H1.193V21.636ZM39.417,15.6a9.459,9.459,0,0,1-4.445,8.049L29.54,27.063,24.1,23.643a9.459,9.459,0,0,1-4.448-8.051V4.2h4.014a6.951,6.951,0,0,0,4.826-1.937l1.037-.992,1.049,1h0A6.952,6.952,0,0,0,35.4,4.195h4.021V15.6Z"
                                         transform="translate(-0.003 0)" fill="#171717" />
                                      <path id="Path_3255" data-name="Path 3255"
                                         d="M349.634,64.249a.771.771,0,0,1-.77-.77.595.595,0,1,0-1.19,0,1.963,1.963,0,0,0,1.365,1.867v.722a.595.595,0,1,0,1.19,0v-.722a1.96,1.96,0,0,0-.595-3.827l-.043,0a.77.77,0,1,1,.814-.769.595.595,0,0,0,1.19,0,1.963,1.963,0,0,0-1.365-1.867v-.722a.595.595,0,0,0-1.19,0v.722a1.96,1.96,0,0,0,.595,3.827l.043,0a.77.77,0,0,1-.043,1.54Z"
                                         transform="translate(-320.103 -53.002)" fill="#171717" />
                                   </g>
                                </svg>
                             </div>
                             <div className="irc-item-content">
                                <div className="irc-item-heading">Secure Payment</div>
                                <p>100% Secure Gaurantee</p>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                       <div className="features-single mb-30">
                          <div className="irc-item">
                             <div className="irc-item-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33.672" height="40.472"
                                   viewBox="0 0 33.672 40.472">
                                   <g id="headphones" transform="translate(-43.008)">
                                      <g id="Group_2248" data-name="Group 2248" transform="translate(57.528 6.231)">
                                         <g id="Group_2247" data-name="Group 2247">
                                            <path id="Path_3446" data-name="Path 3446"
                                               d="M242.332,79.14a.794.794,0,0,0-1.255.971,15.1,15.1,0,0,1,3.183,9.326v2.327a2.338,2.338,0,0,0-.761-.127h-2.189a1.943,1.943,0,0,0-1.871-1.426h-2.175a1.942,1.942,0,0,0-1.939,1.939v10.408a1.942,1.942,0,0,0,1.939,1.94h2.175a1.947,1.947,0,0,0,.3-.024,6.063,6.063,0,0,1-6.005,5.285h-.419a2.146,2.146,0,0,0-2.1-1.726h-2.378a2.145,2.145,0,0,0-2.143,2.143v.754a2.145,2.145,0,0,0,2.143,2.143h2.378a2.146,2.146,0,0,0,2.1-1.726h.419a7.651,7.651,0,0,0,7.643-7.642.789.789,0,0,0-.134-.441,1.925,1.925,0,0,0,.064-.193H243.5a2.35,2.35,0,0,0,2.348-2.347V89.437A16.675,16.675,0,0,0,242.332,79.14Zm-10.561,31.79h0a.556.556,0,0,1-.555.555h-2.378a.556.556,0,0,1-.555-.555v-.754a.556.556,0,0,1,.555-.555h2.378a.556.556,0,0,1,.555.555Zm8.021-18.5v10.127a.353.353,0,0,1-.353.353h-2.175a.353.353,0,0,1-.352-.353V92.15a.353.353,0,0,1,.352-.352h2.175a.353.353,0,0,1,.353.352Zm4.468,1.989v6.3a.762.762,0,0,1-.761.76h-2.12v-8.26h2.12a.762.762,0,0,1,.761.761Z"
                                               transform="translate(-226.694 -78.832)" fill="#171717" />
                                         </g>
                                      </g>
                                      <g id="Group_2250" data-name="Group 2250" transform="translate(43.008)">
                                         <g id="Group_2249" data-name="Group 2249" transform="translate(0)">
                                            <path id="Path_3447" data-name="Path 3447"
                                               d="M69.648,3.148a16.837,16.837,0,0,0-26.64,13.689V28.123a2.35,2.35,0,0,0,2.348,2.347h2.189A1.943,1.943,0,0,0,49.416,31.9h2.175a1.942,1.942,0,0,0,1.939-1.94V19.549a1.942,1.942,0,0,0-1.939-1.939H49.416a1.943,1.943,0,0,0-1.871,1.426H45.356a2.338,2.338,0,0,0-.761.127V16.836a15.251,15.251,0,0,1,24.128-12.4.794.794,0,1,0,.925-1.289ZM49.063,29.677V19.549a.353.353,0,0,1,.353-.352h2.175a.353.353,0,0,1,.352.352V29.957a.353.353,0,0,1-.352.353H49.416a.353.353,0,0,1-.353-.353Zm-3.707-9.054h2.12v8.26h-2.12a.762.762,0,0,1-.761-.76V21.384A.762.762,0,0,1,45.356,20.623Z"
                                               transform="translate(-43.008 0)" fill="#171717" />
                                         </g>
                                      </g>
                                      <g id="Group_2252" data-name="Group 2252" transform="translate(70.161 4.444)">
                                         <g id="Group_2251" data-name="Group 2251" transform="translate(0)">
                                            <path id="Path_3448" data-name="Path 3448"
                                               d="M387.284,56.22a.794.794,0,0,0,0,1.587A.794.794,0,0,0,387.284,56.22Z"
                                               transform="translate(-386.517 -56.22)" fill="#171717" />
                                         </g>
                                      </g>
                                   </g>
                                </svg>
     
                             </div>
                             <div className="irc-item-content">
                                <div className="irc-item-heading">Special Support</div>
                                <p>24/7 Dedicated Support</p>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           {/*<!-- features area end  -->
     
    <!-- speciality area start  -->*/}
           <section className="speciality-area pt-90">
              <div className="container container-small">
                 <div className="row align-items-center">
                    <div className="col-lg-6">
                       <div className="speciality-content mb-30">
                          <div className="section-title">
                             <h2 className="section-main-title mb-45">We brought fashion
                                revolution in the society</h2>
     
                          </div>
                          <div className="speciality-points">
                             <div className="speciality-point-single">
                                <div className="irc-item">
                                   <div className="irc-item-icon">
                                      <svg id="Group_2273" data-name="Group 2273" xmlns="http://www.w3.org/2000/svg"
                                         width="60" height="50" viewBox="0 0 60 50">
                                         <g id="Group_2272" data-name="Group 2272" transform="translate(0 0)">
                                            <path id="Path_3508" data-name="Path 3508"
                                               d="M348.029,365.671a1.25,1.25,0,0,0-1.25,1.25v4.648a1.25,1.25,0,0,0,2.5,0v-4.648A1.25,1.25,0,0,0,348.029,365.671Z"
                                               transform="translate(-306.141 -327.819)" fill="#171717" />
                                            <path id="Path_3509" data-name="Path 3509"
                                               d="M348.023,337.3a1.25,1.25,0,0,0,1.25-1.25v-.03a1.25,1.25,0,1,0-2.5,0v.03A1.25,1.25,0,0,0,348.023,337.3Z"
                                               transform="translate(-306.136 -300.541)" fill="#171717" />
                                            <path id="Path_3510" data-name="Path 3510"
                                               d="M60,58.279a4.6,4.6,0,0,0-1.256-2.494l-5.033-6.473-2.324-2.989c-1.944-2.51-2.832-3.656-6.655-3.656H41.323a1.249,1.249,0,0,0-.956.445,13.606,13.606,0,0,1-20.734,0,1.25,1.25,0,0,0-.956-.445H15.272c-3.824,0-4.711,1.146-6.655,3.656L1.259,55.785A4.593,4.593,0,0,0,0,58.279,3.653,3.653,0,0,0,1.315,60.9l5.2,5.47c1.013,1.069,1.682,1.775,2.708,1.775A3.679,3.679,0,0,0,11.691,66.7l.359-.363-.2,21.926c-.016,1.766-.026,2.832.747,3.612s1.995.794,3.525.794H43.884c1.53,0,2.738,0,3.525-.794s.764-1.847.747-3.612l-.2-21.926.359.363a3.68,3.68,0,0,0,2.467,1.453c1.026,0,1.7-.706,2.708-1.775l5.2-5.471A3.655,3.655,0,0,0,60,58.279Zm-3.123.9-5.2,5.474c-.325.343-.683.721-.908.913a7.8,7.8,0,0,1-.676-.629l-2.526-2.554a1.25,1.25,0,0,0-2.139.891l.234,25.009a13.112,13.112,0,0,1-.052,1.8,11.708,11.708,0,0,1-1.72.078H16.116a11.707,11.707,0,0,1-1.72-.078,13.116,13.116,0,0,1-.052-1.8l.233-25.009a1.25,1.25,0,0,0-2.139-.891L9.913,64.938a7.875,7.875,0,0,1-.676.629c-.225-.192-.583-.57-.908-.913l-5.2-5.473a3.155,3.155,0,0,1-.622-.785,6.182,6.182,0,0,1,.728-1.076l7.073-9.1.287-.37c1.8-2.329,2.081-2.687,4.679-2.687H18.11a16.113,16.113,0,0,0,23.781,0h2.839c2.6,0,2.875.358,4.679,2.687l7.36,9.466A6.174,6.174,0,0,1,57.5,58.4,3.125,3.125,0,0,1,56.874,59.181Z"
                                               transform="translate(0 -42.666)" fill="#171717" />
                                            <path id="Path_3511" data-name="Path 3511"
                                               d="M101.465,85.436h-.007c-2.468.013-3.1.687-4.932,3.024A1.25,1.25,0,1,0,98.5,90c1.609-2.057,1.634-2.057,2.976-2.064a1.25,1.25,0,0,0-.006-2.5Z"
                                               transform="translate(-84.98 -80.424)" fill="#171717" />
                                            <path id="Path_3512" data-name="Path 3512"
                                               d="M79.26,131.591a1.25,1.25,0,0,0-1.757.2l-.036.047a1.25,1.25,0,1,0,1.972,1.537l.022-.029A1.25,1.25,0,0,0,79.26,131.591Z"
                                               transform="translate(-68.155 -120.93)" fill="#171717" />
                                            <path id="Path_3513" data-name="Path 3513"
                                               d="M197.8,150.7l-4.323-1.244-2.505-3.716a1.25,1.25,0,0,0-1.036-.551h0a1.25,1.25,0,0,0-1.036.55l-2.519,3.727-4.308,1.234a1.25,1.25,0,0,0-.642,1.97l2.766,3.548-.157,4.479a1.25,1.25,0,0,0,1.676,1.219l4.229-1.534,4.211,1.534a1.25,1.25,0,0,0,1.677-1.217l-.153-4.5,2.76-3.531a1.25,1.25,0,0,0-.639-1.971Zm-4.371,4.321a1.25,1.25,0,0,0-.265.812l.105,3.1-2.9-1.056a1.248,1.248,0,0,0-.854,0l-2.915,1.058.108-3.083a1.249,1.249,0,0,0-.263-.813l-1.907-2.446,2.965-.85a1.249,1.249,0,0,0,.691-.5l1.737-2.569,1.724,2.558a1.25,1.25,0,0,0,.691.5l2.98.858Z"
                                               transform="translate(-159.939 -133.173)" fill="#171717" />
                                         </g>
                                      </svg>
                                   </div>
                                   <div className="irc-item-content">
                                      <div className="irc-item-heading">Western Fashion</div>
                                      <p>When not in front of her computer screen croix wine in hand or in front of a
                                         mirror
                                      </p>
                                   </div>
                                </div>
                             </div>
                             <div className="speciality-point-single">
                                <div className="irc-item">
                                   <div className="irc-item-icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60.031"
                                         viewBox="0 0 60 60.031">
                                         <g id="XMLID_1104_" transform="translate(-0.132 0)">
                                            <g id="XMLID_1842_" transform="translate(0.132 0)">
                                               <path id="XMLID_1869_"
                                                  d="M59.34,25.869a1.172,1.172,0,0,0-.83-.83,23.6,23.6,0,0,0-11.966-.049,23.35,23.35,0,0,0-6.3,2.669A22.218,22.218,0,0,0,30.72.158a1.171,1.171,0,0,0-1.174,0,22.226,22.226,0,0,0-9.519,27.5,23.35,23.35,0,0,0-6.3-2.669,23.6,23.6,0,0,0-11.966.049,1.172,1.172,0,0,0-.83.83A23.48,23.48,0,0,0,28.962,54.794v4.066a1.172,1.172,0,1,0,2.344,0V54.793a23.584,23.584,0,0,0,17.6-2.818,1.172,1.172,0,0,0-1.224-2,21.219,21.219,0,0,1-14.434,2.812L45.38,40.656A1.172,1.172,0,0,0,43.723,39L31.589,51.132A21.126,21.126,0,0,1,57.241,27.138,21.227,21.227,0,0,1,54.7,42.959a1.172,1.172,0,0,0,2,1.223,23.579,23.579,0,0,0,2.64-18.313ZM30.134,2.54a19.877,19.877,0,0,1,1.172,32.932V19.4a1.172,1.172,0,1,0-2.344,0V35.472A19.877,19.877,0,0,1,30.134,2.54ZM8.662,46.882A21.209,21.209,0,0,1,3.026,27.138,21.126,21.126,0,0,1,28.678,51.132L16.545,39a1.172,1.172,0,1,0-1.658,1.658L27.02,52.789A21.211,21.211,0,0,1,8.662,46.882Z"
                                                  transform="translate(-0.132 0)" />
                                               <path id="XMLID_1871_"
                                                  d="M437.579,397.093a1.172,1.172,0,1,0,.829.343A1.181,1.181,0,0,0,437.579,397.093Z"
                                                  transform="translate(-385.277 -350.555)" />
                                            </g>
                                         </g>
                                      </svg>
     
                                   </div>
                                   <div className="irc-item-content">
                                      <div className="irc-item-heading">Fresh & Comfort</div>
                                      <p>When not in front of her computer screen croix wine in hand or in front of a
                                         mirror
                                      </p>
                                   </div>
                                </div>
                             </div>
                             <div className="speciality-point-single">
                                <div className="irc-item">
                                   <div className="irc-item-icon">
                                      <svg id="_009---Bow" data-name="009---Bow" xmlns="http://www.w3.org/2000/svg"
                                         width="60" height="51.998" viewBox="0 0 60 51.998">
                                         <path id="Shape"
                                            d="M3.007,28.118a.026.026,0,0,0,.006.02C3.15,30.805,7.166,32,16,32a43.047,43.047,0,0,0,5.648-.366,29.974,29.974,0,0,1-9.365,6.5,3.007,3.007,0,0,0,.219,5.576,13.2,13.2,0,0,0,2.46.629.979.979,0,0,1,.836,1.031,19.981,19.981,0,0,0,.119,4.037A3.02,3.02,0,0,0,18.9,52a2.974,2.974,0,0,0,2.1-.872A36.39,36.39,0,0,0,31,34.685,36.39,36.39,0,0,0,41,51.126,2.974,2.974,0,0,0,43.1,52a3.02,3.02,0,0,0,2.984-2.6,19.989,19.989,0,0,0,.119-4.038.979.979,0,0,1,.836-1.03A13.2,13.2,0,0,0,49.5,43.7a3.007,3.007,0,0,0,.219-5.576,29.974,29.974,0,0,1-9.365-6.5A43.047,43.047,0,0,0,46,32c8.834,0,12.85-1.2,12.987-3.861a.026.026,0,0,1,.006-.02L60.934,11.95A6.995,6.995,0,0,0,53.955,4a30.129,30.129,0,0,0-7.231.926A16.76,16.76,0,0,0,35.563,14.955,3.964,3.964,0,0,0,33,14H29a3.964,3.964,0,0,0-2.564.955A16.76,16.76,0,0,0,15.274,4.926,30.129,30.129,0,0,0,8.043,4H7.969a6.993,6.993,0,0,0-6.906,7.934ZM16,30C5.609,30,5.033,28.249,5,28.022c.03-.231.546-3.091,7.14-4.033a37.13,37.13,0,0,1,12.939.807,3.915,3.915,0,0,0,.473,1.2,18.348,18.348,0,0,1-1.937,3.289A38.163,38.163,0,0,1,16,30Zm3.592,19.709a.963.963,0,0,1-1.01.236,1,1,0,0,1-.685-.825,18.248,18.248,0,0,1-.1-3.629,2.969,2.969,0,0,0-2.525-3.132,11.256,11.256,0,0,1-2.087-.534.99.99,0,0,1-.676-.9,1,1,0,0,1,.609-.971c8.768-4.011,12.528-9.642,13.946-12.473A3.953,3.953,0,0,0,29,28h.973C29.7,35.822,26.215,43.122,19.591,49.708Zm29.292-9.76a1,1,0,0,1,.609.971.99.99,0,0,1-.676.9,11.256,11.256,0,0,1-2.087.534A2.969,2.969,0,0,0,44.2,45.491a18.249,18.249,0,0,1-.1,3.629,1,1,0,0,1-.685.825.964.964,0,0,1-1.01-.236C35.783,43.122,32.3,35.822,32.026,28H33a3.953,3.953,0,0,0,1.939-.523c1.418,2.831,5.178,8.462,13.946,12.473ZM46,30a38.163,38.163,0,0,1-7.617-.716A18.348,18.348,0,0,1,36.445,26a3.925,3.925,0,0,0,.473-1.2,37.021,37.021,0,0,1,12.939-.807c6.765.966,7.133,3.956,7.141,4.024C56.978,28.207,56.51,30,46,30Zm1.274-23.15A28.015,28.015,0,0,1,53.972,6a4.833,4.833,0,0,1,3.765,1.68,5.025,5.025,0,0,1,1.212,4.02L57.361,24.911c-1.236-1.172-3.408-2.357-7.221-2.9A38.351,38.351,0,0,0,37,22.721V22.1c.131-.61,1.326-5.1,8-5.1a1,1,0,0,0,0-2c-4.119,0-6.558,1.5-8,3.1V18c0-3.444,3.57-9.235,10.274-11.151ZM29,16h4a2,2,0,0,1,2,2v6a2,2,0,0,1-2,2H29a2,2,0,0,1-2-2V18a2,2,0,0,1,2-2ZM4.256,7.68A4.808,4.808,0,0,1,8.021,6a28.015,28.015,0,0,1,6.7.849C21.429,8.765,25,14.556,25,18v.1c-1.442-1.6-3.881-3.1-8-3.1a1,1,0,1,0,0,2c6.675,0,7.868,4.49,8,5.1v.621a38.278,38.278,0,0,0-13.142-.711c-3.813.545-5.985,1.73-7.222,2.9L3.047,11.679a5.016,5.016,0,0,1,1.209-4Z"
                                            transform="translate(-0.999 0)" />
                                         <path id="Shape-2" data-name="Shape"
                                            d="M24,3a1,1,0,0,0,1-1V1a1,1,0,1,0-2,0V2A1,1,0,0,0,24,3Z"
                                            transform="translate(-1)" />
                                         <path id="Shape-3" data-name="Shape" d="M26,5h1a1,1,0,0,0,0-2H26a1,1,0,0,0,0,2Z"
                                            transform="translate(-1 0)" />
                                         <path id="Shape-4" data-name="Shape"
                                            d="M24,5a1,1,0,0,0-1,1V7a1,1,0,0,0,2,0V6A1,1,0,0,0,24,5Z"
                                            transform="translate(-1 0)" />
                                         <path id="Shape-5" data-name="Shape" d="M21,5h1a1,1,0,0,0,0-2H21a1,1,0,0,0,0,2Z"
                                            transform="translate(-1 0)" />
                                         <path id="Shape-6" data-name="Shape"
                                            d="M5,33a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V34A1,1,0,0,0,5,33Z"
                                            transform="translate(-0.999 -0.001)" />
                                         <path id="Shape-7" data-name="Shape" d="M7,38H8a1,1,0,1,0,0-2H7a1,1,0,1,0,0,2Z"
                                            transform="translate(-1 -0.001)" />
                                         <path id="Shape-8" data-name="Shape" d="M4,40a1,1,0,0,0,2,0V39a1,1,0,0,0-2,0Z"
                                            transform="translate(-0.999 -0.001)" />
                                         <path id="Shape-9" data-name="Shape" d="M2,38H3a1,1,0,1,0,0-2H2a1,1,0,1,0,0,2Z"
                                            transform="translate(-0.999 -0.001)" />
                                         <path id="Shape-10" data-name="Shape" d="M58,34a1,1,0,1,0-2,0v1a1,1,0,1,0,2,0Z"
                                            transform="translate(-1.001 -0.001)" />
                                         <path id="Shape-11" data-name="Shape" d="M60,36H59a1,1,0,1,0,0,2h1a1,1,0,1,0,0-2Z"
                                            transform="translate(-1.001 -0.001)" />
                                         <path id="Shape-12" data-name="Shape" d="M58,39a1,1,0,1,0-2,0v1a1,1,0,0,0,2,0Z"
                                            transform="translate(-1.001 -0.001)" />
                                         <path id="Shape-13" data-name="Shape" d="M55,38a1,1,0,1,0,0-2H54a1,1,0,1,0,0,2Z"
                                            transform="translate(-1.001 -0.001)" />
                                         <path id="Shape-14" data-name="Shape"
                                            d="M38,3a1,1,0,0,0,1-1V1a1,1,0,1,0-2,0V2A1,1,0,0,0,38,3Z"
                                            transform="translate(-1.001)" />
                                         <path id="Shape-15" data-name="Shape" d="M40,5h1a1,1,0,0,0,0-2H40a1,1,0,0,0,0,2Z"
                                            transform="translate(-1.001 0)" />
                                         <path id="Shape-16" data-name="Shape"
                                            d="M38,5a1,1,0,0,0-1,1V7a1,1,0,1,0,2,0V6A1,1,0,0,0,38,5Z"
                                            transform="translate(-1.001 0)" />
                                         <path id="Shape-17" data-name="Shape" d="M35,5h1a1,1,0,0,0,0-2H35a1,1,0,0,0,0,2Z"
                                            transform="translate(-1 0)" />
                                      </svg>
     
                                   </div>
                                   <div className="irc-item-content">
                                      <div className="irc-item-heading">Cotton & Fabric</div>
                                      <p>When not in front of her computer screen croix wine in hand or in front of a
                                         mirror
                                      </p>
                                   </div>
                                </div>
                             </div>
     
                          </div>
                       </div>
                    </div>
                    <div className="col-lg-6">
                       <div className="speciality-thumb mb-30">
                          <img src="assets/img/about/speciality-thumb.jpg" alt="img"/>
                       </div>
                    </div>
                 </div>
              </div>
           </section>
           {/*<!-- speciality area end  -->
     
           <!-- testimonial area start  -->*/}
           <div className="testimonial-area pt-85 pb-120">
              <div className="container">
                 <div className="row">
                    <div className="col-lg-12">
                       <div className="testimonial-wrapper">
                          <div className="swiper-container testimonial-active">
                             <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                   <div className="testimonial-single">
                                      <div className="testimonial-content">
                                         <div className="testimonial-author">
                                            <h4 className="author-name">Charlotte Sophia</h4>
                                            <div className="author-desc">Team Leader, Codex</div>
                                         </div>
                                         <div className="author-text">
                                            <p>Buying a package usually means you buy two or more services, with each service
                                               coming at a discounted price. For
                                               example, instead of buying a manicure for combo of the two carrot.</p>
                                         </div>
                                         <div className="author-thumb">
                                            <img src="assets/img/testimonial/author-1.jpg" alt="author img"/>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div className="swiper-slide">
                                   <div className="testimonial-single">
                                      <div className="testimonial-content">
                                         <div className="testimonial-author">
                                            <h4 className="author-name">Charlotte Sophia</h4>
                                            <div className="author-desc">Team Leader, Codex</div>
                                         </div>
                                         <div className="author-text">
                                            <p>Buying a package usually means you buy two or more services, with each service
                                               coming at a discounted price. For
                                               example, instead of buying a manicure for combo of the two carrot.</p>
                                         </div>
                                         <div className="author-thumb">
                                            <img src="assets/img/testimonial/author-1.jpg" alt="author img"/>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div className="swiper-slide">
                                   <div className="testimonial-single">
                                      <div className="testimonial-content">
                                         <div className="testimonial-author">
                                            <h4 className="author-name">Charlotte Sophia</h4>
                                            <div className="author-desc">Team Leader, Codex</div>
                                         </div>
                                         <div className="author-text">
                                            <p>Buying a package usually means you buy two or more services, with each service
                                               coming at a discounted price. For
                                               example, instead of buying a manicure for combo of the two carrot.</p>
                                         </div>
                                         <div className="author-thumb">
                                            <img src="assets/img/testimonial/author-1.jpg" alt="author img"/>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
     
                             <div className="testimonial-pagination">
                                {/*<!-- If we need pagination -->*/}
                                <div className="testimonial-pagination"></div>
                             </div>
                          </div>
                         {/* <!-- If we need navigation buttons -->*/}
                          <div className="testimonial-nav">
                             <div className="testimonial-button-prev"><i className="fal fa-long-arrow-left"></i></div>
                             <div className="testimonial-button-next"><i className="fal fa-long-arrow-right"></i></div>
                          </div>
                       </div>
     
                    </div>
                 </div>
              </div>
           </div>
           {/*<!-- testimonial area end  -->*/}
     
     
     
     
     
     
     
        </main>
     
       
    );
}