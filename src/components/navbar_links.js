import "../stylesheets/navbar_links.css"
import { store } from "./../store";

const Navbar__links = () => (
    <navbar className="navbar__links">
        <ul className= "links">
          { store.links.map((element) => {
            const elementSelected = element.selected ? "selected" : "";
            return (
             <li key={element.name} className= {`navbar-item ${elementSelected}`}>
               {element.name}
             </li>);
          })}
        </ul>
    </navbar>
);

export default Navbar__links