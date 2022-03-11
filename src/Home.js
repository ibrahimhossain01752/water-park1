import React from 'react';
import Banner from './Pages/Home/Banner';

import Cart from './Pages/Home/Home/Cart';
import Details from './Pages/Home/Home/Details';
import Feature from './Pages/Home/Home/Feature';
import Footer from './Pages/Home/Home/Footer';
import Header from './Pages/Home/Home/Header';
//import Header from './Pages/Home/Home/Header';
//import Header from './Pages/Home/Home/Header';
// import AllReviews from './Pages/Home/Home/Reviews';
import Subscriber from './Pages/Home/Home/Subscriber';
import WaterCard from './Pages/Home/Home/WaterCard';

// import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
           <Banner></Banner>
           <Feature></Feature>
           {/* <Feature2></Feature2> */}
           <Details></Details>
           <WaterCard></WaterCard>
            {/* <Features></Features> */}
            <Cart></Cart>
            {/* <AllReviews></AllReviews> */}
            {/* <Gallery></Gallery> */}
            <Subscriber></Subscriber>
            <Footer></Footer>
        </div>
    );
};

export default Home;