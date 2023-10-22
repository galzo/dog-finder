import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import AppTexts from "../../../consts/texts";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      onClick={() =>
        logout({
          logoutParams: {
            returnTo: `${window.location.origin}/dog-finder`,
          },
        })
      }
    >
      {AppTexts.authPage.logoutCta}
    </Button>
  );
};

export default LogoutButton;
