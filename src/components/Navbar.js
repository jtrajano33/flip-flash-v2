import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark color m-auto">
            <Link className="navbar-brand" to="/" id="logo"><i className="fas fa-american-sign-language-interpreting"></i> FlipFlash</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/"> Home </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/hiragana"> Hiragana </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/katakana"> Katakana </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/kanji"> Kanji </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/contact">Contact Us</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )

}

export default Navbar