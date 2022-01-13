import React from 'react';
import './Feature.css';

const Feature = () => {
    return (
        <div class="Feature">
            {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link> */}
            <div class="container row-cols-md-4">
                <div class="card3">
                    <figure class="card-thumb">
                        <img class="card-image" src="https://images.unsplash.com/photo-1505847610351-22b86a1afd66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBvb2x8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <figcaption class="card-caption">
                            <h4 class="card-title">Best Pools</h4>
                            <p class="card-snippet">orem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore</p>
                            <a href="#" class="card-button fw-700">Read more<i class="fas fa-arrow-right"></i></a>
                        </figcaption>
                    </figure>
                </div>
                <div class="card3">
                    <figure class="card-thumb">
                        <img class="card-image" src="https://media.istockphoto.com/photos/children-on-water-slide-picture-id509801333?b=1&k=20&m=509801333&s=170667a&w=0&h=hocoBL4_Uy_CWVuKO3lNsjs88mV1Np6zMCuMaUTI4qU=" alt="" />
                        <figcaption class="card-caption">
                            <h4 class="card-title">Water Slides</h4>
                            <p class="card-snippet">orem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore</p>
                            <a href="#" class="card-button">Read more<i class="fas fa-arrow-right"></i></a>
                        </figcaption>
                    </figure>
                </div>
                <div class="card3">
                    <figure class="card-thumb">
                        <img class="card-image h-100" src="https://media.istockphoto.com/photos/happy-family-having-fun-in-an-amusement-park-picture-id1051006012?b=1&k=20&m=1051006012&s=170667a&w=0&h=0EmAX-0QczEIvw6PsNlpIfj9Uk47piLKtOeaw8Je3IY=" alt="" />
                        <figcaption class="card-caption">
                            <h4 class="card-title">World Class Rides</h4>
                            <p class="card-snippet">orem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore</p>
                            <a href="#" class="card-button ">Read more<i class="fas fa-arrow-right"></i></a>
                        </figcaption>
                    </figure>
                </div>
            </div>
       
           {/* <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@300&display=swap" rel="stylesheet"/>

<div class="container">
	<div class="card">
		<figure class="card__thumb">
			<img src="https://source.unsplash.com/75S9fpDJVdo/300x510" alt="Picture by Kyle Cottrell" class="card__image"/>
			<figcaption class="card__caption">
				<h2 class="card__title">NASA Has Found Hundreds Of Potential New Planets</h2>
				<p class="card__snippet">NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
				<a href="" class="card__button">Read more</a>
			</figcaption>
		</figure>
	</div>

	<div class="card">
		<figure class="card__thumb">
			<img src="https://source.unsplash.com/71u2fOofI-U/300x510" alt="Picture by Nathan Dumlao" class="card__image"/>
			<figcaption class="card__caption">
				<h2 class="card__title">This Is Your Body And Brain On Coffee</h2>
				<p class="card__snippet">Drinking more caffeine during the coronavirus lockdown? Here's how it can affect you over time and advice on making it better for you.</p>
				<a href="" class="card__button">Read more</a>
			</figcaption>
		</figure>
	</div>

	
</div>

<p class="disclaimer">All pictures were taken from <a class="disclaimer__link" href="https://unsplash.com/" target="_blank">Unsplash.</a></p> */}

        </div>
    );
};

export default Feature;