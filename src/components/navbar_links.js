import "../stylesheets/navbar_links.css"

const Navbar__links = () => {
  return (
    <navbar className="navbar__links">
        <ul className= "links">
          {/* <!-- Esto se cambia por la info del store.js --> */}
            <li className="navbar-item">Inicio</li>
            <li className="navbar-item selected">Hoy</li>
            <li className="navbar-item">Siguiendo</li> 
        </ul>
    </navbar>
  );
};

export default Navbar__links