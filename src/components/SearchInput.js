import "../common/style.css";
import Option from "./Option";
import searchIcon from "../common/searchIcon.png";

function SearchInput() {
  return (
    <div className="form">
      <form>
        <label htmlFor="form-search"></label>
        <input
          type="text"
          id="form-search"
          placeholder="Search Google or type URL"
        />
        <Option imageSrc={searchIcon}></Option>
      </form>
    </div>
  );
}

export default SearchInput;
