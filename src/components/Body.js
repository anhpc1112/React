import "../common/style.css";
import logo from "../common/googlelogo.png";
import GoogleImage from "./GoogleImage";
import SearchInput from "./SearchInput";
import ActionButton from "./ActionButton";

function Body() {
  return (
    <>
      <GoogleImage logo={logo}></GoogleImage>
      <SearchInput></SearchInput>
      <div className="buttons">
        <ActionButton buttonName={"Google Search"}></ActionButton>
        <ActionButton buttonName={"I'm Feeling Lucky"}></ActionButton>
      </div>
    </>
  );
}

export default Body;
