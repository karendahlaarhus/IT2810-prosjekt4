import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Frontpage from "./Frontpage/Frontpage";
import RecipeContainer from "./RecipeContainer";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="frontpage"
        component={Frontpage}
        title="home"
        initial={true}
      />
      <Scene key="search" component={RecipeContainer} title="search" />
    </Scene>
  </Router>
);
export default Routes;
