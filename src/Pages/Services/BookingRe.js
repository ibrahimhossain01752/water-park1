import React from 'react';
import './Booking.css';

const BookingRe = () => {
    return (
        
        <div className='banner-main4 text-white '>
        <div className="banner-overlay4">
        <div className="container4  col-md-12 col-sm-6">
            <div className="row">
            {/* <Fade left> */}
               
                {/* </Fade> */}
                {/* <div className="col-lg-2"></div> */}
            {/* <Fade right> */}
                <div className="col-lg-4">
                <div className="book-form text-white " data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <form class="bg3" > {/* onSubmit={handleSubmit(onSubmit)} */}
                        <input
                        // {...register("user")}
                        className="p-3 my-2 w-100 book-form-input"
                        placeholder='name'
                        />
                        <input
                        // {...register("email")}
                        className="p-3 my-2 w-100 book-form-input"
                        placeholder='email'
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
            <div className="col-lg-8">
                    <div className="banner-content text-center text-md-start">
                        <h6>BOOK NOW</h6>
                        <h3 class="text-light fw-5">SPEND YOUR HOLIDAY</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco incididunt magna aliqua veniam quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                        <h5 class="fw-5">Opening Hours</h5>
                     
                    </div>
                    <div>
                    <table class="table">
  {/* <thead>
    <tr> */}
      {/* <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th> */}
      {/* <th scope="col">Handle</th> */}
    {/* </tr>
  </thead> */}
  <tbody class="tablebody">
    <tr>
      <th class="text-light" scope="row">Monday - Friday</th>
      {/* <td>Mark</td> */}
      <td class="text-light"><i class="fas fa-clock m-2 clock "></i>11:00 AM - 16:00 PM</td>
      {/* <td>@mdo</td> */}
    </tr>
    <tr>
      <th class="text-light" scope="row">Saturday - Sunday</th>
      {/* <td>Jacob</td> */}
      <td class="text-light"><i class="fas fa-clock m-2 clock"></i>09:00 AM - 17:00 PM</td>
      {/* <td>@fat</td> */}
    </tr>
    <tr>
      <th class="text-light" scope="row">Holiday</th>
      {/* <td colspan="2">Larry the Bird</td> */}
      <td class="text-light"><i class="fas fa-clock m-2 clock"></i>09:00 AM - 17:00 PM</td>
      {/* <td>@twitter</td> */}
    </tr>
  </tbody>
</table>
<div>
    
</div>
                    </div>
                </div>
            {/* </Fade> */}
            </div>
        </div>
        </div>
    </div>
    );
};

export default BookingRe;