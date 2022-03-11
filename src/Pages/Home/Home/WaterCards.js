import React from 'react';

const WaterCards = ({service}) => {
    const {img, title, discrip} = service;
    return (
        <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{discrip}</p>
            </div>
            
          </div>
        </div>
       
       
      </div>
    );
};

export default WaterCards;