import { Link, useParams } from "react-router-dom";
import '../../styles.css';

export default function House({ house }) {
  return (
    <>
      <div className="pet">
        <h2>{house.name}</h2>
        <img src={houseImg} alt="Picture of house" />
        <p>Address: {house.address}</p>
        <p>Price: {house.price}</p>
        <p>Owners Name: {house.ownerName}</p>
        <p>Owners Email: {house.ownerEmail}</p>
        <button>Interested</button>
      </div>
    </>
  );
}
