// Header.js

import { Link } from "react-router-dom";
import "../CSS/navbar.style.css"; 

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <br />
          <li>
            <Link to="/page1/">Form</Link>
          </li>
          <br />
          <li>
            <Link to="/page2/">Table</Link>
          </li>
          <br />
          <li>
            <Link to="/page3/">Form-bootstrap</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
