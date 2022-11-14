import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log("context", user);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="header">
      <div className="navbar bg-primary text-primary-content flex justify-between">
        <div>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            Awsome Auth
          </Link>
          {user?.email && <span>welcome {user.email}</span>}
          {user && (
            <button onClick={handleSignOut} className="btn btn-sm ml-5">
              Sign out
            </button>
          )}
        </div>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/orders"}>Orders</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
