import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsSlice";

export const Contact = ({ element: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.item}>
        <div>
          <p>
            <FaUser /> {name}
          </p>
          <p>
            <FaPhoneAlt /> {number}
          </p>
        </div>

        <button type="submit" className={css.button} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
