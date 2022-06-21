import "../common/style.css";

function ActionButton({ buttonName }) {
  return <input type="submit" value={buttonName} id="google_search" />;
}

export default ActionButton;
