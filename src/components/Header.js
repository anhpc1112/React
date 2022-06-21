import "../common/style.css";
import Link from "./Link";
import Avatar from "./Avatar";

function Header({ clickHandlerLogout }) {
  return (
    <div class="header">
      <nav>
        <ul id="nav_bar">
          <Link link="Gmail"></Link>
          <Link link="Images"></Link>
          <Avatar clickHandlerLogout={clickHandlerLogout}></Avatar>
          {/* <Avatar user={user}></Avatar> */}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
