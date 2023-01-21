import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUserContext } from "./UserContext";
import { When } from "react-if";

export default function NavBar() {
  const { user } = useUserContext();

  return (
    <nav className="navbar navbar-expand navbar-light bg-light ">
      <div className="navbar-brand">
        <img
          src={require("../smartplan-logo/icon-transparent-bg.png")}
          width="70"
          height="70"
        />
      </div>
      <When condition={!!user}>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className=" nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className=" nav-link" to="/search">
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link className=" nav-link " to="/new">
                Add Receipt
              </Link>
            </li>
          </ul>
        </div>
      </When>
    </nav>
  );
}
