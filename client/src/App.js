import React, { useEffect } from 'react';
import './App.css';
import $ from 'jquery';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/user-page/Home/Home';
import Shop from './components/user-page/Shop/Shop';
import ShopDetails from './components/user-page/pages/ShopDetails/ShopDetails';
import Blog from './components/user-page/Blog/Blog';
import Contact from './components/user-page/Contact/Contact';
import AboutUs from './components/user-page/pages/AboutUs/AboutUs';
import ShopingCart from './components/user-page/pages/ShopingCart/ShopingCart';
import CheckOut from './components/user-page/pages/CheckOut/CheckOut';
import BlogDetails from './components/user-page/pages/BlogDetails/BlogDetails';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route exact index element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/shop-details" element={<ShopDetails />} />
          <Route exact path="/shoping-cart" element={<ShopingCart />} />
          <Route exact path="/checkout" element={<CheckOut />} />
          <Route exact path="/blog-details" element={<BlogDetails />} />
          <Route exact path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
