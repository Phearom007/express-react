import React, { useState, useEffect } from 'react';
import './contact.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Menu from '../Imports/Menu';
import Header from '../Imports/Header';
import Footer from '../Imports/Footer';

const Contact = () => {
  return (
    <>
      {/* Page Preloder */}
      <div id="preloder">
        <div class="loader"></div>
      </div>

      {/* Offcanvas Menu Begin */}
      <Menu />
      {/* Offcanvas Menu End */}

      {/* Header Section Begin */}
      <Header />
      {/* Header Section End  */}

      {/* Map Begin */}
      <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250151.45210874153!2d104.75009695844476!3d11.579330573127228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2z4Z6X4Z-S4Z6T4Z-G4Z6W4Z-B4Z6J!5e0!3m2!1skm!2skh!4v1674088196285!5m2!1skm!2skh" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      {/* Map End */}

      {/* Contact Section Begin */}
      <section class="contact spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="contact__text">
                <div class="section-title">
                  <span>Information</span>
                  <h2>Contact Us</h2>
                  <p>As you might expect of a company that began as a high-end interiors contractor, we pay
                    strict attention.</p>
                </div>
                <ul>
                  <li>
                    <h4>Phnom Penh</h4>
                    <p>523 Preah, មហាវិថី សម្ដេចមុនីរ៉េត (២១៧), ភ្នំពេញ <br />+855 90-7413-15</p>
                  </li>
                  <li>
                    <h4>Svay Rieng</h4>
                    <p>ក្រុងស្វាយរៀង <br />+855 96-9886-692</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="contact__form">
                <form action="#">
                  <div class="row">
                    <div class="col-lg-6">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div class="col-lg-6">
                      <input type="text" placeholder="Email" />
                    </div>
                    <div class="col-lg-12">
                      <textarea placeholder="Message"></textarea>
                      <button type="submit" class="site-btn">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}

      {/* Footer Section Begin */}
      <Footer />
      {/* Footer Section End  */}

      {/* Search Begin */}
      <div class="search-model">
        <div class="h-100 d-flex align-items-center justify-content-center">
          <div class="search-close-switch">+</div>
          <form class="search-model-form">
            <input type="text" id="search-input" placeholder="Search here....." />
          </form>
        </div>
      </div>
      {/* Search End */}
    </>
  )
}

export default Contact;