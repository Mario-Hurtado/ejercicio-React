import { useState } from "react";

const useForm = (validateForm, campos) => {
  const [errors, setErrors] = useState({});
  let obj = {};
  for (let i = 0; i < campos.length; i++) {
    obj[campos[i].name] = "";
  }
  const [values, setValues] = useState(obj);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateForm(values, campos));
  };

  return { handleChange, handleSubmit, errors };
};

export default useForm;
