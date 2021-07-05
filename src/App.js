import React, { Component } from "react";
import Navbar from "./component/Navbar/Navbar";
import auth from "./services/authService";
import { Switch, Route } from "react-router-dom";
import FoodProvider from "./context/FoodProvider";
import Checkout from "./component/Checkout/index";
import Main1 from "./component/Main1";
import FormofLogin from "./component/form/form";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/styles/style.css";
import "./App.css";
import { config } from "./services/userService";
import Notfound from "./component/Notfound";
import Model from "./component/common/Model";

class App extends Component {
  state = {
    user: "",
  };

  async componentDidMount() {
    const user = await auth.getCurrentUser();
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    const configure = await config();
    localStorage.setItem("config", JSON.stringify(configure));

    console.log(user);
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <FoodProvider>
        <div className="container-main">
          <Navbar user={user} />
          <Switch>
            <Route exact path="/login" component={FormofLogin} />
            <Route path="/not-found" component={Notfound} />

            <Route path="/checkout">
              {user ? <Checkout /> : <FormofLogin />}
            </Route>
            {/* <Route exact path="/checkout" component={Checkout} /> */}
            <Route exact path="/" component={Main1} />
          </Switch>
          {/* <Model /> */}
        </div>
      </FoodProvider>
    );
  }
}

export default App;
