import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { createStyleHook } from "../../../hooks/styleHooks";
import { Box, Typography } from "@mui/material";
import { PageImage } from "../PageImage/PageImage";

const useUserComponentStyles = createStyleHook((theme) => {
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      right: 0,
    },
  };
});

const UserComponent = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const styles = useUserComponentStyles();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return <LoginButton />;
  }

  if (!user) {
    return null;
  }

  return (
    <Box sx={styles.root} component={"span"}>
      {user.picture && <PageImage src={user.picture} alt={user?.name ?? "user-name"} />}
      {user.name && <Typography variant="h2">{user.name}</Typography>}
      <LogoutButton />
    </Box>
  );
};

export default UserComponent;
