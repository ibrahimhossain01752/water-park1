import React from 'react';
import'./Details.css';

const Details = () => {
  return (
    <div class="container mx-auto m-3 row-cols-md-6 mt-3 mb-5 row-cols-sm-12">
      <div class="row col-md-8 d-">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          
        
      <div class="col">
    <div class="card feature1 mb-5">
      <img src="https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/gazebo-M7GHEMR.png" class="card-img-top w-25 h-25 mx-auto mb-2 mt-5" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Private Gazebo</h5>
        <p class="card-text"><span class="span d-block">Lorem ipsum dolor sit amet,</span> <span class="span d-block">consectetuer adipiscing elit.</span></p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card feature1">
      <img src="https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/food.png" class="card-img-top w-25 h-25 mx-auto mb-2 mt-5" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Delicious Food</h5>
        <p class="card-text"><span class="span d-block">Lorem ipsum dolor sit amet,</span> <span class="span d-block">consectetuer adipiscing elit.</span></p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card feature1">
      <img src="https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/lcoker.png" class="card-img-top w-25 h-25 mx-auto mb-2 mt-5" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Safety Lockers</h5>
        <p class="card-text"><span class="span d-block">Lorem ipsum dolor sit amet,</span> <span class="span d-block">consectetuer adipiscing elit.</span></p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card feature1">
      <img src="https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/slide.png" class="card-img-top w-25 h-25 mx-auto mb-2 mt-5" alt="..."/>
      <div class="card-body ">
        <h5 class="card-title ">River Rides</h5>
        <p class="card-text"><span class="span d-block">Lorem ipsum dolor sit amet,</span> <span class="span d-block">consectetuer adipiscing elit.</span></p>
      </div>
    </div>
  </div>
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
      <th scope="row">Monday - Friday</th>
      {/* <td>Mark</td> */}
      <td ><i class="fas fa-clock m-2 clock"></i>11:00 AM - 16:00 PM</td>
      {/* <td>@mdo</td> */}
    </tr>
    <tr>
      <th scope="row">Saturday - Sunday</th>
      {/* <td>Jacob</td> */}
      <td><i class="fas fa-clock m-2 clock"></i>09:00 AM - 17:00 PM</td>
      {/* <td>@fat</td> */}
    </tr>
    <tr>
      <th scope="row">Holiday</th>
      {/* <td colspan="2">Larry the Bird</td> */}
      <td><i class="fas fa-clock m-2 clock"></i>09:00 AM - 17:00 PM</td>
      {/* <td>@twitter</td> */}
    </tr>
  </tbody>
</table>
  </div>
  
      </div>
      <div class="col-md-4 ">
      <div class="row row-cols-1">
        <div class="col container">
          <div class="">
          <img class="image23 mt-5 " src="https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/elementor/thumbs/force-field-e1628827096950-pbjdq7m5d53cshch0fqcclq17fuo353ivgiaxpis5s.jpg" alt=""/>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Details;