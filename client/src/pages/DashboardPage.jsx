import React, { useEffect, useState } from "react";
import House from "../components/dashboard/House";
import houseImg from "../images/house.jpg";
import '../styles.css';

export default function DashboardPage() {
  const [houses, setHouses] = useState([]);
  
  useEffect(() => {
    // Fetch data from the backend API
    fetch("/houses")
      .then((response) => response.json())
      .then((data) => setHouses(data));
  }, []);
  
  return (
    <>
      <div class="main_content">
        <div class="content">
          <div class="pet-list">
            {houses.map((house) => (
              <House key={house.id} owner={house.owner} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
