import React, { useEffect, useState } from 'react';
import WaterCards from './WaterCards';

const WaterCard = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('water.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
      <div  className="row">
        <h2>Our Packages</h2>
        {
            services.map(service => <WaterCards
                key={service}
                service={service}
            ></WaterCards>)
        }
      </div>
    );
};

export default WaterCard;