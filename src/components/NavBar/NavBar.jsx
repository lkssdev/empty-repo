import "./NavBar.css"

import CartWidget from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
        <nav className="Navbar">
            <ul>
                <li>Novedades</li>
                <li>Hombres</li>
                <li>Mujeres</li>
                <li>Niños</li>
                <li>Deportes</li>
                <li>
                    <CartWidget/>
                </li>

            </ul>
        </nav>
    )
}
