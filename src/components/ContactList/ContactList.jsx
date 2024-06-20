import { nanoid } from "nanoid";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/selectors.js";
import { getSearchName } from "../../redux/selectors.js";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const name = useSelector(getSearchName);
  const filteredContacts = contacts.filter((elem) => {
    return elem.name.toLowerCase().includes(name.toLowerCase());
  });
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
