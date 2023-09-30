import { useContext } from "react"
import {useAuthUser} from 'react-auth-kit'

export default function DashboardPage(){

    const auth = useAuthUser()
    // auth().data

    return (
        <>Your Dashboard
        </>
    )
}