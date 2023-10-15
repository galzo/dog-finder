import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../LoginButton/LoginButton";
import { LogoutButton } from "../LogoutButton/LogoutButton";
import { createStyleHook } from "../../../hooks/styleHooks";
import { Box, Typography } from "@mui/material";
import { PageImage } from "../PageImage/PageImage";

const useUserComponentStyles = createStyleHook(() => {
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      columnGap: "20px",
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
    return <div>No user</div>;
  }

  return (
    <Box component={"span"} sx={styles.root}>
      {user.picture && <PageImage src={user.picture} alt={user?.name ?? "user-photo"} />}
      <Typography variant="body2">{user.name}</Typography>
      <LogoutButton />
    </Box>
  );
};

export default UserComponent;
