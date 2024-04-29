import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <span>Portfolio</span>
        <div className="social">
          <a
            href="https://github.com/cgezginci"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="border-png" src="/github.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/cantuggezginci/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
