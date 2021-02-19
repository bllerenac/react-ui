import Navbar__links from "../components/navbar_links"
import Navbar__icons from "../components/navbar_icons"
import "../stylesheets/header.css"

const Header = () =>{
  return (
    <header className="header">
      <Navbar__links />
      {/* Search bar */}
      <Navbar__icons />
    </header>
  );
};

export default Header;