import React, { useState, useEffect } from "react";
import "./blog.css";
import { useNavigate } from "react-router-dom";
import Menu from "../Imports/Menu";
import Header from "../Imports/Header";
import Footer from "../Imports/Footer";

import BlogItem from "../../BlogItem/BlogItem";
import axios from "axios";

// 1. Create api to data from server/backend
const apiBlogList = () => {
  return axios
    .get("https://raw.githubusercontent.com/Phearom007/data/main/blog.json")
    .then((res) => res.data);
};

const Blog = () => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  let navigate = useNavigate();

  const [data, setData] = useState([]);

  // 2. Set data to state
  useEffect(() => {
    apiBlogList().then((data) => {
      // console.log('data: ', data);
      setData(data);
    });
  }, []);

  return (
    <>
      {/* Page Preloder */}
      <div id="preloder">
        <div className="loader"></div>
      </div>

      {/* Offcanvas Menu Begin */}
      <Menu />
      {/* Offcanvas Menu End */}

      {/* Header Section Begin */}
      <Header />
      {/* Header Section End  */}

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      {/* Breadcrumb Section Begin  */}
      <section
        className="breadcrumb-blog set-bg"
        data-setbg="http://localhost:8081/mf_img/breadcrumb-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Our Blog</h2>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}

      {/* Blog Section Begin */}
      <section className="blog spad">
        <div className="container">
          <div className="row">
            {data
              ? data.map((item, index) => {
                  // console.log("item: ", index, item);
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <BlogItem
                        key={index}
                        title={item?.title}
                        date={formatDate(item?.date)}
                        link={item?.link}
                        image={item?.img}
                      />
                    </div>
                  );
                })
              : undefined}
          </div>
        </div>
      </section>
      {/* Blog Section End */}

      {/* Footer Section Begin */}
      <Footer />
      {/* Footer Section End  */}

      {/* Search Begin */}
      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">+</div>
          <form className="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
            />
          </form>
        </div>
      </div>
      {/* Search End */}
    </>
  );
};

export default Blog;
