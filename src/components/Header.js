import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon-logo"
      />

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

          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
