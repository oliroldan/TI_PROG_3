import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <article>
                <img className="logo" src="./img/logo.png" alt="" />
            </article>
            <ul>
                <li><Link to="/" exact>Home</Link></li>
                <li><Link to="/favoritos">Favoritos</Link></li>
                <li><Link to="/populares">Peliculas populares</Link></li>
                <li><Link to="/cartelera">Peliculas en cartelera</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
