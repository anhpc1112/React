import "../common/style.css";

function Error({ error }) {
  return <label className="error">{error}</label>;
}

export default Error;