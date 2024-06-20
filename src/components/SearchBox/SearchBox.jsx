import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const handleChange = (evt) => {
    const searchName = evt.target.value;
    dispatch(changeFilter(searchName));
  };
  return (
    <form className={css.form}>
      <label>Find contact by name</label>
      <input type="text" onChange={handleChange} />
    </form>
  );
};

export default SearchBox;
