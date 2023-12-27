import { useDispatch, useSelector } from "react-redux";
import "./MensCollections.css";
import { useEffect, useState } from "react";
import { loadMensData } from "../../../reducers/MensReducers";

export const MensCollections = () => {
  const dispatch = useDispatch();
  const { loading, failed, success, data } = useSelector((state) => state.MensReducers);

  useEffect(() => {
    dispatch(loadMensData());
  }, [dispatch]);

const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <h1>Hommes</h1>
      <input
      className='womensInput'
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Rechercher des produits..."
      />
      {loading && <p>Loading...</p>}
      {failed && <p>Failed to load data</p>}
      {success && (
        <div className="card-container">
        {data
  ?.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .map((item) => (
    <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <p>{item.price} €</p>
            </div>
  ))}
        </div>
      )}
    </div>
  );
};