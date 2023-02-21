import { Form } from "react-bootstrap";

const CustomField = ({ name, type, label, value, onChange, ...props }) => {
  const as = type === "textarea" ? "textarea" : "input";
  return (
    <Form.Group className="mb-3" controlId={`custom-field-${name}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as={as}
        type={type}
        name={name}
        placeholder={`Please enter ${label}`}
        value={value}
        onChange={onChange}
        {...props}
      />
    </Form.Group>
  );
};

export default CustomField;
