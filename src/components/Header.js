import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

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
        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">Identifiez-</span>
            <span className="header__optionLineTwo">vous</span>
          </div>

          <div className="header__option">
            <span className="header__optionLineOne">Retours et</span>
            <span className="header__optionLineTwo">Commandes</span>
          </div>

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
    </div>
  );
};

export default Header;
