import useAxios from "axios-hooks";
import { useCallback, useMemo, useState } from "react";
import { Table, Button, Pagination } from "react-bootstrap";
import { BsPencilSquare, BsTrash, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";

import AdminLayout from "../../../layouts/AdminLayout";

const BlogPagination = ({ page, size, totalPages, onPageChange }) => {
  const pages = useMemo(() => {
    let allPages = [];
    for (let number = 1; number <= totalPages; number++) {
      allPages.push(
        <Pagination.Item
          key={number}
          active={number === page}
          onClick={() => onPageChange(number, size)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return allPages;
  }, [page, size, totalPages, onPageChange]);

  const increasePage = useCallback(() => {
    onPageChange(page + 1 <= totalPages ? page + 1 : totalPages, size);
  }, [page, size, totalPages, onPageChange]);

  const decreasePage = useCallback(() => {
    onPageChange(page - 1 > 0 ? page - 1 : 0, size);
  }, [page, size, onPageChange]);

  return (
    <>
      {pages && pages.length > 0 ? (
        <Pagination>
          <Pagination.First onClick={() => onPageChange(0, size)} />
          <Pagination.Prev onClick={decreasePage} />
          {pages}
          <Pagination.Next onClick={increasePage} />
          <Pagination.Last onClick={() => onPageChange(totalPages, size)} />
        </Pagination>
      ) : undefined}
    </>
  );
};

const BlogList = () => {
  const [pager, setPager] = useState({ page: 1, size: 1 });
  const [{ data, loading, error }] = useAxios({
    url: "/api/blog",
    params: pager,
  });
  const { items, page, size, totalPages } = data || {};

  const onPageChange = (page, size) => {
    setPager((old) => ({ ...old, page, size }));
  };

  if (error) {
    console.log("BlogList.error: ", error);
  }

  return (
    <AdminLayout loading={loading}>
      <h1>Blog List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Date</th>
            <th>Author</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items ? (
            <>
              {items.map((item, key) => (
                <tr key={key}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.date}</td>
                  <td>{item.author}</td>
                  <td className="text-center table-button-actions">
                    <Button
                      variant="secondary"
                      size="sm"
                      as={Link}
                      to={`/admin/blog/${item.id}`}
                    >
                      <BsEye />
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      as={Link}
                      to={`/admin/blog/${item.id}/delete`}
                    >
                      <BsTrash />
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      as={Link}
                      to={`/admin/blog/${item.id}/edit`}
                    >
                      <BsPencilSquare />
                    </Button>
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <tr>
              <td className="text-center" colSpan="5">
                No Data
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <BlogPagination
        onPageChange={onPageChange}
        page={page}
        size={size}
        totalPages={totalPages}
      />
    </AdminLayout>
  );
};

export default BlogList;
