import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AppTexts } from "../../../consts/texts";
import { Button } from "@mui/material";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin + "/dog-finder" } })}>
      {AppTexts.authPage.logoutCta}
    </Button>
  );
};
