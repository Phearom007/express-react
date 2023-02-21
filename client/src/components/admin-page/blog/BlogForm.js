import useAxios from "axios-hooks";
import { useParams } from "react-router-dom";

import AdminLayout from "../../../layouts/AdminLayout";
// import DebugData from "../../DebugData";
import CustomBlogForm from "./CustomBlogForm";

const BlogForm = () => {
  const { id, type } = useParams();
  const [{ data, loading, error }] = useAxios(`/api/blog/${id}`, {
    manual: !id,
  });

  if (error) {
    console.log("BlogList.error: ", error);
  }

  return (
    <AdminLayout loading={loading}>
      <h3>{type} Blog</h3>
      {/* <DebugData>{data}</DebugData> */}
      <CustomBlogForm id={id} value={data?.item} />
    </AdminLayout>
  );
};

export default BlogForm;
