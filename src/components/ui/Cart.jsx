import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import CloseIcon from "@material-ui/icons/Close";
import { ButtonLink } from "./ButtonLink";
import { Button, SwipeableDrawer } from "@material-ui/core";
import { useState } from "react";

export const Cart = ({ state, setState }) => {
  const [count, setCount] = useState(1);
  return (
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
                  <Button onClick={() => count > 0 && setCount(count - 1)}>
                    <RemoveIcon />
                  </Button>
                  <span className="qty">{count}</span>
                  <Button onClick={() => setCount(count + 1)}>
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
  );
};
