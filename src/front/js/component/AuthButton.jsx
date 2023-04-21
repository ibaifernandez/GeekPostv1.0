import React from "react"
import { Link } from "react-router-dom"

export const AuthButton = ({ isLoggedIn }) => {
    if (isLoggedIn) {
      return (
        <Link to={`/home`} className="btn-get-started">
          Ve a tu escritorio
        </Link>
      );
    }
    return (
      <Link to={`/signup`} className="btn-get-started">Regístrate 🖋</Link>
    );
  };
  