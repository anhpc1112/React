import "../common/style.css";

function Link({ link }) {
  return (
    <>
      <li className="nav-links" id="gmail">
        <a href="/#">{link}</a>
      </li>
    </>
  );
}

export default Link;
