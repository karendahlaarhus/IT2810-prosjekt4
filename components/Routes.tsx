import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Frontpage from "./Frontpage/Frontpage";
import RecipeContainer from "./RecipeContainer";
/* This component handles changing which page to display.
We have two pages: frontpage and searchpage (RecipeContainer component)*/

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="frontpage"
        component={Frontpage}
        title="Home"
        initial={true}
      />
      <Scene key="search" component={RecipeContainer} title="Search" />
    </Scene>
  </Router>
);
export default Routes;
