import { useAuth0 } from "@auth0/auth0-react";
import { AppTexts } from "../../../consts/texts";
import { Button } from "@mui/material";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()}>{AppTexts.authPage.loginCta}</Button>;
};
