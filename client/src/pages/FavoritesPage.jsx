import { useState, useEffect } from "react";
import axios from "axios";
import { useAuthUser } from "react-auth-kit";
export default function FavoritesPage() {
  const auth = useAuthUser();
  console.log(auth());
  const { favourites, setFavourites } = useState({});

  // useEffect(() => {
  //     axios.post('/get_favourites', {})
  // })

  return <></>;
}
