import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 intro">
                        <h1 className="animated flipInY titleFont">Introducing Flip Flash</h1>
                        <p style={{fontSize: '18px'}}>Say Goodbye to your boring flash card. Memorizing shouldn't always be on plain background.</p>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <div className="row hiragana">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 percard">
                        <div className="learn m-auto text-white">
                            <div className="card img-fluid"></div>
                            <div className="cardContent">
                                <h1>Learn Hiragana</h1>
                                <p className="card-text">The first step to learn Japanese</p>
                                <Link to="/hiragana" className="btn btn-dark">Start Learning</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 percard">
                        <div className="learn m-auto text-white">
                            <div className="card1 img-fluid"></div>
                            <div className="cardContent">
                                <h1>Learn Katakana</h1>
                                <p className="card-text">Convert foreign words into Japanese now!</p>
                                <Link to="/katakana" className="btn btn-dark">Start Learning</Link>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 percard kanji">
                        <div className="learn m-auto text-white">
                            <div className="card2 img-fluid"></div>
                            <div className="cardContent">
                                <h1>Learn Kanji	</h1>
                                <p className="card-text">A single letter has its own meaning.</p>
                                <Link to="/kanji" className="btn btn-dark">Start Learning</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;