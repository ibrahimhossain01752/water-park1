import React from 'react';
import Banner from './Pages/Home/Banner';

import Cart from './Pages/Home/Home/Cart';
import Details from './Pages/Home/Home/Details';
import Footer from './Pages/Home/Home/Footer';
// import Gallery from './Pages/Home/Home/Gallery';
// import Details from './Pages/Home/Home/Details';
// import Features from './Pages/Home/Home/Features';
import Header from './Pages/Home/Home/Header';
import AllReviews from './Pages/Home/Home/Reviews';
import Subscriber from './Pages/Home/Home/Subscriber';

// import Header from './Header';

const Home = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <Header></Header>
           <Banner></Banner>
           <Details></Details>
            {/* <Features></Features> */}
            <Cart></Cart>
            <AllReviews></AllReviews>
            {/* <Gallery></Gallery> */}
            <Subscriber></Subscriber>
            <Footer></Footer>
        </div>
    );
};

export default Home;