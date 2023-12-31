import "./NavBar.css"

import { Link } from "react-router-dom"

// components
import CartWidget from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
        <nav className="Navbar">
            <ul>
                <Link className="li" to="/">Inicio</Link>
                <Link className="li" to="/novedades">Novedades</Link>
                <Link className="li" to="/hombres">Hombres</Link>
                <Link className="li" to="mujeres">Mujeres</Link>

                <li>
                    <CartWidget/>
                </li>

            </ul>
        </nav>
    )
}
