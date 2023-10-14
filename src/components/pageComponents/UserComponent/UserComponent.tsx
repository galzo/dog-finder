import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';


const UserComponent = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

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
    <span style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      columnGap: "20px"
    }}>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <LogoutButton />
    </span>
  );
}

export default UserComponent;