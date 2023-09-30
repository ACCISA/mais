import { Link, useParams } from "react-router-dom";
import houseImg from "../../images/house.jpg";

export default function House() {
  return (
    <>
      <h1>House Name</h1>
      <p>Address</p>
      <p>PRICE </p>
      <div className="mt-4">
        <Link
          to={"/houses/" + "temp"}
          className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl"
        >
          <div className="flex w-32 h-32 bg-gray-300 grow shrink-0">
            <img className="rounded-2xl w-full object-cover " src={houseImg} />
          </div>
          <div className="grow-0 shrink">
            <h2 className="text-xl">Title</h2>
            <p className="text-sm mt-2">Description</p>
          </div>
        </Link>
      </div>
    </>
  );
}
