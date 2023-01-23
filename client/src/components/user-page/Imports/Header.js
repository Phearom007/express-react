import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const navigate = useNavigate();

  return (
    <header class="header">
      <div class="header__top">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-7">
              <div class="header__top__left">
                <p>Free shipping, 30-day return or refund guarantee.</p>
              </div>
            </div>
            <div class="col-lg-6 col-md-5">
              <div class="header__top__right">
                <div class="header__top__links">
                  <a href="#">Sign in</a>
                  <a href="#">FAQs</a>
                </div>
                <div class="header__top__hover">
                  <span>Usd <i class="arrow_carrot-down"></i></span>
                  <ul>
                    <li>USD</li>
                    <li>EUR</li>
                    <li>USD</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3">
            <div class="header__logo">
              <a href="/"><img src="http://localhost:8081/mf_img/logo.png" alt="" /></a>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <nav class="header__menu mobile-menu">
              <ul>
                <li className={splitLocation[1] === "" ? "active" : ""}><a href="/">Home</a></li>
                <li className={(splitLocation[1] === "shop") ? "active" : ""}><a href="/shop">Shop</a></li>
                <li><a href="#">Pages</a>
                  <ul class="dropdown">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/shop-details">Shop Details</a></li>
                    <li><a href="/shoping-cart">Shopping Cart</a></li>
                    <li><a href="/checkout">Check Out</a></li>
                    <li><a href="/blog-details">Blog Details</a></li>
                  </ul>
                </li>
                <li className={splitLocation[1] === "blog" ? "active" : ""}><a href="/blog">Blog</a></li>
                <li className={splitLocation[1] === "contact" ? "active" : ""} ><a href="/contact">Contacts</a></li>
              </ul>
            </nav>
          </div>
          <div class="col-lg-3 col-md-3">
            <div class="header__nav__option">
              <a href="#" class="search-switch"><img src="http://localhost:8081/mf_img/icon/search.png" alt="" /></a>
              <a href="#"><img src="http://localhost:8081/mf_img/icon/heart.png" alt="" /></a>
              <a href="#"><img src="http://localhost:8081/mf_img/icon/cart.png" alt="" /> <span>0</span></a>
              <div class="price">$0.00</div>
            </div>
          </div>
        </div>
        <div class="canvas__open"><i class="fa fa-bars"></i></div>
      </div>
    </header>
  )
}

export default Header;