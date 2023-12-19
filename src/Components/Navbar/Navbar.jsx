import { Account } from "./Account/Account";
import {Menu} from "./Menu/Menu";
import "./Navbar.css";
import {SearchBar} from "./SearchBar/SearchBar";

export const Navbar = () => {
  return (
    <nav>
      <Menu />
      <SearchBar />
      <Account />
    </nav>
  );
};
