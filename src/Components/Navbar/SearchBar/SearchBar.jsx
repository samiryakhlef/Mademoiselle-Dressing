import { SearchOutlined } from '@mui/icons-material'
import'./SearchBar.css'

export const SearchBar = ()=> {
  return (
    <>
        <div className="search">
        <input type="text" placeholder="Rechercher..." />
        <SearchOutlined />
      </div>
    </>
  )
}

