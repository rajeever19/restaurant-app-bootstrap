import React from "react";
import { Link } from "react-router-dom";
import auth from "../../services/authService";

const Navbar = ({ user }) => {
  const { first_name: name } = user ? user : { first_name: "" };
  const logout = () => {
    auth.logout();
    window.location.reload();
  };
  return (
    <div className="nav_container">
      <div className="nav_icon">Food Delivery</div>
      <div className="nav_item">
        {user ? (
          <>
            <Link to="/profile" className="profile">
              {name}
            </Link>
            <div className="profile_content" onClick={() => logout()}>
              Logout
            </div>
          </>
        ) : (
          <Link to="/login" className="login">
            <i className="fa fa-user" aria-hidden="true" />
            {"  "} Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
