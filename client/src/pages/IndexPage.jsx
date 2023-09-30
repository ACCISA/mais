import { UserContext } from "../UserContext";
import { useContext } from "react";
import LoginRegister from "../components/index/LoginRegister";
export default function IndexPage() {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      {" "}
      {user && <div className="bg-red-500">LoggedIn</div>}
      {!user && <div className="bg-red-500">NotLoggedIn</div>}
      <LoginRegister></LoginRegister>
    </>
  );
}
