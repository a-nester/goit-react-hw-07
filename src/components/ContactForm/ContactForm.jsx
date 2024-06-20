import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ValidSchema, initialValues } from "../helper";
import { Button } from "../Button/Button";

import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const idName = useId();
  const idNumber = useId();

  const handleSubmit = (initialValues, actions) => {
    dispatch(addContact(initialValues.name, initialValues.number));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label htmlFor={idName}>Name</label>
          <Field
            name="name"
            type="text"
            id={idName}
            placeholder="Input name"
            required
          />
          <ErrorMessage className={css.error} name="name" component="span" />
          <label htmlFor={idNumber}>Number</label>
          <Field
            name="number"
            type="tel"
            id={idNumber}
            placeholder="Input number"
            required
          />
          <ErrorMessage className={css.error} name="number" component="span" />
          <Button>Add contact</Button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
