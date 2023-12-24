import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadWomenData } from '../../../reducers/WomensReducers';

export const WomensCollections = () => {
  const dispatch = useDispatch();

  const womenState = useSelector((state) => state.WomensReducers);

  useEffect(() => {

    dispatch(loadWomenData());

  }, [dispatch]);

  return (
    <div>
      <h1>Collection Femmes</h1>
      {womenState.loading && <p>Loading...</p>}
      {womenState.failed && <p>Failed to load data</p>}
      {womenState.success && (
        <ul>
          {womenState.data.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

