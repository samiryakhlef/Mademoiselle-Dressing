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
      <input type="text" placeholder="Rechercher..." value={searchText} onChange={handleChange} />
      <SearchOutlined className="search-icon" />
    </div>
  );
};