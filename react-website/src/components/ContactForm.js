// src/components/ContactForm.js
import React from "react";
import { useFormik } from "formik";

function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      // Send form data to the backend API
      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response, show success or error messages to the user
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default ContactForm;