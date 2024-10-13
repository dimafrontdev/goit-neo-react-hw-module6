import styles from "./contact.module.css";
import IconPhone from "../../assets/IconPhone.jsx";
import IconContact from "../../assets/IconContact.jsx";

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={styles.contact}>
      <div>
        <div className={styles.name}>
          <IconContact />
          <p>{name}</p>
        </div>
        <div className={styles.phone}>
          <IconPhone />
          <p>{number}</p>
        </div>
      </div>

      <button onClick={onDelete} className={styles.delete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
