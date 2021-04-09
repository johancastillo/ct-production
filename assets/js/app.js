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
                                  <a class="dropdown-item" href="#">Español‎</a>
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
                              class="text-gray-50">o</span> Iniciar sesión
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
                            Más vendidos
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

                    <li v-for="product in products.populars" class="col-6 col-wd-3 col-md-4 product-item">

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
                    
                <li v-for="product in products.bestSellers" class="col-6 col-wd-3 col-md-4 product-item">

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
                    <li class="col-6 col-wd-3 col-md-4 product-item">
                        <div class="product-item__outer h-100">
                            <div class="product-item__inner px-xl-4 p-3">
                                <div class="product-item__body pb-xl-2">
                                    <div class="mb-2"><a
                                            href="../shop/product-categories-7-column-full-width.html"
                                            class="font-size-12 text-gray-5">Speakers</a></div>
                                    <h5 class="mb-1 product-item__title"><a
                                            href="../shop/single-product-fullwidth.html"
                                            class="text-blue font-weight-bold">Wireless Audio
                                            System Multiroom 360 degree Full base audio</a></h5>
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
                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                            Add to Wishlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="col-6 col-wd-3 col-md-4 product-item">
                        <div class="product-item__outer h-100">
                            <div class="product-item__inner px-xl-4 p-3">
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
                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                            Add to Wishlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="col-6 col-wd-3 col-md-4 product-item remove-divider-xl">
                        <div class="product-item__outer h-100">
                            <div class="product-item__inner px-xl-4 p-3">
                                <div class="product-item__body pb-xl-2">
                                    <div class="mb-2"><a
                                            href="../shop/product-categories-7-column-full-width.html"
                                            class="font-size-12 text-gray-5">Speakers</a></div>
                                    <h5 class="mb-1 product-item__title"><a
                                            href="../shop/single-product-fullwidth.html"
                                            class="text-blue font-weight-bold">Purple Solo 2
                                            Wireless</a></h5>
                                    <div class="mb-2">
                                        <a href="../shop/single-product-fullwidth.html"
                                            class="d-block text-center"><img class="img-fluid"
                                                src="../../assets/img/212X200/img3.jpg"
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
                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                            Add to Wishlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="col-6 col-wd-3 col-md-4 product-item remove-divider-wd">
                        <div class="product-item__outer h-100">
                            <div class="product-item__inner px-xl-4 p-3">
                                <div class="product-item__body pb-xl-2">
                                    <div class="mb-2"><a
                                            href="../shop/product-categories-7-column-full-width.html"
                                            class="font-size-12 text-gray-5">Speakers</a></div>
                                    <h5 class="mb-1 product-item__title"><a
                                            href="../shop/single-product-fullwidth.html"
                                            class="text-blue font-weight-bold">Smartphone 6S
                                            32GB LTE</a></h5>
                                    <div class="mb-2">
                                        <a href="../shop/single-product-fullwidth.html"
                                            class="d-block text-center"><img class="img-fluid"
                                                src="../../assets/img/212X200/img4.jpg"
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
                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                            Add to Wishlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="col-6 col-wd-3 col-md-4 product-item">
                        <div class="product-item__outer h-100">
                            <div class="product-item__inner px-xl-4 p-3">
                                <div class="product-item__body pb-xl-2">
                                    <div class="mb-2"><a
                                            href="../shop/product-categories-7-column-full-width.html"
                                            class="font-size-12 text-gray-5">Speakers</a></div>
                                    <h5 class="mb-1 product-item__title"><a
                                            href="../shop/single-product-fullwidth.html"
                                            class="text-blue font-weight-bold">Widescreen NX
                                            Mini F1 SMART NX</a></h5>
                                    <div class="mb-2">
                                        <a href="../shop/single-product-fullwidth.html"
                                            class="d-block text-center"><img class="img-fluid"
                                                src="../../assets/img/212X200/img5.jpg"
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
                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                            Add to Wishlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="col-6 col-wd-3 col-md-4 product-item remove-divider-xl">
                        <div class="product-item__outer h-100">
                            <div class="product-item__inner px-xl-4 p-3">
                                <div class="product-item__body pb-xl-2">
                                    <div class="mb-2"><a
                                            href="../shop/product-categories-7-column-full-width.html"
                                            class="font-size-12 text-gray-5">Speakers</a></div>
                                    <h5 class="mb-1 product-item__title"><a
                                            href="../shop/single-product-fullwidth.html"
                                            class="text-blue font-weight-bold">Full Color
                                            LaserJet Pro M452dn</a></h5>
                                    <div class="mb-2">
                                        <a href="../shop/single-product-fullwidth.html"
                                            class="d-block text-center"><img class="img-fluid"
                                                src="../../assets/img/212X200/img6.jpg"
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
                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                            Add to Wishlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li
                        class="col-6 col-wd-3 col-md-4 product-item d-xl-none d-wd-block remove-divider-xl">
                        <div class="product-item__outer h-100">
                            <div class="product-item__inner px-xl-4 p-3">
                                <div class="product-item__body pb-xl-2">
                                    <div class="mb-2"><a
                                            href="../shop/product-categories-7-column-full-width.html"
                                            class="font-size-12 text-gray-5">Speakers</a></div>
                                    <h5 class="mb-1 product-item__title"><a
                                            href="../shop/single-product-fullwidth.html"
                                            class="text-blue font-weight-bold">GameConsole
                                            Destiny Special Edition</a></h5>
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
                                                class="ec ec-favorites mr-1 font-size-15"></i>
                                            Add to Wishlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li
                        class="col-6 col-wd-3 col-md-4 product-item d-xl-none d-wd-block remove-divider-wd">
                        <div class="product-item__outer h-100">
                            <div class="product-item__inner px-xl-4 p-3">
                                <div class="product-item__body pb-xl-2">
                                    <div class="mb-2"><a
                                            href="../shop/product-categories-7-column-full-width.html"
                                            class="font-size-12 text-gray-5">Speakers</a></div>
                                    <h5 class="mb-1 product-item__title"><a
                                            href="../shop/single-product-fullwidth.html"
                                            class="text-blue font-weight-bold">Camera C430W 4k
                                            Waterproof</a></h5>
                                    <div class="mb-2">
                                        <a href="../shop/single-product-fullwidth.html"
                                            class="d-block text-center"><img class="img-fluid"
                                                src="../../assets/img/212X200/img8.jpg"
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
          {id: 2, category: "Accesorios", title:"Mouse Inalámbrico Premium Rojo – IME", price: 11.00, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2019/10/18170133/ime-26436-mouse-inalambrico-premium-rojo-1-300x300.jpg"},
          {id: 3, category: "Accesorios", title:"Mousepad Rubber Azul con Logo – IME", price: 1.00, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2019/10/18170206/ime-25837-mousepad-rubber-azul-logo-1-300x300.jpg"},
          {id: 4, category: "Audio", title:"Earbuds Wireless White", price: 25.00, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg"},
          {id: 5, category: "Audio", title:"Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg"},
          {id: 6, category: "Audio", title:"Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg"},
          {id: 7, category: "Audio", title:"Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg"},
          {id: 8, category: "Audio", title:"Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg"},
        ],
        bestSellers: [
          {id: 1, category: "Audio", title:"Earbuds Wireless White", price: 25.00, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg"},
          {id: 2, category: "Accesorios", title:"Mouse Inalámbrico Premium Rojo – IME", price: 11.00, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2019/10/18170133/ime-26436-mouse-inalambrico-premium-rojo-1-300x300.jpg"},
          {id: 3, category: "Accesorios", title:"Mousepad Rubber Azul con Logo – IME", price: 1.00, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2019/10/18170206/ime-25837-mousepad-rubber-azul-logo-1-300x300.jpg"},
          {id: 4, category: "Audio", title:"Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg"},
          {id: 5, category: "Audio", title:"Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg"},
          {id: 6, category: "Audio", title:"Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg"},
          {id: 7, category: "Audio", title:"Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg"},
          {id: 8, category: "Audio", title:"Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg"},
        ]
      }
    }
})
