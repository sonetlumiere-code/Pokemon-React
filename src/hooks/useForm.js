import React, { useState } from "react";

const useForm = (formState, fn = null) => {

  const [values, setValues] = useState(formState);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fn) {
      fn();   //dispatch
    }
  }

  return [values, handleChange, handleSubmit];
}

export default useForm;