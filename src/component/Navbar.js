import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode!='black'?"light":"dark"} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="/"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <div style={{display:'flex'}}>
              <button id='red' className="colorbtn" onClick={()=>{props.toggleMode("red"); }}></button>
              <button id="purple" className="colorbtn" onClick={()=>props.toggleMode("purple")}></button>
              <button id="green" className="colorbtn" onClick={()=>props.toggleMode("green")}></button>
              <button id="dark" className="colorbtn" onClick={()=>props.toggleMode("black")}></button>
</div>
</div>
          
         
        </div>
        
      </nav>
    
  )
}
Navbar.propTypes = { title: PropTypes.string,about: PropTypes.string};
export default Navbar;
