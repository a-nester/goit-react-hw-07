import { nanoid } from "nanoid";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors.js";

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map((el) => {
        return (
          <li key={nanoid()}>
            <Contact element={el} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
