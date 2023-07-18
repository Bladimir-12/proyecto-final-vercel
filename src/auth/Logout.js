import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Logout = () => {
  const { logout } = useAuth0();

  return (
    <div className="btn-acceder">
    <button type="button" className="btn btn-primary" onClick={() => logout({ returnTo: window.location.origin })}>
      Cerrar sesión
    </button>
    </div>
  );
};