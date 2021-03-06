/*
##########
# Slider #
##########
*/
Vue.component('Slider', {
  props: ['images', 'device'],
  template: `
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    
    <div v-if="device >= 600" class="carousel-inner">
      
      <div v-for="carousel in images.imagesDesktop" class="carousel-item" :class="{active: carousel.id == 1 }">
        <img :src="carousel.image" class="d-block w-100" :alt="carousel.id">
      </div>
      
    
    </div>

    <div v-else="device < 600" class="carousel-inner">
      
      <div class="carousel-item active">
        <img :src="images.imagesMobile[0].image" class="d-block w-100" :alt="images.imagesDesktop[0].id">
      </div>
      
      <div class="carousel-item">
        <img :src="images.imagesMobile[1].image" class="d-block w-100" :alt="images.imagesDesktop[1].id">
      </div>
      
      <div class="carousel-item">
        <img :src="images.imagesMobile[2].image" class="d-block w-100" :alt="images.imagesDesktop[2].id">
      </div>
    
    </div>
    
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>  
  `
})

/*
##########
# TopBar #
##########
*/
Vue.component('Bar', {
  template: `
  <div class="u-header-topbar py-2 d-none d-xl-block">
  <div class="container">
      <div class="d-flex align-items-center">

          <div class="topbar-left">
              <a href="#" class="text-gray-110 font-size-13 hover-on-dark">
                  Bienvenido
              </a>
          </div>

          <div class="topbar-right ml-auto">
              <ul class="list-inline mb-0">
                  <li
                      class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                      <a href="../home/contact-v2.html" class="u-header-topbar__nav-link">
                          <i class="ec ec-map-pointer mr-1"></i> 
                          Store Locator
                      </a>
                  </li>

                  <li
                      class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                      <a href="../shop/track-your-order.html" class="u-header-topbar__nav-link"><i
                              class="ec ec-transport mr-1"></i> Track Your Order</a>
                  </li>
                  <li
                      class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border u-header-topbar__nav-item-no-border u-header-topbar__nav-item-border-single">
                      <div class="d-flex align-items-center">
                          <!-- Language -->
                          <div class="position-relative">
                              <a id="languageDropdownInvoker"
                                  class="dropdown-nav-link dropdown-toggle d-flex align-items-center u-header-topbar__nav-link font-weight-normal"
                                  href="javascript:;" role="button" aria-controls="languageDropdown"
                                  aria-haspopup="true" aria-expanded="false" data-unfold-event="hover"
                                  data-unfold-target="#languageDropdown"
                                  data-unfold-type="css-animation" data-unfold-duration="300"
                                  data-unfold-delay="300" data-unfold-hide-on-scroll="true"
                                  data-unfold-animation-in="slideInUp"
                                  data-unfold-animation-out="fadeOut">
                                  <span class="d-inline-block d-sm-none">US</span>
                                  <span class="d-none d-sm-inline-flex align-items-center"><i
                                          class="ec ec-dollar mr-1"></i> Dollar (US)</span>
                              </a>

                              <div id="languageDropdown" class="dropdown-menu dropdown-unfold"
                                  aria-labelledby="languageDropdownInvoker">
                                  <a class="dropdown-item active" href="#">English</a>
                                  <a class="dropdown-item" href="#">Deutsch</a>
                                  <a class="dropdown-item" href="#">Espa??ol???</a>
                              </div>
                          </div>
                          <!-- End Language -->
                      </div>
                  </li>
                  <li
                      class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                      <!-- Account Sidebar Toggle Button -->
                      <a id="sidebarNavToggler" href="javascript:;" role="button"
                          class="u-header-topbar__nav-link" aria-controls="sidebarContent"
                          aria-haspopup="true" aria-expanded="false" data-unfold-event="click"
                          data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarContent"
                          data-unfold-type="css-animation" data-unfold-animation-in="fadeInRight"
                          data-unfold-animation-out="fadeOutRight" data-unfold-duration="500">
                          <i class="ec ec-user mr-1"></i> Registrarse <span
                              class="text-gray-50">o</span> Iniciar sesi??n
                      </a>
                      <!-- End Account Sidebar Toggle Button -->
                  </li>
              </ul>
          </div>
      </div>
  </div>
</div> 
  `
})

/*
##########
# Ads #
##########
*/
Vue.component('Ads', {
  template: `
  <div class="mb-5">
                    <div class="row">
                        
                        <div class="col-md-6 mb-4 mb-xl-0">
                            <a href="../shop/shop.html" class="d-black text-gray-90">
                                <div class="min-height-132 py-1 d-flex bg-gray-1 align-items-center">
                                    <div class="col-6 col-xl-5 col-wd-6 pr-0 d-flex justify-content-center align-items-center">
                                        <img class="img-fluid" 
                                            width="70%"
                                            src="https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/09170049/boton-tarjeta-efectivo.png"
                                            alt="Image Description">
                                    </div>
                                    <div class="col-6 col-xl-7 col-wd-6">
                                        <div class="mb-2 pb-1 font-size-18 font-weight-light text-ls-n1 text-lh-23">
                                            CATCH BIG <strong>DEALS</strong> ON THE CAMERAS
                                        </div>
                                        
                                        <div class="link text-gray-90 font-weight-bold font-size-15" href="#">
                                            Shop now
                                            <span class="link__icon ml-1">
                                                <span class="link__icon-inner"><i
                                                        class="ec ec-arrow-right-categproes"></i></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="col-md-6 mb-4 mb-xl-0">
                            <a href="../shop/shop.html" class="d-black text-gray-90">
                                <div class="min-height-132 py-1 d-flex bg-gray-1 align-items-center">
                                    <div class="col-6 col-xl-5 col-wd-6 pr-0 d-flex justify-content-center align-items-center">
                                        <img class="img-fluid" 
                                            width="70%"
                                            src="https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/09170049/boton-tarjeta-efectivo.png"
                                            alt="Image Description">
                                    </div>
                                    <div class="col-6 col-xl-7 col-wd-6">
                                        <div class="mb-2 pb-1 font-size-18 font-weight-light text-ls-n1 text-lh-23">
                                            CATCH BIG <strong>DEALS</strong> ON THE CAMERAS
                                        </div>
                                        <div class="link text-gray-90 font-weight-bold font-size-15" href="#">
                                            Shop now
                                            <span class="link__icon ml-1">
                                                <span class="link__icon-inner"><i
                                                        class="ec ec-arrow-right-categproes"></i></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        

                    </div>
                </div>
  `
})


/*
##########
# Offer #
##########
*/
Vue.component('Offer', {
  template: `
  <div class="col-md-auto mb-6 mb-md-0">
        <div
            class="p-3 border border-width-2 border-primary borders-radius-20 bg-white min-width-370">
            <div class="d-flex justify-content-between align-items-center m-1 ml-2">
                <h3 class="font-size-22 mb-0 font-weight-normal text-lh-28 max-width-120">
                    Special
                    Offer</h3>
                <div
                    class="d-flex align-items-center flex-column justify-content-center bg-primary rounded-pill height-75 width-75 text-lh-1">
                    <span class="font-size-12">Save</span>
                    <div class="font-size-20 font-weight-bold">$120</div>
                </div>
            </div>
            <div class="mb-4">
                <a href="../shop/single-product-fullwidth.html" class="d-block text-center"><img
                        class="img-fluid" src="../../assets/img/320X300/img1.jpg"
                        alt="Image Description"></a>
            </div>
            <h5 class="mb-2 font-size-14 text-center mx-auto max-width-180 text-lh-18"><a
                    href="../shop/single-product-fullwidth.html"
                    class="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a>
            </h5>
            <div class="d-flex align-items-center justify-content-center mb-3">
                <del class="font-size-18 mr-2 text-gray-2">$99,00</del>
                <ins class="font-size-30 text-red text-decoration-none">$79,00</ins>
            </div>
            <div class="mb-3 mx-2">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="">Availavle: <strong>6</strong></span>
                    <span class="">Already Sold: <strong>28</strong></span>
                </div>
                <div class="rounded-pill bg-gray-3 height-20 position-relative">
                    <span
                        class="position-absolute left-0 top-0 bottom-0 rounded-pill w-30 bg-primary"></span>
                </div>
            </div>
            <div class="mb-2">
                <h6 class="font-size-15 text-gray-2 text-center mb-3">Hurry Up! Offer ends in:</h6>
                <div class="js-countdown d-flex justify-content-center" data-end-date="2020/11/30"
                    data-hours-format="%H" data-minutes-format="%M" data-seconds-format="%S">
                    <div class="text-lh-1">
                        <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                            <span class="js-cd-hours"></span>
                        </div>
                        <div class="text-gray-2 font-size-12 text-center">HOURS</div>
                    </div>
                    <div class="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                    <div class="text-lh-1">
                        <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                            <span class="js-cd-minutes"></span>
                        </div>
                        <div class="text-gray-2 font-size-12 text-center">MINS</div>
                    </div>
                    <div class="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                    <div class="text-lh-1">
                        <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                            <span class="js-cd-seconds"></span>
                        </div>
                        <div class="text-gray-2 font-size-12 text-center">SECS</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `
})

/*
##########
# Carousel #
##########
*/
Vue.component('category-carousel', {
  props: ["category", "products"],
  template: `
  <div class="mb-6">
      <div class="position-relative">
          <div class="border-bottom border-color-1 mb-2">
              <h3 class="section-title mb-0 pb-2 font-size-22">
                {{ category }}
              </h3>
          </div>
          <div class="js-slick-carousel u-slick position-static overflow-hidden u-slick-overflow-visble pb-7 pt-2 px-1"
              data-pagi-classes="text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-3 mt-md-0"
              data-slides-show="7" data-slides-scroll="1"
              data-arrows-classes="position-absolute top-0 font-size-17 u-slick__arrow-normal top-10"
              data-arrow-left-classes="fa fa-angle-left right-1"
              data-arrow-right-classes="fa fa-angle-right right-0" data-responsive='[{
                "breakpoint": 1400,
                "settings": {
                  "slidesToShow": 6
                }
              }, {
                  "breakpoint": 1200,
                  "settings": {
                    "slidesToShow": 4
                  }
              }, {
                "breakpoint": 992,
                "settings": {
                  "slidesToShow": 3
                }
              }, {
                "breakpoint": 768,
                "settings": {
                  "slidesToShow": 2
                }
              }, {
                "breakpoint": 554,
                "settings": {
                  "slidesToShow": 2
                }
              }]'>

              <div v-for="product in products" class="js-slide products-group">
                  <div class="product-item">
                      <div class="product-item__outer h-100">
                          <div class="product-item__inner px-wd-4 p-2 p-md-3">
                              <div class="product-item__body pb-xl-2">
                                  <div class="mb-2">
                                  <a
                                          href="../shop/product-categories-7-column-full-width.html"
                                          class="font-size-12 text-gray-5">Speakers</a></div>
                                  <h5 class="mb-1 product-item__title"><a
                                          href="../shop/single-product-fullwidth.html"
                                          class="text-blue font-weight-bold">
                                          {{ product.title }}
                                          </a></h5>
                                  <div class="mb-2">
                                      <a href="../shop/single-product-fullwidth.html"
                                          class="d-block text-center"><img class="img-fluid"
                                              :src="product.image"
                                              alt="Image Description"></a>
                                  </div>
                                  <div class="flex-center-between mb-1">
                                      <div class="prodcut-price">
                                          <div class="text-gray-100">
                                            {{ product.price + ".00$" }}
                                          </div>
                                      </div>
                                      <div class="d-none d-xl-block prodcut-add-cart">
                                          <a href="../shop/single-product-fullwidth.html"
                                              class="btn-add-cart btn-primary transition-3d-hover"><i
                                                  class="ec ec-add-to-cart"></i></a>
                                      </div>
                                  </div>
                              </div>
                              <div class="product-item__footer">
                                  <div class="border-top pt-2 flex-center-between flex-wrap">
                                      <a href="../shop/compare.html" class="text-gray-6 font-size-13"><i
                                              class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                      <a href="../shop/wishlist.html" class="text-gray-6 font-size-13"><i
                                              class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              
              

              
          </div>
      </div>
  </div>
  `
})

/*
##########
# Brands Carousel #
##########
*/
Vue.component('brands-carousel', {
  props: ["category", "products"],
  template: `
  <div class="mb-8">
                    <div class="py-2 border-top border-bottom">
                        <div class="js-slick-carousel u-slick my-1" data-slides-show="5" data-slides-scroll="1"
                            data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-normal u-slick__arrow-centered--y"
                            data-arrow-left-classes="fa fa-angle-left u-slick__arrow-classic-inner--left z-index-9"
                            data-arrow-right-classes="fa fa-angle-right u-slick__arrow-classic-inner--right"
                            data-responsive='[{
                                "breakpoint": 992,
                                "settings": {
                                    "slidesToShow": 2
                                }
                            }, {
                                "breakpoint": 768,
                                "settings": {
                                    "slidesToShow": 1
                                }
                            }, {
                                "breakpoint": 554,
                                "settings": {
                                    "slidesToShow": 1
                                }
                            }]'>

                            <div class="js-slide">
                                <a href="#" class="link-hover__brand">
                                    <img class="img-fluid m-auto max-height-50" 
                                        src="../../assets/img/brands/alimentos-polar.png"
                                        alt="Image Description">
                                </a>
                            </div>
                            <div class="js-slide">
                                <a href="#" class="link-hover__brand">
                                    <img class="img-fluid m-auto max-height-50" 
                                        src="../../assets/img/brands/android.png"
                                        alt="Image Description">
                                </a>
                            </div>
                            <div class="js-slide">
                                <a href="#" class="link-hover__brand">
                                    <img class="img-fluid m-auto max-height-50" 
                                        src="../../assets/img/brands/hyundai.png"
                                        alt="Image Description">
                                </a>
                            </div>

                            <div class="js-slide">
                                <a href="#" class="link-hover__brand">
                                    <img class="img-fluid m-auto max-height-50" 
                                        src="../../assets/img/brands/intel.png"
                                        alt="Image Description">
                                </a>
                            </div>

                            <div class="js-slide">
                                <a href="#" class="link-hover__brand">
                                    <img class="img-fluid m-auto max-height-50" 
                                        src="../../assets/img/brands/lenovo.png"
                                        alt="Image Description">
                                </a>
                            </div>

                            <div class="js-slide">
                                <a href="#" class="link-hover__brand">
                                    <img class="img-fluid m-auto max-height-50" 
                                        src="../../assets/img/brands/lg.png"
                                        alt="Image Description">
                                </a>
                            </div>

                            <div class="js-slide">
                                <a href="#" class="link-hover__brand">
                                    <img class="img-fluid m-auto max-height-50" 
                                        src="../../assets/img/brands/ottima.png"
                                        alt="Image Description">
                                </a>
                            </div>

                            <div class="js-slide">
                                <a href="#" class="link-hover__brand">
                                    <img class="img-fluid m-auto max-height-50" 
                                        src="../../assets/img/brands/samsung.png"
                                        alt="Image Description">
                                </a>
                            </div>
                        
                        </div>
                    </div>
                </div>
  `
})

/*
##########
# Best Sellers #
##########
*/
Vue.component('best-sellers', {
  props: ["category", "products"],
  template: `
  <div class="space-top-2">
                    <dv
                        class=" d-flex justify-content-between border-bottom border-color-1 flex-md-nowrap flex-wrap border-sm-bottom-0">
                        <h3 class="section-title mb-0 pb-2 font-size-22">Bestsellers</h3>
                        <ul
                            class="nav nav-pills mb-2 pt-3 pt-md-0 mb-0 border-top border-color-1 border-md-top-0 align-items-center font-size-15 font-size-15-md flex-nowrap flex-md-wrap overflow-auto overflow-md-visble">
                            <li class="nav-item flex-shrink-0 flex-md-shrink-1">
                                <a class="text-gray-90 btn btn-outline-primary border-width-2 rounded-pill py-1 px-4 font-size-15 text-lh-19 font-size-15-md"
                                    href="#">Top 20</a>
                            </li>
                            <li class="nav-item flex-shrink-0 flex-md-shrink-1">
                                <a class="nav-link text-gray-8" href="#">Phones & Tablets</a>
                            </li>
                            <li class="nav-item flex-shrink-0 flex-md-shrink-1">
                                <a class="nav-link text-gray-8" href="#">Laptops & Computers</a>
                            </li>
                            <li class="nav-item flex-shrink-0 flex-md-shrink-1">
                                <a class="nav-link text-gray-8" href="#"> Video Cameras</a>
                            </li>
                        </ul>
                    </dv>

                    <div class="js-slick-carousel u-slick u-slick--gutters-2 overflow-hidden u-slick-overflow-visble pt-3 pb-6"
                        data-pagi-classes="text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-4">
                        <div class="js-slide">
                            <ul class="row list-unstyled products-group no-gutters mb-0 overflow-visible">
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img1.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Tablets</a></div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">Tablet Air 3 WiFi 64GB
                                                            Gold</a></h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$629,00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img2.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Laptops & Computers</a>
                                                    </div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">Tablet White EliteBook
                                                            Revolve 810 G2</a></h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$1 299,00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 remove-divider-xl">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img3.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Accesories</a></div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">Pendrive USB 3.0 Flash 64
                                                            GB</a></h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$110,00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0 remove-divider-wd">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img7.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Headphones</a></div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">White Solo 2 Wireless</a>
                                                    </h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$110,00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img4.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Smartwatches</a></div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">Smartwatch 2.0 LTE
                                                            Wifi</a></h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$110,00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0 remove-divider-xl">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img5.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Smartwatches</a></div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">Gear Virtual Reality</a>
                                                    </h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$799,00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card d-none d-wd-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img6.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Gadgets</a></div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">External SSD USB 3.1 750
                                                            GB</a></h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$799,00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card d-none d-wd-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0 remove-divider-wd">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img8.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Cameras</a></div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">Purple NX Mini F1 aparat
                                                            SMART NX</a></h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$559.00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="js-slide">
                            <ul class="row list-unstyled products-group no-gutters mb-0 overflow-visible">
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img1.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Tablets</a></div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">Tablet Air 3 WiFi 64GB
                                                            Gold</a></h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$629,00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img2.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Laptops & Computers</a>
                                                    </div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">Tablet White EliteBook
                                                            Revolve 810 G2</a></h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$1 299,00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 remove-divider-xl">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img3.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Accesories</a></div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">Pendrive USB 3.0 Flash 64
                                                            GB</a></h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$110,00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0 remove-divider-wd">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img7.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Headphones</a></div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">White Solo 2 Wireless</a>
                                                    </h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$110,00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img4.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Smartwatches</a></div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">Smartwatch 2.0 LTE
                                                            Wifi</a></h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$110,00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0 remove-divider-xl">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img5.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Smartwatches</a></div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">Gear Virtual Reality</a>
                                                    </h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$799,00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card d-none d-wd-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img6.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Gadgets</a></div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">External SSD USB 3.1 750
                                                            GB</a></h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$799,00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card d-none d-wd-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0 remove-divider-wd">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img8.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Cameras</a></div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">Purple NX Mini F1 aparat
                                                            SMART NX</a></h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$559.00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="js-slide">
                            <ul class="row list-unstyled products-group no-gutters mb-0 overflow-visible">
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img1.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Tablets</a></div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">Tablet Air 3 WiFi 64GB
                                                            Gold</a></h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$629,00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img2.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Laptops & Computers</a>
                                                    </div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">Tablet White EliteBook
                                                            Revolve 810 G2</a></h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$1 299,00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 remove-divider-xl">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img3.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Accesories</a></div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">Pendrive USB 3.0 Flash 64
                                                            GB</a></h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$110,00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0 remove-divider-wd">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img7.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Headphones</a></div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">White Solo 2 Wireless</a>
                                                    </h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$110,00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img4.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Smartwatches</a></div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">Smartwatch 2.0 LTE
                                                            Wifi</a></h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$110,00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0 remove-divider-xl">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img5.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Smartwatches</a></div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">Gear Virtual Reality</a>
                                                    </h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$799,00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card d-none d-wd-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img6.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Gadgets</a></div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">External SSD USB 3.1 750
                                                            GB</a></h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$799,00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    class="col-wd-3 col-md-4 product-item product-item__card d-none d-wd-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0 remove-divider-wd">
                                    <div class="product-item__outer h-100">
                                        <div class="product-item__inner p-md-3 row no-gutters">
                                            <div class="col col-lg-auto product-media-left">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    class="max-width-150 d-block"><img class="img-fluid"
                                                        src="../../assets/img/150X140/img8.jpg"
                                                        alt="Image Description"></a>
                                            </div>
                                            <div class="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                                                <div class="mb-4">
                                                    <div class="mb-2"><a
                                                            href="../shop/product-categories-7-column-full-width.html"
                                                            class="font-size-12 text-gray-5">Cameras</a></div>
                                                    <h5 class="product-item__title"><a
                                                            href="../shop/single-product-fullwidth.html"
                                                            class="text-blue font-weight-bold">Purple NX Mini F1 aparat
                                                            SMART NX</a></h5>
                                                </div>
                                                <div class="flex-center-between mb-3">
                                                    <div class="prodcut-price">
                                                        <div class="text-gray-100">$559.00</div>
                                                    </div>
                                                    <div class="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html"
                                                            class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                class="ec ec-add-to-cart"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-item__footer">
                                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html"
                                                            class="text-gray-6 font-size-13"><i
                                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                                            Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
  `
})

/*
##########
# Full Banner #
##########
*/
Vue.component('full-banner', {
  props: ["category", "products"],
  template: `
  <div class="mb-6">
      <a href="../shop/shop.html" class="d-block text-gray-90">
          <div class="" style="background-image: url(../../assets/img/full-banner/01.png);">
              <div class="space-top-2-md p-4 pt-6 pt-md-8 pt-lg-6 pt-xl-8 pb-lg-4 px-xl-8 px-lg-6">
                  <div class="flex-horizontal-center mt-lg-3 mt-xl-0 overflow-auto overflow-md-visble">
                      <h1
                          class="text-lh-38 font-size-32 font-weight-light mb-0 flex-shrink-0 flex-md-shrink-1">
                          SHOP AND <strong>SAVE BIG</strong> ON HOTTEST TABLETS</h1>
                      <div class="ml-5 flex-content-center flex-shrink-0">
                          <div class="bg-primary rounded-lg px-6 py-2">
                              <em class="font-size-14 font-weight-light">STARTING AT</em>
                              <div class="font-size-30 font-weight-bold text-lh-1">
                                  <sup class="">$</sup>79<sup class="">99</sup>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </a>
  </div>
  `
})


/*
##########
# Gallery #
##########
*/
Vue.component('Gallery', {
  template: `
  <div class="products-group-4-1-4 space-1 bg-gray-7">
                  <h2 class="sr-only">Products Grid</h2>
                  <div class="container">
                      <!-- Nav Classic -->
                      <div class="position-relative text-center z-index-2 mb-3">
                          <ul class="nav nav-classic nav-tab nav-tab-sm px-md-3 justify-content-start justify-content-lg-center flex-nowrap flex-lg-wrap overflow-auto overflow-lg-visble border-md-down-bottom-0 pb-1 pb-lg-0 mb-n1 mb-lg-0"
                              id="pills-tab-1" role="tablist">
                              <li class="nav-item flex-shrink-0 flex-lg-shrink-1">
                                  <a class="nav-link active " id="Tpills-one-example1-tab" data-toggle="pill"
                                      href="#Tpills-one-example1" role="tab" aria-controls="Tpills-one-example1"
                                      aria-selected="true">
                                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                                          Best Deals
                                      </div>
                                  </a>
                              </li>
                              <li class="nav-item flex-shrink-0 flex-lg-shrink-1">
                                  <a class="nav-link " id="Tpills-two-example1-tab" data-toggle="pill"
                                      href="#Tpills-two-example1" role="tab" aria-controls="Tpills-two-example1"
                                      aria-selected="false">
                                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                                          TV & Video
                                      </div>
                                  </a>
                              </li>
                              <li class="nav-item flex-shrink-0 flex-lg-shrink-1">
                                  <a class="nav-link " id="Tpills-three-example1-tab" data-toggle="pill"
                                      href="#Tpills-three-example1" role="tab" aria-controls="Tpills-three-example1"
                                      aria-selected="false">
                                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                                          Cameras
                                      </div>
                                  </a>
                              </li>
                              <li class="nav-item flex-shrink-0 flex-lg-shrink-1">
                                  <a class="nav-link " id="Tpills-four-example1-tab" data-toggle="pill"
                                      href="#Tpills-four-example1" role="tab" aria-controls="Tpills-four-example1"
                                      aria-selected="false">
                                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                                          Audio
                                      </div>
                                  </a>
                              </li>
                              <li class="nav-item flex-shrink-0 flex-lg-shrink-1">
                                  <a class="nav-link " id="Tpills-five-example1-tab" data-toggle="pill"
                                      href="#Tpills-five-example1" role="tab" aria-controls="Tpills-five-example1"
                                      aria-selected="false">
                                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                                          Smartphones
                                      </div>
                                  </a>
                              </li>
                              <li class="nav-item flex-shrink-0 flex-lg-shrink-1">
                                  <a class="nav-link " id="Tpills-six-example1-tab" data-toggle="pill"
                                      href="#Tpills-six-example1" role="tab" aria-controls="Tpills-six-example1"
                                      aria-selected="false">
                                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                                          GPS & Navi
                                      </div>
                                  </a>
                              </li>
                              <li class="nav-item flex-shrink-0 flex-lg-shrink-1">
                                  <a class="nav-link " id="Tpills-seven-example1-tab" data-toggle="pill"
                                      href="#Tpills-seven-example1" role="tab" aria-controls="Tpills-seven-example1"
                                      aria-selected="false">
                                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                                          Computers
                                      </div>
                                  </a>
                              </li>
                              <li class="nav-item flex-shrink-0 flex-lg-shrink-1">
                                  <a class="nav-link " id="Tpills-eight-example1-tab" data-toggle="pill"
                                      href="#Tpills-eight-example1" role="tab" aria-controls="Tpills-eight-example1"
                                      aria-selected="false">
                                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                                          Portable Audio
                                      </div>
                                  </a>
                              </li>
                              <li class="nav-item flex-shrink-0 flex-lg-shrink-1">
                                  <a class="nav-link " id="Tpills-nine-example1-tab" data-toggle="pill"
                                      href="#Tpills-nine-example1" role="tab" aria-controls="Tpills-nine-example1"
                                      aria-selected="false">
                                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                                          Accessories
                                      </div>
                                  </a>
                              </li>
                          </ul>
                      </div>
                      <!-- End Nav Classic -->
  
                      <!-- Tab Content -->
                      <div class="tab-content" id="Tpills-tabContent">
                          <div class="tab-pane fade pt-2 show active" id="Tpills-one-example1" role="tabpanel"
                              aria-labelledby="Tpills-one-example1-tab">
                              <div class="row no-gutters">
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul
                                          class="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Tablet White
                                                                  EliteBook Revolve 810 G2</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img2.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">GameConsole Destiny
                                                                  Special Edition</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img7.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-6 col-wd-4 products-group-1">
                                      <ul class="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                          <li class="col product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body d-flex flex-column">
                                                          <div class="mb-1">
                                                              <div class="mb-2"><a
                                                                      href="../shop/product-categories-7-column-full-width.html"
                                                                      class="font-size-12 text-gray-5">Game Consoles</a>
                                                              </div>
                                                              <h5 class="mb-0 product-item__title"><a
                                                                      href="../shop/single-product-fullwidth.html"
                                                                      class="text-blue font-weight-bold">Game Console
                                                                      Controller + USB 3.0 Cable</a></h5>
                                                          </div>
                                                          <div class="mb-1 min-height-4-1-4">
                                                              <a href="#"
                                                                  class="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5"><img
                                                                      class="img-fluid"
                                                                      src="../../assets/img/564X520/img2.jpg"
                                                                      alt="Image Description"></a>
                                                              <!-- Gallery -->
                                                              <div class="row mx-gutters-2 mb-3">
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img1.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #01"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img1.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img2.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #02"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img2.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img3.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #03"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img3.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
                                                                  <div class="col"></div>
                                                              </div>
                                                              <!-- End Gallery -->
                                                          </div>
                                                          <div class="flex-center-between">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart mr-2"></i> Add to
                                                                      Cart</a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul
                                          class="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Tablet White
                                                                  EliteBook Revolve 810 G2</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img2.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">GameConsole Destiny
                                                                  Special Edition</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img7.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade pt-2" id="Tpills-two-example1" role="tabpanel"
                              aria-labelledby="Tpills-two-example1-tab">
                              <div class="row no-gutters">
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul
                                          class="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Tablet White
                                                                  EliteBook Revolve 810 G2</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img2.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">GameConsole Destiny
                                                                  Special Edition</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img7.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-6 col-wd-4 products-group-1">
                                      <ul class="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                          <li class="col product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body d-flex flex-column">
                                                          <div class="mb-1">
                                                              <div class="mb-2"><a
                                                                      href="../shop/product-categories-7-column-full-width.html"
                                                                      class="font-size-12 text-gray-5">Game Consoles</a>
                                                              </div>
                                                              <h5 class="mb-0 product-item__title"><a
                                                                      href="../shop/single-product-fullwidth.html"
                                                                      class="text-blue font-weight-bold">Game Console
                                                                      Controller + USB 3.0 Cable</a></h5>
                                                          </div>
                                                          <div class="mb-1 min-height-4-1-4">
                                                              <a href="#"
                                                                  class="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5"><img
                                                                      class="img-fluid"
                                                                      src="../../assets/img/564X520/img2.jpg"
                                                                      alt="Image Description"></a>
                                                              <!-- Gallery -->
                                                              <div class="row mx-gutters-2 mb-3">
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img1.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #01"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img1.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img2.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #02"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img2.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img3.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #03"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img3.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
                                                                  <div class="col"></div>
                                                              </div>
                                                              <!-- End Gallery -->
                                                          </div>
                                                          <div class="flex-center-between">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart mr-2"></i> Add to
                                                                      Cart</a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul
                                          class="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Tablet White
                                                                  EliteBook Revolve 810 G2</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img2.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">GameConsole Destiny
                                                                  Special Edition</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img7.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade pt-2" id="Tpills-three-example1" role="tabpanel"
                              aria-labelledby="Tpills-three-example1-tab">
                              <div class="row no-gutters">
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul
                                          class="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Tablet White
                                                                  EliteBook Revolve 810 G2</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img2.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">GameConsole Destiny
                                                                  Special Edition</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img7.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-6 col-wd-4 products-group-1">
                                      <ul class="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                          <li class="col product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body d-flex flex-column">
                                                          <div class="mb-1">
                                                              <div class="mb-2"><a
                                                                      href="../shop/product-categories-7-column-full-width.html"
                                                                      class="font-size-12 text-gray-5">Game Consoles</a>
                                                              </div>
                                                              <h5 class="mb-0 product-item__title"><a
                                                                      href="../shop/single-product-fullwidth.html"
                                                                      class="text-blue font-weight-bold">Game Console
                                                                      Controller + USB 3.0 Cable</a></h5>
                                                          </div>
                                                          <div class="mb-1 min-height-4-1-4">
                                                              <a href="#"
                                                                  class="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5"><img
                                                                      class="img-fluid"
                                                                      src="../../assets/img/564X520/img2.jpg"
                                                                      alt="Image Description"></a>
                                                              <!-- Gallery -->
                                                              <div class="row mx-gutters-2 mb-3">
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img1.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #01"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img1.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img2.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #02"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img2.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img3.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #03"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img3.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
                                                                  <div class="col"></div>
                                                              </div>
                                                              <!-- End Gallery -->
                                                          </div>
                                                          <div class="flex-center-between">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart mr-2"></i> Add to
                                                                      Cart</a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul
                                          class="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Tablet White
                                                                  EliteBook Revolve 810 G2</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img2.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">GameConsole Destiny
                                                                  Special Edition</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img7.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade pt-2" id="Tpills-four-example1" role="tabpanel"
                              aria-labelledby="Tpills-four-example1-tab">
                              <div class="row no-gutters">
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul
                                          class="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Tablet White
                                                                  EliteBook Revolve 810 G2</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img2.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">GameConsole Destiny
                                                                  Special Edition</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img7.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-6 col-wd-4 products-group-1">
                                      <ul class="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                          <li class="col product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body d-flex flex-column">
                                                          <div class="mb-1">
                                                              <div class="mb-2"><a
                                                                      href="../shop/product-categories-7-column-full-width.html"
                                                                      class="font-size-12 text-gray-5">Game Consoles</a>
                                                              </div>
                                                              <h5 class="mb-0 product-item__title"><a
                                                                      href="../shop/single-product-fullwidth.html"
                                                                      class="text-blue font-weight-bold">Game Console
                                                                      Controller + USB 3.0 Cable</a></h5>
                                                          </div>
                                                          <div class="mb-1 min-height-4-1-4">
                                                              <a href="#"
                                                                  class="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5"><img
                                                                      class="img-fluid"
                                                                      src="../../assets/img/564X520/img2.jpg"
                                                                      alt="Image Description"></a>
                                                              <!-- Gallery -->
                                                              <div class="row mx-gutters-2 mb-3">
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img1.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #01"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img1.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img2.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #02"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img2.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img3.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #03"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img3.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
                                                                  <div class="col"></div>
                                                              </div>
                                                              <!-- End Gallery -->
                                                          </div>
                                                          <div class="flex-center-between">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart mr-2"></i> Add to
                                                                      Cart</a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul
                                          class="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Tablet White
                                                                  EliteBook Revolve 810 G2</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img2.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">GameConsole Destiny
                                                                  Special Edition</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img7.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade pt-2" id="Tpills-five-example1" role="tabpanel"
                              aria-labelledby="Tpills-five-example1-tab">
                              <div class="row no-gutters">
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul
                                          class="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Tablet White
                                                                  EliteBook Revolve 810 G2</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img2.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">GameConsole Destiny
                                                                  Special Edition</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img7.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-6 col-wd-4 products-group-1">
                                      <ul class="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                          <li class="col product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body d-flex flex-column">
                                                          <div class="mb-1">
                                                              <div class="mb-2"><a
                                                                      href="../shop/product-categories-7-column-full-width.html"
                                                                      class="font-size-12 text-gray-5">Game Consoles</a>
                                                              </div>
                                                              <h5 class="mb-0 product-item__title"><a
                                                                      href="../shop/single-product-fullwidth.html"
                                                                      class="text-blue font-weight-bold">Game Console
                                                                      Controller + USB 3.0 Cable</a></h5>
                                                          </div>
                                                          <div class="mb-1 min-height-4-1-4">
                                                              <a href="#"
                                                                  class="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5"><img
                                                                      class="img-fluid"
                                                                      src="../../assets/img/564X520/img2.jpg"
                                                                      alt="Image Description"></a>
                                                              <!-- Gallery -->
                                                              <div class="row mx-gutters-2 mb-3">
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img1.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #01"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img1.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img2.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #02"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img2.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img3.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #03"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img3.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
                                                                  <div class="col"></div>
                                                              </div>
                                                              <!-- End Gallery -->
                                                          </div>
                                                          <div class="flex-center-between">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart mr-2"></i> Add to
                                                                      Cart</a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul
                                          class="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Tablet White
                                                                  EliteBook Revolve 810 G2</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img2.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">GameConsole Destiny
                                                                  Special Edition</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img7.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade pt-2" id="Tpills-six-example1" role="tabpanel"
                              aria-labelledby="Tpills-six-example1-tab">
                              <div class="row no-gutters">
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul
                                          class="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Tablet White
                                                                  EliteBook Revolve 810 G2</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img2.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">GameConsole Destiny
                                                                  Special Edition</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img7.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-6 col-wd-4 products-group-1">
                                      <ul class="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                          <li class="col product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body d-flex flex-column">
                                                          <div class="mb-1">
                                                              <div class="mb-2"><a
                                                                      href="../shop/product-categories-7-column-full-width.html"
                                                                      class="font-size-12 text-gray-5">Game Consoles</a>
                                                              </div>
                                                              <h5 class="mb-0 product-item__title"><a
                                                                      href="../shop/single-product-fullwidth.html"
                                                                      class="text-blue font-weight-bold">Game Console
                                                                      Controller + USB 3.0 Cable</a></h5>
                                                          </div>
                                                          <div class="mb-1 min-height-4-1-4">
                                                              <a href="#"
                                                                  class="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5"><img
                                                                      class="img-fluid"
                                                                      src="../../assets/img/564X520/img2.jpg"
                                                                      alt="Image Description"></a>
                                                              <!-- Gallery -->
                                                              <div class="row mx-gutters-2 mb-3">
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img1.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #01"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img1.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img2.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #02"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img2.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img3.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #03"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img3.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
                                                                  <div class="col"></div>
                                                              </div>
                                                              <!-- End Gallery -->
                                                          </div>
                                                          <div class="flex-center-between">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart mr-2"></i> Add to
                                                                      Cart</a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul
                                          class="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Tablet White
                                                                  EliteBook Revolve 810 G2</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img2.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">GameConsole Destiny
                                                                  Special Edition</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img7.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade pt-2" id="Tpills-seven-example1" role="tabpanel"
                              aria-labelledby="Tpills-seven-example1-tab">
                              <div class="row no-gutters">
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul
                                          class="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Tablet White
                                                                  EliteBook Revolve 810 G2</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img2.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">GameConsole Destiny
                                                                  Special Edition</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img7.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-6 col-wd-4 products-group-1">
                                      <ul class="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                          <li class="col product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body d-flex flex-column">
                                                          <div class="mb-1">
                                                              <div class="mb-2"><a
                                                                      href="../shop/product-categories-7-column-full-width.html"
                                                                      class="font-size-12 text-gray-5">Game Consoles</a>
                                                              </div>
                                                              <h5 class="mb-0 product-item__title"><a
                                                                      href="../shop/single-product-fullwidth.html"
                                                                      class="text-blue font-weight-bold">Game Console
                                                                      Controller + USB 3.0 Cable</a></h5>
                                                          </div>
                                                          <div class="mb-1 min-height-4-1-4">
                                                              <a href="#"
                                                                  class="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5"><img
                                                                      class="img-fluid"
                                                                      src="../../assets/img/564X520/img2.jpg"
                                                                      alt="Image Description"></a>
                                                              <!-- Gallery -->
                                                              <div class="row mx-gutters-2 mb-3">
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img1.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #01"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img1.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img2.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #02"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img2.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img3.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #03"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img3.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
                                                                  <div class="col"></div>
                                                              </div>
                                                              <!-- End Gallery -->
                                                          </div>
                                                          <div class="flex-center-between">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart mr-2"></i> Add to
                                                                      Cart</a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul
                                          class="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Tablet White
                                                                  EliteBook Revolve 810 G2</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img2.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">GameConsole Destiny
                                                                  Special Edition</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img7.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade pt-2" id="Tpills-eight-example1" role="tabpanel"
                              aria-labelledby="Tpills-eight-example1-tab">
                              <div class="row no-gutters">
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul
                                          class="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Tablet White
                                                                  EliteBook Revolve 810 G2</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img2.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">GameConsole Destiny
                                                                  Special Edition</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img7.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-6 col-wd-4 products-group-1">
                                      <ul class="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                          <li class="col product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body d-flex flex-column">
                                                          <div class="mb-1">
                                                              <div class="mb-2"><a
                                                                      href="../shop/product-categories-7-column-full-width.html"
                                                                      class="font-size-12 text-gray-5">Game Consoles</a>
                                                              </div>
                                                              <h5 class="mb-0 product-item__title"><a
                                                                      href="../shop/single-product-fullwidth.html"
                                                                      class="text-blue font-weight-bold">Game Console
                                                                      Controller + USB 3.0 Cable</a></h5>
                                                          </div>
                                                          <div class="mb-1 min-height-4-1-4">
                                                              <a href="#"
                                                                  class="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5"><img
                                                                      class="img-fluid"
                                                                      src="../../assets/img/564X520/img2.jpg"
                                                                      alt="Image Description"></a>
                                                              <!-- Gallery -->
                                                              <div class="row mx-gutters-2 mb-3">
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img1.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #01"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img1.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img2.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #02"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img2.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img3.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #03"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img3.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
                                                                  <div class="col"></div>
                                                              </div>
                                                              <!-- End Gallery -->
                                                          </div>
                                                          <div class="flex-center-between">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart mr-2"></i> Add to
                                                                      Cart</a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul
                                          class="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Tablet White
                                                                  EliteBook Revolve 810 G2</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img2.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">GameConsole Destiny
                                                                  Special Edition</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img7.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade pt-2" id="Tpills-nine-example1" role="tabpanel"
                              aria-labelledby="Tpills-nine-example1-tab">
                              <div class="row no-gutters">
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul
                                          class="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Tablet White
                                                                  EliteBook Revolve 810 G2</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img2.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">GameConsole Destiny
                                                                  Special Edition</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img7.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-6 col-wd-4 products-group-1">
                                      <ul class="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                          <li class="col product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body d-flex flex-column">
                                                          <div class="mb-1">
                                                              <div class="mb-2"><a
                                                                      href="../shop/product-categories-7-column-full-width.html"
                                                                      class="font-size-12 text-gray-5">Game Consoles</a>
                                                              </div>
                                                              <h5 class="mb-0 product-item__title"><a
                                                                      href="../shop/single-product-fullwidth.html"
                                                                      class="text-blue font-weight-bold">Game Console
                                                                      Controller + USB 3.0 Cable</a></h5>
                                                          </div>
                                                          <div class="mb-1 min-height-4-1-4">
                                                              <a href="#"
                                                                  class="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5"><img
                                                                      class="img-fluid"
                                                                      src="../../assets/img/564X520/img2.jpg"
                                                                      alt="Image Description"></a>
                                                              <!-- Gallery -->
                                                              <div class="row mx-gutters-2 mb-3">
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img1.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #01"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img1.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img2.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #02"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img2.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <!-- Gallery -->
                                                                      <a class="js-fancybox max-width-60 u-media-viewer"
                                                                          href="javascript:;"
                                                                          data-src="../../assets/img/1920X1080/img3.jpg"
                                                                          data-fancybox="fancyboxGallery6"
                                                                          data-caption="Electro in frames - image #03"
                                                                          data-speed="700" data-is-infinite="true">
                                                                          <img class="img-fluid border"
                                                                              src="../../assets/img/100X100/img3.jpg"
                                                                              alt="Image Description">
  
                                                                          <span class="u-media-viewer__container">
                                                                              <span class="u-media-viewer__icon">
                                                                                  <span
                                                                                      class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                              </span>
                                                                          </span>
                                                                      </a>
                                                                      <!-- End Gallery -->
                                                                  </div>
                                                                  <div class="col"></div>
                                                              </div>
                                                              <!-- End Gallery -->
                                                          </div>
                                                          <div class="flex-center-between">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart mr-2"></i> Add to
                                                                      Cart</a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul
                                          class="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-6 product-item max-width-xl-100 remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Tablet White
                                                                  EliteBook Revolve 810 G2</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img2.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">Wireless Audio System
                                                                  Multiroom 360 degree Full base audio</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img1.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li
                                              class="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                              <div class="product-item__outer h-100 w-100 prodcut-box-shadow">
                                                  <div class="product-item__inner bg-white p-3">
                                                      <div class="product-item__body pb-xl-2">
                                                          <div class="mb-2"><a
                                                                  href="../shop/product-categories-7-column-full-width.html"
                                                                  class="font-size-12 text-gray-5">Speakers</a></div>
                                                          <h5 class="mb-1 product-item__title"><a
                                                                  href="../shop/single-product-fullwidth.html"
                                                                  class="text-blue font-weight-bold">GameConsole Destiny
                                                                  Special Edition</a></h5>
                                                          <div class="mb-2">
                                                              <a href="../shop/single-product-fullwidth.html"
                                                                  class="d-block text-center"><img class="img-fluid"
                                                                      src="../../assets/img/212X200/img7.jpg"
                                                                      alt="Image Description"></a>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="prodcut-price">
                                                                  <div class="text-gray-100">$685,00</div>
                                                              </div>
                                                              <div class="d-none d-xl-block prodcut-add-cart">
                                                                  <a href="../shop/single-product-fullwidth.html"
                                                                      class="btn-add-cart btn-primary transition-3d-hover"><i
                                                                          class="ec ec-add-to-cart"></i></a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="product-item__footer">
                                                          <div class="border-top pt-2 flex-center-between flex-wrap">
                                                              <a href="../shop/compare.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-compare mr-1 font-size-15"></i>
                                                                  Compare</a>
                                                              <a href="../shop/wishlist.html"
                                                                  class="text-gray-6 font-size-13"><i
                                                                      class="ec ec-favorites mr-1 font-size-15"></i> Add
                                                                  to Wishlist</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!-- End Tab Content -->
                  </div>
  
                  <!-- Features Section -->
                  <div class="container space-2 d-none">
                      <!-- Nav Classic -->
                      <div class="position-relative text-center z-index-2 mb-3">
                          <ul class="nav nav-classic nav-tab nav-tab-sm px-md-3 justify-content-start justify-content-lg-center flex-nowrap flex-lg-wrap overflow-auto overflow-lg-visble border-md-down-bottom-0 pb-1 pb-lg-0 mb-n1 mb-lg-0"
                              id="pills-tab-2" role="tablist">
                              <li class="nav-item flex-shrink-0 flex-lg-shrink-1">
                                  <a class="nav-link active " id="Gpills-one-example1-tab" data-toggle="pill"
                                      href="#Gpills-one-example1" role="tab" aria-controls="Gpills-one-example1"
                                      aria-selected="true">
                                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                                          Best Deals
                                      </div>
                                  </a>
                              </li>
                              <li class="nav-item flex-shrink-0 flex-lg-shrink-1">
                                  <a class="nav-link " id="Gpills-two-example1-tab" data-toggle="pill"
                                      href="#Gpills-two-example1" role="tab" aria-controls="Gpills-two-example1"
                                      aria-selected="false">
                                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                                          TV & Video
                                      </div>
                                  </a>
                              </li>
                              <li class="nav-item flex-shrink-0 flex-lg-shrink-1">
                                  <a class="nav-link " id="Gpills-three-example1-tab" data-toggle="pill"
                                      href="#Gpills-three-example1" role="tab" aria-controls="Gpills-three-example1"
                                      aria-selected="false">
                                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                                          Cameras
                                      </div>
                                  </a>
                              </li>
                              <li class="nav-item flex-shrink-0 flex-lg-shrink-1">
                                  <a class="nav-link " id="Gpills-four-example1-tab" data-toggle="pill"
                                      href="#Gpills-four-example1" role="tab" aria-controls="Gpills-four-example1"
                                      aria-selected="false">
                                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                                          Audio
                                      </div>
                                  </a>
                              </li>
                              <li class="nav-item flex-shrink-0 flex-lg-shrink-1">
                                  <a class="nav-link " id="Gpills-five-example1-tab" data-toggle="pill"
                                      href="#Gpills-five-example1" role="tab" aria-controls="Gpills-five-example1"
                                      aria-selected="false">
                                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                                          Smartphones
                                      </div>
                                  </a>
                              </li>
                              <li class="nav-item flex-shrink-0 flex-lg-shrink-1">
                                  <a class="nav-link " id="Gpills-six-example1-tab" data-toggle="pill"
                                      href="#Gpills-six-example1" role="tab" aria-controls="Gpills-six-example1"
                                      aria-selected="false">
                                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                                          GPS & Navi
                                      </div>
                                  </a>
                              </li>
                              <li class="nav-item flex-shrink-0 flex-lg-shrink-1">
                                  <a class="nav-link " id="Gpills-seven-example1-tab" data-toggle="pill"
                                      href="#Gpills-seven-example1" role="tab" aria-controls="Gpills-seven-example1"
                                      aria-selected="false">
                                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                                          Computers
                                      </div>
                                  </a>
                              </li>
                              <li class="nav-item flex-shrink-0 flex-lg-shrink-1">
                                  <a class="nav-link " id="Gpills-eight-example1-tab" data-toggle="pill"
                                      href="#Gpills-eight-example1" role="tab" aria-controls="Gpills-eight-example1"
                                      aria-selected="false">
                                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                                          Portable Audio
                                      </div>
                                  </a>
                              </li>
                              <li class="nav-item flex-shrink-0 flex-lg-shrink-1">
                                  <a class="nav-link " id="Gpills-nine-example1-tab" data-toggle="pill"
                                      href="#Gpills-nine-example1" role="tab" aria-controls="Gpills-nine-example1"
                                      aria-selected="false">
                                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                                          Accessories
                                      </div>
                                  </a>
                              </li>
                          </ul>
                      </div>
                      <!-- End Nav Classic -->
  
                      <!-- Tab Content -->
                      <div class="tab-content" id="Gpills-tabContent">
                          <div class="tab-pane fade pt-2 show active" id="Gpills-one-example1" role="tabpanel"
                              aria-labelledby="Gpills-one-example1-tab">
                              <div class="row no-gutters">
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul class="row list-unstyled products-group no-gutters mb-0 w-100">
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-6 col-wd-4 products-group-1">
                                      <ul class="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                          <li class="col product-item remove-divider">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="d-flex flex-column">
                                                          <div class="mb-1">
                                                              <div class="mb-2">
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-10 w-40">
                                                                  </div>
                                                              </div>
                                                              <div class="mb-3">
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-12 mb-1 w-90">
                                                                  </div>
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-450"></div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <!-- Gallery -->
                                                              <div class="row mx-gutters-2">
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
                                                                  <div class="col"></div>
                                                              </div>
                                                              <!-- End Gallery -->
                                                          </div>
                                                          <div class="flex-center-between">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-40">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-134 rounded-pill">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul class="row list-unstyled products-group no-gutters mb-0 w-100">
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade pt-2" id="Gpills-two-example1" role="tabpanel"
                              aria-labelledby="Gpills-two-example1-tab">
                              <div class="row no-gutters">
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul class="row list-unstyled products-group no-gutters mb-0 w-100">
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-6 col-wd-4 products-group-1">
                                      <ul class="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                          <li class="col product-item remove-divider">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="d-flex flex-column">
                                                          <div class="mb-1">
                                                              <div class="mb-2">
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-10 w-40">
                                                                  </div>
                                                              </div>
                                                              <div class="mb-3">
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-12 mb-1 w-90">
                                                                  </div>
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-450"></div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <!-- Gallery -->
                                                              <div class="row mx-gutters-2">
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
                                                                  <div class="col"></div>
                                                              </div>
                                                              <!-- End Gallery -->
                                                          </div>
                                                          <div class="flex-center-between">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-40">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-134 rounded-pill">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul class="row list-unstyled products-group no-gutters mb-0 w-100">
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade pt-2" id="Gpills-three-example1" role="tabpanel"
                              aria-labelledby="Gpills-three-example1-tab">
                              <div class="row no-gutters">
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul class="row list-unstyled products-group no-gutters mb-0 w-100">
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-6 col-wd-4 products-group-1">
                                      <ul class="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                          <li class="col product-item remove-divider">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="d-flex flex-column">
                                                          <div class="mb-1">
                                                              <div class="mb-2">
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-10 w-40">
                                                                  </div>
                                                              </div>
                                                              <div class="mb-3">
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-12 mb-1 w-90">
                                                                  </div>
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-450"></div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <!-- Gallery -->
                                                              <div class="row mx-gutters-2">
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
                                                                  <div class="col"></div>
                                                              </div>
                                                              <!-- End Gallery -->
                                                          </div>
                                                          <div class="flex-center-between">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-40">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-134 rounded-pill">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul class="row list-unstyled products-group no-gutters mb-0 w-100">
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade pt-2" id="Gpills-four-example1" role="tabpanel"
                              aria-labelledby="Gpills-four-example1-tab">
                              <div class="row no-gutters">
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul class="row list-unstyled products-group no-gutters mb-0 w-100">
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-6 col-wd-4 products-group-1">
                                      <ul class="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                          <li class="col product-item remove-divider">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="d-flex flex-column">
                                                          <div class="mb-1">
                                                              <div class="mb-2">
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-10 w-40">
                                                                  </div>
                                                              </div>
                                                              <div class="mb-3">
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-12 mb-1 w-90">
                                                                  </div>
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-450"></div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <!-- Gallery -->
                                                              <div class="row mx-gutters-2">
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
                                                                  <div class="col"></div>
                                                              </div>
                                                              <!-- End Gallery -->
                                                          </div>
                                                          <div class="flex-center-between">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-40">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-134 rounded-pill">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul class="row list-unstyled products-group no-gutters mb-0 w-100">
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade pt-2" id="Gpills-five-example1" role="tabpanel"
                              aria-labelledby="Gpills-five-example1-tab">
                              <div class="row no-gutters">
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul class="row list-unstyled products-group no-gutters mb-0 w-100">
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-6 col-wd-4 products-group-1">
                                      <ul class="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                          <li class="col product-item remove-divider">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="d-flex flex-column">
                                                          <div class="mb-1">
                                                              <div class="mb-2">
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-10 w-40">
                                                                  </div>
                                                              </div>
                                                              <div class="mb-3">
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-12 mb-1 w-90">
                                                                  </div>
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-450"></div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <!-- Gallery -->
                                                              <div class="row mx-gutters-2">
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
                                                                  <div class="col"></div>
                                                              </div>
                                                              <!-- End Gallery -->
                                                          </div>
                                                          <div class="flex-center-between">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-40">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-134 rounded-pill">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul class="row list-unstyled products-group no-gutters mb-0 w-100">
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade pt-2" id="Gpills-six-example1" role="tabpanel"
                              aria-labelledby="Gpills-six-example1-tab">
                              <div class="row no-gutters">
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul class="row list-unstyled products-group no-gutters mb-0 w-100">
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-6 col-wd-4 products-group-1">
                                      <ul class="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                          <li class="col product-item remove-divider">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="d-flex flex-column">
                                                          <div class="mb-1">
                                                              <div class="mb-2">
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-10 w-40">
                                                                  </div>
                                                              </div>
                                                              <div class="mb-3">
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-12 mb-1 w-90">
                                                                  </div>
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-450"></div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <!-- Gallery -->
                                                              <div class="row mx-gutters-2">
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
                                                                  <div class="col"></div>
                                                              </div>
                                                              <!-- End Gallery -->
                                                          </div>
                                                          <div class="flex-center-between">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-40">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-134 rounded-pill">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul class="row list-unstyled products-group no-gutters mb-0 w-100">
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade pt-2" id="Gpills-seven-example1" role="tabpanel"
                              aria-labelledby="Gpills-seven-example1-tab">
                              <div class="row no-gutters">
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul class="row list-unstyled products-group no-gutters mb-0 w-100">
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-6 col-wd-4 products-group-1">
                                      <ul class="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                          <li class="col product-item remove-divider">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="d-flex flex-column">
                                                          <div class="mb-1">
                                                              <div class="mb-2">
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-10 w-40">
                                                                  </div>
                                                              </div>
                                                              <div class="mb-3">
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-12 mb-1 w-90">
                                                                  </div>
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-450"></div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <!-- Gallery -->
                                                              <div class="row mx-gutters-2">
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
                                                                  <div class="col"></div>
                                                              </div>
                                                              <!-- End Gallery -->
                                                          </div>
                                                          <div class="flex-center-between">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-40">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-134 rounded-pill">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul class="row list-unstyled products-group no-gutters mb-0 w-100">
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade pt-2" id="Gpills-eight-example1" role="tabpanel"
                              aria-labelledby="Gpills-eight-example1-tab">
                              <div class="row no-gutters">
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul class="row list-unstyled products-group no-gutters mb-0 w-100">
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-6 col-wd-4 products-group-1">
                                      <ul class="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                          <li class="col product-item remove-divider">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="d-flex flex-column">
                                                          <div class="mb-1">
                                                              <div class="mb-2">
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-10 w-40">
                                                                  </div>
                                                              </div>
                                                              <div class="mb-3">
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-12 mb-1 w-90">
                                                                  </div>
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-450"></div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <!-- Gallery -->
                                                              <div class="row mx-gutters-2">
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
                                                                  <div class="col"></div>
                                                              </div>
                                                              <!-- End Gallery -->
                                                          </div>
                                                          <div class="flex-center-between">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-40">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-134 rounded-pill">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul class="row list-unstyled products-group no-gutters mb-0 w-100">
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade pt-2" id="Gpills-nine-example1" role="tabpanel"
                              aria-labelledby="Gpills-nine-example1-tab">
                              <div class="row no-gutters">
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul class="row list-unstyled products-group no-gutters mb-0 w-100">
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-6 col-wd-4 products-group-1">
                                      <ul class="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                          <li class="col product-item remove-divider">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="d-flex flex-column">
                                                          <div class="mb-1">
                                                              <div class="mb-2">
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-10 w-40">
                                                                  </div>
                                                              </div>
                                                              <div class="mb-3">
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-12 mb-1 w-90">
                                                                  </div>
                                                                  <div
                                                                      class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-450"></div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <!-- Gallery -->
                                                              <div class="row mx-gutters-2">
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
  
                                                                  <div class="col-auto">
                                                                      <div class="bg-gray-1 width-60 height-60"></div>
                                                                  </div>
                                                                  <div class="col"></div>
                                                              </div>
                                                              <!-- End Gallery -->
                                                          </div>
                                                          <div class="flex-center-between">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-40">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-134 rounded-pill">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                      <ul class="row list-unstyled products-group no-gutters mb-0 w-100">
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                              <div class="h-100 w-100 prodcut-box-shadow">
                                                  <div class="bg-white p-3">
                                                      <div class="pb-xl-2">
                                                          <div class="mb-2">
                                                              <div class="bg-gray-1 bg-animation rounded height-10 w-60">
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                              <div class="bg-gray-1 bg-animation rounded height-12 mb-1">
                                                              </div>
                                                              <div class="bg-gray-1 bg-animation rounded height-12 w-80">
                                                              </div>
                                                          </div>
                                                          <div class="mb-4">
                                                              <div class="bg-gray-1 height-190"></div>
                                                          </div>
                                                          <div class="flex-center-between mb-1">
                                                              <div class="bg-gray-1 bg-animation rounded height-20 w-60">
                                                              </div>
                                                              <div class="bg-gray-1 height-35 width-35 rounded-circle">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!-- End Tab Content -->
                  </div>
                  <!-- End Features Section -->
              </div>
  `
})

/*
##########
# Tab #
##########
*/
Vue.component('Tab', {
  props: ['products'],
  template: `
  <div class="col">
    <!-- Features Section -->
    <div class="">
        <!-- Nav Classic -->
        <div class="position-relative bg-white text-center z-index-2">
            <ul class="nav nav-classic nav-tab justify-content-center" id="pills-tab"
                role="tablist">
                <li class="nav-item">
                    <a class="nav-link active " id="pills-one-example1-tab" data-toggle="pill"
                        href="#pills-one-example1" role="tab" aria-controls="pills-one-example1"
                        aria-selected="true">
                        <div class="d-md-flex justify-content-md-center align-items-md-center">
                            Populares
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " id="pills-two-example1-tab" data-toggle="pill"
                        href="#pills-two-example1" role="tab" aria-controls="pills-two-example1"
                        aria-selected="false">
                        <div class="d-md-flex justify-content-md-center align-items-md-center">
                            M??s vendidos
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " id="pills-three-example1-tab" data-toggle="pill"
                        href="#pills-three-example1" role="tab"
                        aria-controls="pills-three-example1" aria-selected="false">
                        <div class="d-md-flex justify-content-md-center align-items-md-center">
                            Recientes
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <!-- End Nav Classic -->

        <!-- Tab Content -->
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade pt-2 show active" id="pills-one-example1" role="tabpanel"
                aria-labelledby="pills-one-example1-tab">
                <ul class="row list-unstyled products-group no-gutters">

                    <li v-for="product in products.populars" class="col-6 col-md-3 col-xl-2 product-item">

                        <div class="product-item__outer h-100 product">
                            <div class="product-item__inner px-xl-4 p-3">
                                <div class="product-item__body pb-xl-2">
                                    <div class="mb-2"><a
                                            href="../shop/product-categories-7-column-full-width.html"
                                            class="font-size-12 text-gray-5">{{ product.category }}</a></div>
                                    <h5 class="mb-1 product-item__title">
                                        <a
                                            href="../shop/single-product-fullwidth.html"
                                            class="text-blue font-weight-bold">
                                            {{ product.title }}
                                        </a>
                                    </h5>

                                    <div class="mb-2">
                                        <a href="../shop/single-product-fullwidth.html"
                                            class="d-block text-center">
                                            
                                            <img class="img-fluid"
                                                :src="product.image"
                                                alt="Image Description"></a>
                                    </div>
                                    <div class="flex-center-between mb-1">
                                        <div class="prodcut-price">
                                            <div class="text-gray-100">
                                                {{ product.price + ".00$" }}
                                            </div>
                                        </div>
                                        <div class="d-none d-xl-block prodcut-add-cart">
                                            <a href="../shop/single-product-fullwidth.html"
                                                class="btn-add-cart btn-primary transition-3d-hover">
                                                <i class="ec ec-add-to-cart"></i>
                                                </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-item__footer">
                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                        <a href="../shop/compare.html"
                                            class="text-gray-6 font-size-13"><i
                                                class="ec ec-compare mr-1 font-size-15"></i>
                                            Compare</a>
                                        <a href="../shop/wishlist.html"
                                            class="text-gray-6 font-size-13"><i
                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                            Add to Wishlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </li>

                    
                </ul>
            </div>

            <div class="tab-pane fade pt-2" id="pills-two-example1" role="tabpanel"
                aria-labelledby="pills-two-example1-tab">
                <ul class="row list-unstyled products-group no-gutters">
                    
                <li v-for="product in products.bestSellers" class="col-6 col-md-3 col-xl-2 product-item">

                <div class="product-item__outer h-100 product">
                    <div class="product-item__inner px-xl-4 p-3">
                        <div class="product-item__body pb-xl-2">
                            <div class="mb-2"><a
                                    href="../shop/product-categories-7-column-full-width.html"
                                    class="font-size-12 text-gray-5">{{ product.category }}</a></div>
                            <h5 class="mb-1 product-item__title">
                                <a
                                    href="../shop/single-product-fullwidth.html"
                                    class="text-blue font-weight-bold">
                                    {{ product.title }}
                                </a>
                            </h5>

                            <div class="mb-2">
                                <a href="../shop/single-product-fullwidth.html"
                                    class="d-block text-center">
                                    
                                    <img class="img-fluid"
                                        :src="product.image"
                                        alt="Image Description"></a>
                            </div>
                            <div class="flex-center-between mb-1">
                                <div class="prodcut-price">
                                    <div class="text-gray-100">
                                        {{ product.price + "$" }}
                                    </div>
                                </div>
                                <div class="d-none d-xl-block prodcut-add-cart">
                                    <a href="../shop/single-product-fullwidth.html"
                                        class="btn-add-cart btn-primary transition-3d-hover">
                                        <i class="ec ec-add-to-cart"></i>
                                        </a>
                                </div>
                            </div>
                        </div>
                        <div class="product-item__footer">
                            <div class="border-top pt-2 flex-center-between flex-wrap">
                                <a href="../shop/compare.html"
                                    class="text-gray-6 font-size-13"><i
                                        class="ec ec-compare mr-1 font-size-15"></i>
                                    Compare</a>
                                <a href="../shop/wishlist.html"
                                    class="text-gray-6 font-size-13"><i
                                        class="ec ec-favorites mr-1 font-size-15"></i>
                                    Add to Wishlist</a>
                            </div>
                        </div>
                    </div>
                </div>

            </li>

                  
                  
                </ul>
            </div>
            <div class="tab-pane fade pt-2" id="pills-three-example1" role="tabpanel"
                aria-labelledby="pills-three-example1-tab">
                <ul class="row list-unstyled products-group no-gutters">
                    
                <li v-for="product in products.populars" class="col-6 col-md-3 col-xl-2 product-item">

                        <div class="product-item__outer h-100 product">
                            <div class="product-item__inner px-xl-4 p-3">
                                <div class="product-item__body pb-xl-2">
                                    <div class="mb-2"><a
                                            href="../shop/product-categories-7-column-full-width.html"
                                            class="font-size-12 text-gray-5">{{ product.category }}</a></div>
                                    <h5 class="mb-1 product-item__title">
                                        <a
                                            href="../shop/single-product-fullwidth.html"
                                            class="text-blue font-weight-bold">
                                            {{ product.title }}
                                        </a>
                                    </h5>

                                    <div class="mb-2">
                                        <a href="../shop/single-product-fullwidth.html"
                                            class="d-block text-center">
                                            
                                            <img class="img-fluid"
                                                :src="product.image"
                                                alt="Image Description"></a>
                                    </div>
                                    <div class="flex-center-between mb-1">
                                        <div class="prodcut-price">

                                            <div v-if="money == 'bolivares'" class="text-gray-100">
                                                {{ product.price + ".00$" }}
                                            </div>
                                        
                                        </div>
                                        <div class="d-none d-xl-block prodcut-add-cart">
                                            <a href="../shop/single-product-fullwidth.html"
                                                class="btn-add-cart btn-primary transition-3d-hover">
                                                <i class="ec ec-add-to-cart"></i>
                                                </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-item__footer">
                                    <div class="border-top pt-2 flex-center-between flex-wrap">
                                        <a href="../shop/compare.html"
                                            class="text-gray-6 font-size-13"><i
                                                class="ec ec-compare mr-1 font-size-15"></i>
                                            Compare</a>
                                        <a href="../shop/wishlist.html"
                                            class="text-gray-6 font-size-13"><i
                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                            Add to Wishlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </li>

                </ul>
            </div>
        </div>
        <!-- End Tab Content -->
    </div>
    <!-- End Features Section -->
</div>
  `
})

/*
#######
# App #
#######
*/

let app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      device: screen.width,
      money: 'bolivares',
      slider: {
        imagesMobile: [
          {id: 1, image:'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08140919/banner2tarjetaefectivo767X767.png', description:"Image One"},
          {id: 2, image:'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08141942/banner1tarjetaefectivo767X767.png', description:"Image Two"},
          {id:3, image:'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08142916/banner3tarjetaefectivo767X767.png', description: "Image Three"}
        ],
        imagesDesktop: [
          {id: 1, image:'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08143805/banner4tarjetaefectivo1400x412.png', description:"Image One"},
          {id: 2, image:'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08141759/banner1tarjetaefectivo1400x412.png', description:"Image Two"},
          {id:3, image:'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08140558/banner2tarjetaefectivo1400x412.png', description: "Image Three"}
        ]
      },
      products: {
        populars: [
          {id: 1, category: "Redes", title:"Tarjeta LAN con Antena Netpro 150 Mts", price: 12.00, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/09/25172522/6315825193672_tarjeta-lan-antena-netpro-150-mts-01-300x300.jpg"},
          {id: 2, category: "Accesorios", title:"Mouse Inal??mbrico Premium Rojo ??? IME", price: 11.00, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2019/10/18170133/ime-26436-mouse-inalambrico-premium-rojo-1-300x300.jpg"},
          {id: 3, category: "Accesorios", title:"Mousepad Rubber Azul con Logo ??? IME", price: 1.00, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2019/10/18170206/ime-25837-mousepad-rubber-azul-logo-1-300x300.jpg"},
          {id: 4, category: "Audio", title:"Earbuds Wireless White", price: 25.00, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg"},
          {id: 5, category: "Audio", title:"Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg"},
          {id: 6, category: "Audio", title:"Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg"},
          {id: 7, category: "Audio", title:"Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg"},
          {id: 8, category: "Audio", title:"Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg"},
        ],
        bestSellers: [
          {id: 1, category: "Audio", title:"Earbuds Wireless White", price: 25.00, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg"},
          {id: 2, category: "Accesorios", title:"Mouse Inal??mbrico Premium Rojo ??? IME", price: 11.00, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2019/10/18170133/ime-26436-mouse-inalambrico-premium-rojo-1-300x300.jpg"},
          {id: 3, category: "Accesorios", title:"Mousepad Rubber Azul con Logo ??? IME", price: 1.00, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2019/10/18170206/ime-25837-mousepad-rubber-azul-logo-1-300x300.jpg"},
          {id: 4, category: "Audio", title:"Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg"},
          {id: 5, category: "Audio", title:"Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg"},
          {id: 6, category: "Audio", title:"Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg"},
          {id: 7, category: "Audio", title:"Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg"},
          {id: 8, category: "Audio", title:"Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg"},
        ]
      }
    }
})



