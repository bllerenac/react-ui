import NavbarLinks from "../components/navbar_links";
import NavbarSocial from "../components/navbar_icons";
import SearchBar from "../components/Search";
import "../stylesheets/header.css"

const Header = () =>{
  return (
    <header className="header">
      <NavbarLinks />
      <SearchBar />
      <NavbarSocial />
    </header>
  );
};

export default Header;