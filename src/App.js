import React, { Component } from "react";
import Navbar from "./component/Navbar/Navbar";
import auth from "./services/authService";
import { Switch, Route } from "react-router-dom";
import FoodProvider from "./context/FoodProvider";
import Checkout from "./Pages/Checkout";
import Main from "./Pages/Main";

import { config } from "./services/userService";
import Notfound from "./Pages/Notfound";
import Model from "./Pages/Model";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/styles/style.css";
import "./App.css";
import LoginForm from './Pages/LoginForm';

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
            <Route exact path="/login" component={LoginForm} />
            <Route path="/not-found" component={Notfound} />

            <Route path="/checkout">{user ? <Checkout /> : <Model />}</Route>
            <Route exact path="/" component={Main} />
          </Switch>
          {/* <Model /> */}
        </div>
      </FoodProvider>
    );
  }
}

export default App;
