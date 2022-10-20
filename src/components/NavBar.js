import Widget from "./Widget";

const NavBar = () => {
    return(
        <nav className="navbar">
            <h1>Amoblamientos Bahía</h1>
            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Nosotros</li>
                <Widget/>
            </ul>
        </nav>
    )
}

export default NavBar;