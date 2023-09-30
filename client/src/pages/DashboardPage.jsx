import { useContext } from "react"
import { UserContext } from "../UserContext"
import {useAuthUser} from 'react-auth-kit'

export default function DashboardPage(){
    const {user,setUser,active} = useContext(UserContext)

    const auth = useAuthUser()
    // auth().data

    return (
        <>Your Dashboard
        </>
    )
}