import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconButton, Badge } from "@material-ui/core";

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import { Cart } from "./";

export const Header = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <header>
        <div className="logo">GPU shop</div>
        <ul className="nav">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <IconButton onClick={() => setState(true)} aria-label="cart">
              <Badge badgeContent={4} color="secondary" overlap="rectangular">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </li>
        </ul>
      </header>
      <Cart state={state} setState={setState} />
    </>
  );
};
