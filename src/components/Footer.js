import "../common/style.css";

function Footer() {
  return (
    <footer>
      <div id="footer-div">
        <ul className="footer-left">
          <li>
            <a href="/#">Advertising</a>
          </li>
          <li>
            <a href="/#">Business</a>
          </li>
          <li>
            <a href="/#">About</a>
          </li>
        </ul>
        <ul className="footer-right">
          <li>
            <a href="/#">Privacy</a>
          </li>
          <li>
            <a href="/#">Terms</a>
          </li>
          <li>
            <a href="/#">Settings</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
