import { string, object } from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";

import styles from "./contactForm.module.css";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice.js";

const ContactSchema = object().shape({
  name: string()
    .min(3, "Name is too short!")
    .max(50, "Name is too long!")
    .required("This field is required"),
  number: string()
    .min(3, "Phone is too short!")
    .max(50, "Phone is too long!")
    .required("This field is required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleAddContact = (contact, actions) => {
    const id = nanoid();
    dispatch(addContact({ ...contact, id }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleAddContact}
      validationSchema={ContactSchema}
    >
      <Form className={styles.form}>
        <div className={styles.field}>
          <Field type="text" name="name" id={nameFieldId} placeholder="Name" />
          <ErrorMessage name="name" component="span" className={styles.error} />
        </div>

        <div className={styles.field}>
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            placeholder="Number"
          />
          <ErrorMessage
            name="number"
            component="span"
            className={styles.error}
          />
        </div>

        <button type="submit" className={styles.submit}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
