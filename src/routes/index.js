import React from "react";
import { Switch, Route } from "react-router-dom";
import { Main } from "../views/main";
import { Wishlist } from "../views/wishlist";

export const Rout = () => {
  return (
    <Switch>
      <Route path='/' component={Main} exact />
      <Route path='/wishlist' component={Wishlist} />
    </Switch>
  );
};
