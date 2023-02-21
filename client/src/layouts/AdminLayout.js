import React, { useRef, useEffect } from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const BlogLoading = ({ loading, children }) => {
//   return (
//     <div className="text-center">
//       {loading ? <Spinner animation="border" size="lg" /> : undefined}
//       {children}
//     </div>
//   );
// };

const AdminLayout = ({ loading, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (loading) {
      ref.current.continuousStart();
    } else {
      ref.current.complete();
    }
  }, [loading]);

  // #2980b9
  // #f11946
  
  return (
    <>
      <LoadingBar color="#2980b9" ref={ref} />
      <Container>
        <Nav activeKey="/admin">
          <Nav.Item>
            <Nav.Link as={Link} to="/admin">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/admin/blog">
              Blog
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {/* <BlogLoading loading={loading} /> */}
        <div className="my-5">{children}</div>
        <ToastContainer autoClose={1000} />
      </Container>
    </>
  );
};

export default AdminLayout;
