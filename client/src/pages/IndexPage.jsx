import { useContext } from "react";
import {useAuthUser} from 'react-auth-kit'

import LoginRegister from "../components/index/LoginRegister";
import houseImg from "../images/houseMain.jpg"
export default function IndexPage() {
  const auth = useAuthUser()
  
  return (
    <>
      {" "}
      {auth() && <div>LoggedIn</div>}
      {!auth() && <div>NotLoggedIn</div>}
      <LoginRegister>
        
      </LoginRegister>
      <div className="imageBg"><img src={houseImg} alt="lol" /></div> 

        
      </>
  );
}
