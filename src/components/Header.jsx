import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, SwipeableDrawer, IconButton, Badge } from "@material-ui/core";

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import CloseIcon from "@material-ui/icons/Close";
import { ButtonLink } from "./ButtonLink";
export const Header = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <header>
        <div className="logo">GPU shop</div>
        <ul className="nav">
          <li>
            <NavLink active-classname="active" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink active-classname="active" to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <IconButton onClick={() => setState(true)} aria-label="cart">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </li>
        </ul>
      </header>
      <SwipeableDrawer
        anchor="right"
        open={state}
        onClose={() => setState(false)}
        onOpen={() => setState(true)}
      >
        <div className="drawer">
          <div className="drawer-header">
            <h2>Cart</h2>
            <Button onClick={() => setState(false)}>
              <CloseIcon />
            </Button>
          </div>
          <div className="drawer-body">
            <div className="drawer-item">
              <div className="img"></div>
              <div className="info">
                <div className="top">
                  <div className="goods-title">
                    GIGABYTE GAMING OC GeForce RTX 4080 16GB GDDR6X PCI Express 4.0...
                  </div>
                  <div className="price">
                    <div className="current">$1004.25</div>
                    <div className="sale">$1234.25</div>
                  </div>
                </div>
                <div className="bottom">
                  <div className="qty-box">
                    <Button>
                      <RemoveIcon />
                    </Button>
                    <span className="qty">1</span>
                    <Button>
                      <AddIcon />
                    </Button>
                  </div>
                  <Button className="remove">Remove</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="drawer-footer">
            <span className="price">
              <p>Taxes and shipping calculated at checkout</p> <div>$1254.55</div>
            </span>
            <ButtonLink text="Checkout" />
          </div>
        </div>
      </SwipeableDrawer>
    </>
  );
};
