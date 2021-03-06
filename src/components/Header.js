import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  //checks if the user is logged in or not, if else, logs out when the user clicks on the greeting
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        {/* if not user, then redirect to login page */}
        <Link to={!user && "/Login"}>
          <div className="header__option" onClick={handleAuthenticaton}>
            <span className="header__optionLineOne">
              {!user ? "Identifiez-vous" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {!user ? "Connexion" : "Déconnexion"}
            </span>
          </div>
        </Link>
        <Link to={!user ? "/Login" : "/orders"}>
          <div className="header__option">
            <span className="header__optionLineOne">Retours et</span>
            <span className="header__optionLineTwo">Commandes</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Votre</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
