import { useState, useEffect } from "react";
import axios from "axios";
import { useAuthUser } from "react-auth-kit";
export default function FavoritesPage() {
  const auth = useAuthUser();
  const [favourites, setFavourites] = useState({});

  useEffect(() => {
    axios
      .post("/get_favourites", {
        favourites: auth().data.favourites,
      })
      .then((res) => {
        console.log(res.data);
      });
    setFavourites(auth().data.favourites);
  }, []);

  return <>{favourites.length == 0 && <> No houses have been saved</>}</>;
}
