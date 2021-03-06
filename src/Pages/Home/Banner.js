import React from 'react';
import emailjs from 'emailjs-com';
import './Banner.css';

const Banner = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_p6km8i4','template_2swxfja', e.target,
         "ZL-Q0Vg6WeBfw_xFM"
         ).then(res =>{
             console.log(res);
         }).catch(err=>console.log(err));
    }
    return (
        <div className='banner-main text-white '>
        <div className="banner-overlay">
        <div className="container col-md-12 col-sm-6">
            <div className="row">
            {/* <Fade left> */}
                <div className="col-lg-6">
                    <div className="banner-content text-center text-md-start">
                        <h6>Welcome To WaterKingdom</h6>
                        <h1>THE GREATEST WATER AND AMUSEMENT PARK IN THE WORLD</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                        
                        <span className='banner-video d-flex align-items-center' >
                            <a className='animation-button' target="_blank" href="https://www.youtube.com/watch?v=KXT2w0dCsYc&ab_channel=AddieMaePlays"><i class="far fa-play-circle"></i> </a>
                            <h5 className='ms-3'>Watch Intro</h5>
                        </span>
                    </div>
                </div>
                {/* </Fade> */}
                <div className="col-lg-2"></div>
            {/* <Fade right> */}
                <div className="col-lg-4">
                <div className="book-form text-white " data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <form onSubmit={sendEmail}> {/* onSubmit={handleSubmit(onSubmit)} */}
                        <label>name</label>
                        <input
                        // {...register("user")}
                        className="p-3 my-2 w-100 book-form-input"
                        placeholder='name'
                        />
                        <label>Email</label>
                        <input
                        // {...register("email")}
                        className="p-3 my-2 w-100 book-form-input"
                        placeholder='user_email'
                        />
                        <br />
                        <select className="p-3 my-2 w-100 book-form-input"
                            > {/* {...register("packages")} */}
                            <option>Select a packages</option>
                            <option value="family">family packages</option>
                            <option value="basic">basic packages</option>
                            <option value="premium">premium packages</option>
                        </select>
                        <br />
                        <input
                        // {...register("date")}
                        type="date"
                        className="p-3 my-2 w-100 book-form-input"
                        />
                        <br />
                        <label>comments</label>
                        <textarea
                       /*  {...register("comments")} */
                        placeholder="comments"
                        className="p-3 my-2 w-100 book-form-input"
                        />
                        <br />
        
                       {/* {errors.exampleRequired && <span>This field is required</span>} */}
        
                        <input
                        type="submit"
                        value="Booking"
                        className="btn btn-info w-50 text-white"
                        />
                    </form>
                </div>
            </div>
            {/* </Fade> */}
            </div>
        </div>
        </div>
    </div>
    );
};

export default Banner;