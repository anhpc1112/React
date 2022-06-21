import "../common/style.css";

function GoogleImage({ logo }) {
  return (
    <div className="google">
      <a href="/#" id="google_logo">
        <img src={logo} alt="google-logo_zpspkcztsjo.png" />
      </a>
    </div>
  );
}

export default GoogleImage;
