import useAxios from "axios-hooks";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import AdminLayout from "../../../layouts/AdminLayout";

const BlogView = () => {
  const { id } = useParams(); // view / delete
  const [{ data, loading, error }] = useAxios(`/api/blog/${id}`);

  if (!id) {
    return <h1>Not Found</h1>;
  }

  if (error) {
    console.log("BlogView.error: ", error);
  }

  const item = data?.item || {};

  return (
    <AdminLayout loading={loading}>
      <h3>View Blog</h3>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.image || '/not-found.png'} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Card.Text>
            {item.note}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </AdminLayout>
  );
};

export default BlogView;
