import { useContext } from "react";
import { useAuthUser } from "react-auth-kit";
import House from "../components/dashboard/House";

export default function DashboardPage() {
  const auth = useAuthUser();
  // auth().data

  return (
    <>
      Your Dashboard
      <House />
      <House />
      <House />
      <House />
      <House />
    </>
  );
}
