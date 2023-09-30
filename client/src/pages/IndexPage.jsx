import { UserContext } from "../UserContext";
import { useContext } from "react";
import LoginRegister from "../components/index/LoginRegister";
import houseImg from "../images/houseMain.jpg"
export default function IndexPage() {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  return (
    <>
      {" "}
      {user && <div>LoggedIn</div>}
      {!user && <div>NotLoggedIn</div>}
      <LoginRegister>
        
      </LoginRegister>
      <div><img src={houseImg} alt="lol" /></div>    
        
      </>
  );
}
