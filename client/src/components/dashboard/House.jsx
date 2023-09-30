import { Link, useParams } from "react-router-dom";
import '../../styles.css';

export default function House({ owner }) {
  return (
    <>
      <div className="pet">
        <h2>{owner.name}</h2>
        <img src={houseImg} alt="Picture of house" />
        <p>Address: {owner.address}</p>
        <p>Price: {owner.price}</p>
        <p>Owners Name: {owner.ownerName}</p>
        <p>Owners Email: {owner.ownerEmail}</p>
        <button>Interested</button>
      </div>
    </>
  );
}
