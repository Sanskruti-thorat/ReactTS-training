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
            <Link to="/page1/">Page 1j</Link>
          </li>
          <br />
          <li>
            <Link to="/page2/">Page 2</Link>
          </li>
          <br />
          <li>
            <Link to="/page3/">Page 3</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;