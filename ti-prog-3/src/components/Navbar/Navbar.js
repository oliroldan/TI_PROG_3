import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <nav className='navbar'>
            <article>
                <h2 className="titulo">ALL MOVIES</h2>
                <img className= "logo" src="./img/logo.png" alt=""/>
            </article>
            <ul>
                <li><Link to="/" exact>Home</Link></li>
                <li><Link to="/favoritos">Favoritos</Link></li>
                <li><Link to="/populares">Peliculas mas populares</Link></li>
                <li><Link to="/cartel">Peliculas en cartelera</Link></li>
            </ul>
        </nav>
  )
}

export default Navbar
