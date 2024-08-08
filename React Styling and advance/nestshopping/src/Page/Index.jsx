import React from 'react'

function Index() {
    return(
 <div>
  &lt;&gt;
  <main className="main">
    <section className="hero-3 position-relative align-items">
      <h2 className="mb-30 text-center">What are you looking for?</h2>
      <form className="form-subcriber d-flex mb-30 text-center">
        <input type="email" placeholder="Your emaill address" tabIndex={-1} />
        <button className="btn" type="submit" tabIndex={-1}>Subscribe</button>
      </form>
      <ul className="list-inline nav nav-tabs links font-xs text-center">
        <li className="list-inline-item nav-item"><a className="nav-link font-xs" href="shop-grid-right.html">Cake</a></li>
        <li className="list-inline-item nav-item"><a className="nav-link font-xs" href="shop-grid-right.html">Coffes</a></li>
        <li className="list-inline-item nav-item"><a className="nav-link font-xs" href="shop-grid-right.html">Pet Foods</a></li>
        <li className="list-inline-item nav-item"><a className="nav-link font-xs" href="shop-grid-right.html">Vegetables</a></li>
      </ul>
    </section>
    <section className="bg-grey-1 section-padding pt-100 pb-80 mb-80">
      <div className="container">
        <h1 className="mb-80 text-center">Trending items</h1>
        <div className="row product-grid">
          <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
                    <img className="default-img" src="https://nest-frontend-rtl.netlify.app/assets/imgs/shop/product-1-1.jpg" alt />
                    <img className="hover-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-1-2.jpg" alt />
                  </a>
                </div>
                <div className="product-action-1">
                  <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                  <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                  <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className="hot">Hot</span>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <a href="shop-grid-right.html">Snack</a>
                </div>
                <h2><a href="shop-product-right.html">Seeds of Change Organic Quinoe Naturel</a></h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{width: '90%'}} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div>
                  <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$28.85</span>
                    <span className="old-price">$32.8</span>
                  </div>
                  <div className="add-cart">
                    <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end product card*/}
          <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
                    <img className="default-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-2-1.jpg" alt />
                    <img className="hover-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-2-2.jpg" alt />
                  </a>
                </div>
                <div className="product-action-1">
                  <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                  <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                  <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className="sale">Sale</span>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <a href="shop-grid-right.html">Hodo Foods</a>
                </div>
                <h2><a href="shop-product-right.html">All Natural Italian-Style Chicken Meatballs</a></h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{width: '80%'}} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (3.5)</span>
                </div>
                <div>
                  <span className="font-small text-muted">By <a href="vendor-details-1.html">Stouffer</a></span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$52.85</span>
                    <span className="old-price">$55.8</span>
                  </div>
                  <div className="add-cart">
                    <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end product card*/}
          <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
                    <img className="default-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-3-1.jpg" alt />
                    <img className="hover-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-3-2.jpg" alt />
                  </a>
                </div>
                <div className="product-action-1">
                  <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                  <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                  <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className="new">New</span>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <a href="shop-grid-right.html">Snack</a>
                </div>
                <h2><a href="shop-product-right.html">Angie’s Boomchickapop Sweet &amp; Salty</a></h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{width: '85%'}} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div>
                  <span className="font-small text-muted">By <a href="vendor-details-1.html">StarKist</a></span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$48.85</span>
                    <span className="old-price">$52.8</span>
                  </div>
                  <div className="add-cart">
                    <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end product card*/}
          <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
                    <img className="default-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-4-1.jpg" alt />
                    <img className="hover-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-4-2.jpg" alt />
                  </a>
                </div>
                <div className="product-action-1">
                  <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                  <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                  <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <a href="shop-grid-right.html">Vegetables</a>
                </div>
                <h2><a href="shop-product-right.html">Foster Farms Takeout Crispy Classic</a></h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{width: '90%'}} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div>
                  <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$17.85</span>
                    <span className="old-price">$19.8</span>
                  </div>
                  <div className="add-cart">
                    <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end product card*/}
          <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
                    <img className="default-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-5-1.jpg" alt />
                    <img className="hover-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-5-2.jpg" alt />
                  </a>
                </div>
                <div className="product-action-1">
                  <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                  <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                  <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className="best">-14%</span>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <a href="shop-grid-right.html">Pet Foods</a>
                </div>
                <h2><a href="shop-product-right.html">Blue Diamond Almonds Lightly Naturel</a></h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{width: '90%'}} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div>
                  <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$23.85</span>
                    <span className="old-price">$25.8</span>
                  </div>
                  <div className="add-cart">
                    <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end product card*/}
          <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
                    <img className="default-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-6-1.jpg" alt />
                    <img className="hover-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-6-2.jpg" alt />
                  </a>
                </div>
                <div className="product-action-1">
                  <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                  <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                  <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <a href="shop-grid-right.html">Hodo Foods</a>
                </div>
                <h2><a href="shop-product-right.html">Chobani Complete Vanilla Greek Bottle</a></h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{width: '90%'}} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div>
                  <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$54.85</span>
                    <span className="old-price">$55.8</span>
                  </div>
                  <div className="add-cart">
                    <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end product card*/}
          <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
                    <img className="default-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-7-1.jpg" alt />
                    <img className="hover-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-7-2.jpg" alt />
                  </a>
                </div>
                <div className="product-action-1">
                  <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                  <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                  <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <a href="shop-grid-right.html">Meats</a>
                </div>
                <h2><a href="shop-product-right.html">Canada Dry Ginger Ale – 2 L Bottle</a></h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{width: '90%'}} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div>
                  <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$32.85</span>
                    <span className="old-price">$33.8</span>
                  </div>
                  <div className="add-cart">
                    <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end product card*/}
          <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
                    <img className="default-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-8-1.jpg" alt />
                    <img className="hover-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-8-2.jpg" alt />
                  </a>
                </div>
                <div className="product-action-1">
                  <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                  <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                  <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className="sale">Sale</span>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <a href="shop-grid-right.html">Snack</a>
                </div>
                <h2><a href="shop-product-right.html">Encore Seafoods Stuffed Alaskan</a></h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{width: '90%'}} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div>
                  <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$35.85</span>
                    <span className="old-price">$37.8</span>
                  </div>
                  <div className="add-cart">
                    <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end product card*/}
          <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
                    <img className="default-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-9-1.jpg" alt />
                    <img className="hover-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-9-2.jpg" alt />
                  </a>
                </div>
                <div className="product-action-1">
                  <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                  <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                  <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className="hot">Hot</span>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <a href="shop-grid-right.html">Coffes</a>
                </div>
                <h2><a href="shop-product-right.html">Gorton’s Beer Battered Fish Fillets</a></h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{width: '90%'}} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div>
                  <span className="font-small text-muted">By <a href="vendor-details-1.html">Old El Paso</a></span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$23.85</span>
                    <span className="old-price">$25.8</span>
                  </div>
                  <div className="add-cart">
                    <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end product card*/}
          <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
                    <img className="default-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-10-1.jpg" alt />
                    <img className="hover-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-10-2.jpg" alt />
                  </a>
                </div>
                <div className="product-action-1">
                  <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                  <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                  <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <a href="shop-grid-right.html">Cream</a>
                </div>
                <h2><a href="shop-product-right.html">Haagen-Dazs Caramel Cone Ice Cream</a></h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{width: '50%'}} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (2.0)</span>
                </div>
                <div>
                  <span className="font-small text-muted">By <a href="vendor-details-1.html">Tyson</a></span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$22.85</span>
                    <span className="old-price">$24.8</span>
                  </div>
                  <div className="add-cart">
                    <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end product card*/}
          <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
                    <img className="default-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-11-1.jpg" alt />
                    <img className="hover-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-11-2.jpg" alt />
                  </a>
                </div>
                <div className="product-action-1">
                  <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                  <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                  <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className="hot">Hot</span>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <a href="shop-grid-right.html">Snack</a>
                </div>
                <h2><a href="shop-product-right.html">Seeds of Change Organic Quinoe Naturel</a></h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{width: '90%'}} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div>
                  <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$28.85</span>
                    <span className="old-price">$32.8</span>
                  </div>
                  <div className="add-cart">
                    <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end product card*/}
          <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
                    <img className="default-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-12-1.jpg" alt />
                    <img className="hover-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-12-2.jpg" alt />
                  </a>
                </div>
                <div className="product-action-1">
                  <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                  <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                  <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className="sale">Sale</span>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <a href="shop-grid-right.html">Hodo Foods</a>
                </div>
                <h2><a href="shop-product-right.html">All Natural Italian-Style Chicken Meatballs</a></h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{width: '80%'}} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (3.5)</span>
                </div>
                <div>
                  <span className="font-small text-muted">By <a href="vendor-details-1.html">Stouffer</a></span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$52.85</span>
                    <span className="old-price">$55.8</span>
                  </div>
                  <div className="add-cart">
                    <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end product card*/}
          <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
                    <img className="default-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-13-1.jpg" alt />
                    <img className="hover-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-13-2.jpg" alt />
                  </a>
                </div>
                <div className="product-action-1">
                  <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                  <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                  <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className="new">New</span>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <a href="shop-grid-right.html">Snack</a>
                </div>
                <h2><a href="shop-product-right.html">Angie’s Boomchickapop Sweet &amp; Salty</a></h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{width: '85%'}} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div>
                  <span className="font-small text-muted">By <a href="vendor-details-1.html">StarKist</a></span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$48.85</span>
                    <span className="old-price">$52.8</span>
                  </div>
                  <div className="add-cart">
                    <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end product card*/}
          <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
                    <img className="default-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-14-1.jpg" alt />
                    <img className="hover-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-14-2.jpg" alt />
                  </a>
                </div>
                <div className="product-action-1">
                  <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                  <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                  <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <a href="shop-grid-right.html">Vegetables</a>
                </div>
                <h2><a href="shop-product-right.html">Foster Farms Takeout Crispy Classic</a></h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{width: '90%'}} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div>
                  <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$17.85</span>
                    <span className="old-price">$19.8</span>
                  </div>
                  <div className="add-cart">
                    <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end product card*/}
          <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
                    <img className="default-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-15-1.jpg" alt />
                    <img className="hover-img" src="https://nest-frontend.netlify.app/assets/imgs/shop/product-15-2.jpg" alt />
                  </a>
                </div>
                <div className="product-action-1">
                  <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                  <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                  <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className="best">-14%</span>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <a href="shop-grid-right.html">Pet Foods</a>
                </div>
                <h2><a href="shop-product-right.html">Blue Diamond Almonds Lightly Naturel</a></h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{width: '90%'}} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div>
                  <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$23.85</span>
                    <span className="old-price">$25.8</span>
                  </div>
                  <div className="add-cart">
                    <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end product card*/}
     
        </div>
        {/*row*/}
        <h1 className="text-center mt-100 mb-80">Deals of the day</h1>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp" data-wow-delay={0}>
              <div className="product-img-action-wrap">
                <div className="product-img">
                  <a href="shop-product-right.html">
                    <img src="https://nest-frontend.netlify.app/assets/imgs/banner/banner-5.png" alt />
                  </a>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="deals-countdown-wrap">
                  <div className="deals-countdown" data-countdown="2025/03/25 00:00:00" />
                </div>
                <div className="deals-content">
                  <h2><a href="shop-product-right.html">Seeds of Change Organic Quinoa, Brown, &amp; Red Rice</a></h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{width: '90%'}} />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$32.85</span>
                      <span className="old-price">$33.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
              <div className="product-img-action-wrap">
                <div className="product-img">
                  <a href="shop-product-right.html">
                    <img src="https://nest-frontend.netlify.app/assets/imgs/banner/banner-6.png" alt />
                  </a>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="deals-countdown-wrap">
                  <div className="deals-countdown" data-countdown="2026/04/25 00:00:00" />
                </div>
                <div className="deals-content">
                  <h2><a href="shop-product-right.html">Perdue Simply Smart Organics Gluten Free</a></h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{width: '90%'}} />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">By <a href="vendor-details-1.html">Old El Paso</a></span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$24.85</span>
                      <span className="old-price">$26.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 d-none d-lg-block">
            <div className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
              <div className="product-img-action-wrap">
                <div className="product-img">
                  <a href="shop-product-right.html">
                    <img src="https://nest-frontend.netlify.app/assets/imgs/banner/banner-7.png" alt />
                  </a>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="deals-countdown-wrap">
                  <div className="deals-countdown" data-countdown="2027/03/25 00:00:00" />
                </div>
                <div className="deals-content">
                  <h2><a href="shop-product-right.html">Signature Wood-Fired Mushroom and Caramelized</a></h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{width: '80%'}} />
                    </div>
                    <span className="font-small ml-5 text-muted"> (3.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">By <a href="vendor-details-1.html">Progresso</a></span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$12.85</span>
                      <span className="old-price">$13.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 d-none d-xl-block">
            <div className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
              <div className="product-img-action-wrap">
                <div className="product-img">
                  <a href="shop-product-right.html">
                    <img src="https://nest-frontend.netlify.app/assets/imgs/banner/banner-8.png" alt />
                  </a>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="deals-countdown-wrap">
                  <div className="deals-countdown" data-countdown="2025/02/25 00:00:00" />
                </div>
                <div className="deals-content">
                  <h2><a href="shop-product-right.html">Simply Lemonade with Raspberry Juice</a></h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{width: '80%'}} />
                    </div>
                    <span className="font-small ml-5 text-muted"> (3.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">By <a href="vendor-details-1.html">Yoplait</a></span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$15.85</span>
                      <span className="old-price">$16.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>

  )
}

export default Index