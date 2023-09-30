import {
    Button,
    Label,
    TextInput,
    Alert,
  } from "flowbite-react";
  import { useState } from "react";
  import axios from "axios"
  import { Navigate } from "react-router-dom";
export default function RegisterForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordC, setPasswordC] = useState("");
    const [match, setMatch] = useState(true)
    const [redirect, setRedirect] = useState(false)
    const [emailDupe, setEmailDupe] = useState(false)
    const handleRegister = ev => {
        ev.preventDefault()

        if (!match) return;

        axios.post("/register",{
          email:email,
          password:password
        })
        .then(({res}) => {
          setRedirect(true)
          console.log('worked')

        })
        .catch((err) => {
          if (err.response.status == 422) {
            setEmailDupe(true)
            return;
          }
        })
    }
    console.log('ran')
    if (redirect){
      return <Navigate to={'/dashboard'}/>
    }
    return (
        <>
        <div className="flex h-screen justify-center items-center -mt-8">
          <form className="flex flex-col gap-4 w-1/6" onSubmit={handleRegister}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Email" />
              </div>
              <TextInput
                value={email}
                onChange={(ev) => {
                  if (emailDupe){
                    setEmailDupe(false)
                  }
                  setEmail(ev.target.value);
                }}
                id="email1"
                type="text"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                required={false}
                value={password}
                onChange={(ev) => {
                  if (ev.target.value != passwordC){
                    setMatch(false)
                  } else {
                    setMatch(true)
                  }
                  setPassword(ev.target.value);
                }}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Confirm Password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                required={false}
                value={passwordC}
                onChange={(ev) => {
                  if (ev.target.value != password){
                    setMatch(false)
                  } else {
                    setMatch(true)
                  }
                  setPasswordC(ev.target.value);
                }}
              />
            </div>
            <div className="flex items-center gap-2">
              {/* <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label> */}
            </div>
            {emailDupe && (<Alert color="failure">
              <span>
                <span className="font-medium">Alert!</span> This email is already taken.
              </span>
            </Alert>)}
            {!match && (<Alert color="failure">
              <span>
                <span className="font-medium">Alert!</span> Passwords do not match.
              </span>
            </Alert>)}
            <Button type="submit">Register</Button>
          </form>
        </div>
      </>
    )
}