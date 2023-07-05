import { useAuth } from "../contexts/auth";

const Protected: React.FC = () => {
  let auth = useAuth();

  return <h1>Welcome, {auth.user}</h1>;
};

export default Protected;
