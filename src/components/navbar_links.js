import "../stylesheets/navbar_links.css"
import STORE from "./../store";

const NavbarLinks = () => (
    <div className="navbar__links">
        <ul className= "links">
          { STORE.links.map((element) => {
            const elementSelected = element.selected ? "selected" : "";
            return (
             <li key={element.name} className= {`navbar-item ${elementSelected}`}>
               {element.name}
             </li>);
          })}
        </ul>
    </div>
);

export default NavbarLinks