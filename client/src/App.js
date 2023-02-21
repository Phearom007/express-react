import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/user-page/Home/Home";
import Shop from "./components/user-page/Shop/Shop";
import ShopDetails from "./components/user-page/pages/ShopDetails/ShopDetails";
import Blog from "./components/user-page/Blog/Blog";
import Contact from "./components/user-page/Contact/Contact";
import AboutUs from "./components/user-page/pages/AboutUs/AboutUs";
import ShopingCart from "./components/user-page/pages/ShopingCart/ShopingCart";
import CheckOut from "./components/user-page/pages/CheckOut/CheckOut";
import BlogDetails from "./components/user-page/pages/BlogDetails/BlogDetails";

import AdminHome from "./components/admin-page/home/AdminHome";
import BlogList from "./components/admin-page/blog/BlogList";
import BlogView from "./components/admin-page/blog/BlogView";
import BlogForm from "./components/admin-page/blog/BlogForm";

function App() {
  return (
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

        <Route path="/admin">
          <Route index element={<AdminHome />} />
          <Route path="blog/:id/" element={<BlogView />} />
          <Route path="blog/:id/delete" element={<BlogView />} />
          <Route path="blog/:id/edit" element={<BlogForm />} />
          <Route path="blog/new" element={<BlogForm />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="*" element={<h3>Not Found</h3>} />
        </Route>

        <Route exact path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
