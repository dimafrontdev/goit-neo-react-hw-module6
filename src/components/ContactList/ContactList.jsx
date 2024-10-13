import styles from "./contactList.module.css";
import Contact from "../Contact/Contact.jsx";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice.js";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.contacts}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => onDelete(contact.id)}
        />
      ))}
    </div>
  );
};

export default ContactList;
