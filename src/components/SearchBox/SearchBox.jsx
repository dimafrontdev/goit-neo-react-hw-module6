import styles from "./searchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice.js";

const SearchBox = () => {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      type="text"
      name="search"
      placeholder="Find contacts by name"
      value={value}
      onChange={onChange}
      className={styles.search}
    />
  );
};

export default SearchBox;
