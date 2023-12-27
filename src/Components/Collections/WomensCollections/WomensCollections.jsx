import  { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//REDUCERS
import { loadWomenData } from '../../../reducers/WomensReducers';
import { Categories } from '../../Categories/Categories';

//CSS
import "./WomensCollections.css"

/**
 * Composant pour afficher les collections pour femmes.
 */
export const WomensCollections = () => {
  // Dispatch pour exécuter les actions Redux
  const dispatch = useDispatch();

  // Sélectionne les données nécessaires depuis le state
  const { loading, failed, success, data } = useSelector((state) => state.WomensReducers);

  // Callback mémorisé pour exécuter l'action loadWomenData une fois la fonction mémorisée
  const memoizedLoadWomenData = useCallback(() => {
    dispatch(loadWomenData());
  }, [dispatch]);

  // Charge les données pour la catégories "Femmes" à la création du composant ou lorsque memoizedLoadWomenData change
  useEffect(() => {
    memoizedLoadWomenData();
  }, [memoizedLoadWomenData]);

const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
    <div className='filterTitle'>
      <h1 className='womensTitle'>Collection Femmes</h1>
      <input
      className='womensInput'
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Rechercher des produits..."
      />
    </div>
      {/* Affiche les messages de chargement, d'échec ou de succès */}
      {loading && <p>Chargement en cours...</p>}
      {failed && <p>Échec du chargement des données</p>}
      {success && (
        <div className="card-container">
          {/* Affiche chaque élément du tableau de données */}
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
      <Categories />
    </>
  );
};