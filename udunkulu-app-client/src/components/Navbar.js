import React from "react";
import { displaySignin, displayArtistSignup } from '../ModalLogic';
import Logo from "../assets/img/udunkulu-brand.png";
import { Link, useLocation} from "react-router-dom";
import "../assets/css/Navbar.css";

let Navbar = () => {
  const location = useLocation();

  let displayModalSignIn = (e) => {
    displaySignin();
  }

  let displayModalSignUp = (e) => {
    displayArtistSignup();
  }

  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <section className="brand-wrapper">
            <Link to="/">
              <img src={Logo} className="brand-logo" />
              <p className="brand-text">UDUNKULU</p>
            </Link>
          </section>
          <section className="nav-wrapper">
            <ul>
              <li>
                <Link to="HowItWorks" className="nav-link">
                  How It Works
                </Link>
              </li>
              <li onClick={displayModalSignUp}>
                <Link to={{pathname:'/artists-signup', state: {background: location}}} className="nav-link">
                  Artists
                </Link>
              </li>
              <li>
                <Link to="Pricing" className="nav-link">
                  Pricing
                </Link>
              </li>
            </ul>
          </section>
          <button className="nav-btn" onClick={displayModalSignIn}>
            <Link to={{pathname:'/signin', state: {background: location}}} className="nav-btn-link">
              Sign In
            </Link>
          </button>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
