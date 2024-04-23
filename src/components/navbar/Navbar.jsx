import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <span>Portfolio</span>
        <div className="social">
          <a href="#">
            <img className="border-png" src="/github.png" alt="" />
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
