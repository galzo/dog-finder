import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import AppTexts from "../../../consts/texts";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button onClick={() => loginWithRedirect()}>
      {AppTexts.authPage.loginCta}
    </Button>
  );
};

export default LoginButton;
