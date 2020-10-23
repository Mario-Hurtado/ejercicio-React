import React from "react";

import useForm from "../../customHooks/useForm";

import validateForm from "../../utils/validateForm";

import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

const SignForm = (props) => {
  const { handleChange, handleSubmit, errors } = useForm(
    validateForm,
    props.camposForm
  );
  const campos = props.camposForm;

  let camposFormulario = [];
  for (let i = 0; i < campos.length; i++) {
    camposFormulario.push(
      <Form.Group key={i}>
        <Form.Label htmlFor={campos[i].name}>
          {/** Se utiliza el placeholder debido a que este viene con espacios y
          mayusculas, es un aspecto estetico */}
          {campos[i].placeholder}
        </Form.Label>
        <Form.Control
          type={campos[i].type}
          name={campos[i].name}
          placeholder={campos[i].placeholder}
          onChange={handleChange}
        />
        {errors[campos[i].name] && <p>Error: {errors[campos[i].name]}</p>}
      </Form.Group>
    );
  }

  return (
    <div className="container">
      <h1 className="text-center">Register form</h1>
      <Form onSubmit={handleSubmit}>
        {camposFormulario}
        <Button className="but-centered" variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default SignForm;
