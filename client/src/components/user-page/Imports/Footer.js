import React from 'react';

const Footer = () => {
  const today = new Date();
  
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer__about">
                <div class="footer__logo">
                  <a href="/"><img src="http://localhost:8081/mf_img/footer-logo.png" alt="" /></a>
                </div>
                <p>The customer is at the heart of our unique business model, which includes design.</p>
                <a href="#"><img src="http://localhost:8081/mf_img/payment.png" alt="" /></a>
              </div>
            </div>
            <div class="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
              <div class="footer__widget">
                <h6>Shopping</h6>
                <ul>
                  <li><a href="#">Clothing Store</a></li>
                  <li><a href="#">Trending Shoes</a></li>
                  <li><a href="#">Accessories</a></li>
                  <li><a href="#">Sale</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6">
              <div class="footer__widget">
                <h6>Shopping</h6>
                <ul>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Payment Methods</a></li>
                  <li><a href="#">Delivary</a></li>
                  <li><a href="#">Return & Exchanges</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
              <div class="footer__widget">
                <h6>NewLetter</h6>
                <div class="footer__newslatter">
                  <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                  <form action="#">
                    <input type="text" placeholder="Your email" />
                    <button type="submit"><span class="icon_mail_alt"></span></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="footer__copyright__text">
                <p>Copyright © 2022 -
                  {today.getFullYear()}
                  &nbsp; All rights reserved | This template is made with <i class="fa fa-heart-o"
                    aria-hidden="true"></i> by <a href="#" target="_blank">Koch Dragon</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;