import { useState } from 'react';
import { SearchOutlined } from '@mui/icons-material';
import './SearchBar.css';

export const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="search-bar">
      <input type="text" id='searchBar' name='searchBar' placeholder="Rechercher..." value={searchText} onChange={handleChange} />
      <SearchOutlined className="search-icon" />
    </div>
  );
};