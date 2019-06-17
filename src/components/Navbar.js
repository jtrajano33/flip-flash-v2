import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [selectedActive, setSelectedActive] = useState('HomePage')

    const handlePage = page => {
        setSelectedActive(page)
    }

    const homePageActive = selectedActive === 'HomePage'? "nav-link active" : "nav-link text-white";
    const hiraganaActive = selectedActive === 'Hiragana'? "nav-link active" : "nav-link text-white";
    const katakanaActive = selectedActive === 'Katakana'? "nav-link active" : "nav-link text-white";
    const kanjiActive = selectedActive === 'Kanji'? "nav-link active" : "nav-link text-white";
    const contactActive = selectedActive === 'Contact'? "nav-link active" : "nav-link text-white";

    return (
        <nav className="navbar navbar-expand-lg navbar-dark color m-auto">
            <Link className="navbar-brand" to="/" id="logo"><i className="fas fa-american-sign-language-interpreting"></i> FlipFlash</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item" onClick={() => handlePage('HomePage')}>
                        <Link className={homePageActive} to="/"> Home </Link>
                    </li>

                    <li className="nav-item" onClick={() => handlePage('Hiragana')}>
                        <Link className={hiraganaActive} to="/hiragana"> Hiragana </Link>
                    </li>

                    <li className="nav-item" onClick={() => handlePage('Katakana')}>
                        <Link className={katakanaActive} to="/katakana"> Katakana </Link>
                    </li>

                    <li className="nav-item" onClick={() => handlePage('Kanji')}>
                        <Link className={kanjiActive} to="/kanji"> Kanji </Link>
                    </li>

                    <li className="nav-item" onClick={() => handlePage('Contact')}>
                        <Link className={contactActive} to="/contact">Contact Us</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )

}

export default Navbar