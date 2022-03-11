import React from 'react';
import Cart from '../Home/Home/Cart';
import Footer from '../Home/Home/Footer';
import BookingRe from './BookingRe';

// import Feature from '../Home/Home/Feature';
import Feature3 from './Feature3';
import ServiceBanner from './ServiceBanner';

const Services = () => {
    return (
        <div>
            <ServiceBanner></ServiceBanner>
            {/* <Feature></Feature> */}
            <Feature3></Feature3>
            <BookingRe></BookingRe>
            <Cart></Cart>
            <Footer></Footer>
        </div>
    );
};

export default Services;