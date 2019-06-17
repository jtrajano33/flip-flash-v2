import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './containers/HomePage';
import Footer from './components/Footer';
import Hiragana from './containers/Hiragana';
import Katakana from './containers/Katakana';
import Kanji from './containers/Kanji';
import ContactUs from './containers/ContactUs';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hiragana' component={Hiragana} />
        <Route exact path='/katakana' component={Katakana} />
        <Route exact path='/kanji' component={Kanji} />
        <Route exact path='/contact' component={ContactUs} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
