import useAxios from "axios-hooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { toast } from 'react-toastify';

import CustomField from "./CustomField";

const updateFormValue = (data = {}) => {
  return {
    title: data.title || "",
    date: data.date || "",
    link: data.link || "",
    image: data.image || "",
    author: data.author || "",
    authorImage: data.authorImage || "",
    note: data.note || "",
    tags: data.tags || "",
    order: data.order ? parseInt(data.order) : 1,
    publish: data.publish || false,
    description: data.description || "",
  };
};

const CustomBlogForm = ({ id, value }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [{ loading, error }, execute] = useAxios({}, { manual: true });

  useEffect(() => {
    setForm(updateFormValue(value));
  }, [value]);

  if (error) {
    console.log("BlogList.error: ", error);
  }

  if (loading) {
    return <Spinner animation="border" />;
  }

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const onCancel = () => {
    updateFormValue();
    navigate("/admin/blog");
  };

  const onSubmit = () => {
    if (id) {
      execute({
        url: `/api/blog/${id}`,
        method: "PATCH",
        data: { ...form },
      }).then(() => {
        toast.success("Update blog successfully");
        setTimeout(() => {
          navigate("/admin/blog")
        }, 1500);
      });
    } else {
      execute({
        url: `/api/blog`,
        method: "POST",
        data: { ...form },
      }).then(() => {
        toast.success("Create blog successfully");
        setTimeout(() => {
          navigate("/admin/blog")
        }, 1500);
      });
    }
  };

  return (
    <>
      <Form method="POST">
        <Row>
          <Col>
            <CustomField
              type="text"
              name="title"
              label="Title"
              value={form.title}
              onChange={onChange}
            />
          </Col>
          <Col>
            <CustomField
              type="date"
              name="date"
              label="Date"
              value={form.date}
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomField
              type="text"
              name="link"
              label="Link"
              value={form.link}
              onChange={onChange}
            />
          </Col>
          <Col>
            <CustomField
              type="text"
              name="tags"
              label="Tags"
              value={form.tags}
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomField
              type="file"
              name="image"
              label="Image"
              value={form.image}
              onChange={onChange}
            />
          </Col>
          <Col>
            <CustomField
              type="file"
              name="authorImage"
              label="Author Image"
              value={form.authorImage}
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomField
              type="number"
              name="order"
              label="Order"
              value={form.order}
              onChange={onChange}
            />
          </Col>
          <Col>
            <CustomField
              type="text"
              name="author"
              label="Author"
              value={form.author}
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomField
              rows={4}
              type="textarea"
              name="note"
              label="Note"
              value={form.note}
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomField
              rows={5}
              type="textarea"
              name="description"
              label="Description"
              value={form.description}
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="secondary" type="button" onClick={onCancel}>
              Cancel
            </Button>
          </Col>
          <Col>
            <Button
              variant="primary"
              type="button"
              className="float-end"
              onClick={onSubmit}
            >
              Save Blog
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default CustomBlogForm;
