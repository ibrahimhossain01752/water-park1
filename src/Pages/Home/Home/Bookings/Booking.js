import React from 'react';
import BookingRe from '../../../Services/BookingRe';
import Footer from '../Footer';
import BookingBanner from './BookingBanner';
import BookingCard from './BookingCard';

const Booking = () => {
    return (
        <div>
           <BookingBanner></BookingBanner> 
           <BookingCard></BookingCard>
          <BookingRe></BookingRe>
          <Footer></Footer>
           
        </div>
    );
};

export default Booking;