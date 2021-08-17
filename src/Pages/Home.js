import React from 'react';
import Header from '../Components/Header/Header';
import HeroVideo from '../Components/HeroVideo/HeroVideo';
import About from '../Components/About/About'
import Main from '../Components/Main/Main'
import Preloader from '../Components/Preloader/Preloader'
const Home = () => {
    return ( 
        <div>
            <Preloader />
            <Header />
            <HeroVideo />
            <About />
            <Main />
        </div>
     );
}
 
export default Home;