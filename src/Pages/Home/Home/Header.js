import React from 'react';
import './Header.css';
//import { Button, Container, Nav, Navbar } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
//import { HashLink } from 'react-router-hash-link';
//import useAuth from '../../../hook/useAuth';
//import useAuth from '../../../hook/useAuth';
// import useFirebase from './../../../hook/useFirebase';

const Header = () => {
    // const {user, logout} = useAuth();
    return (
       
        <nav class="navbar navbar-expand-lg navbar-light bg-light mx-auto">
        <div class="container-fluid">
        <img class="nav-image" src="https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/logo-MVT5HVF.png"/>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
            {/* <li class="nav-item">
               <img class="nav-image" src="https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/logo-MVT5HVF.png"/>
              </li> */}
              <li class="nav-item m-3 fw-4">
                <a className="nav-link text-primary  active home " aria-current="page" href="#">HOME</a>
              </li>
              <li class="nav-item m-3 fw-4 text-primary">
                <a class="nav-link  home1" href="#">ABOUT US</a>
              </li>
              <li class="nav-item m-3">
                <a class="nav-link  home1" href="#">SERVICES</a>
              </li>
              <li class="nav-item m-3">
                <a class="nav-link   home1">PAGES</a>
              </li>
              <li class="nav-item m-3">
                <a class="nav-link home1">BLOG</a>
              </li>
              <li class="nav-item m-3">
                <a class="nav-link  home1">CONTACT</a>
              </li>
              
            </ul>
            <div className="social-menu d-flex list-unstyled justify-content-center m-3 ">
            <li><i className="fab fa-facebook-square m-2"></i></li>
                              <li><i className="fab fa-twitter-square m-2"></i></li>
                              <li><i className="fab fa-instagram-square m-2"></i></li>
                              <li><i className="fab fa-linkedin m-2"></i></li>
            </div>
            
          </div>
        </div>
      </nav>
    );
};

export default Header;








/* 
 <img class="nav-image" src="https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/logo-MVT5HVF.png"/>

*/


/* 


 <div className="social-menu d-flex list-unstyled justify-content-center m-3 ">
      <li><i className="fab fa-facebook-square m-2"></i></li>
                        <li><i className="fab fa-twitter-square m-2"></i></li>
                        <li><i className="fab fa-instagram-square m-2"></i></li>
                        <li><i className="fab fa-linkedin m-2"></i></li>
      </div>



*/






/* 

 <div className='text-center '>
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-lg-4 ">
                <a className="navbar-brand" href="/">
                        <div className="logo">
                            <h4 className="text-dark"><img style={{height: '50px'}} className='img-fluid' src={"https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/logo-MVT5HVF.png"} alt="" /></h4>
                        </div>
                    </a>
                </div>
                    <div className="col-lg-4">
                    <div className="social-menu d-flex list-unstyled justify-content-center ">                  
                    <li><i className="fab fa-facebook-square"></i></li>
                    <li><i className="fab fa-twitter-square"></i></li>
                    <li><i className="fab fa-instagram-square"></i></li>
                    <li><i className="fab fa-linkedin"></i></li>
                    </div>
                </div>
                <div className="col-lg-4 mt-2">
                    <div className='top-contact fw-bolder'>
                        <span>waterpark@gmail.com <i className="fas fa-envelope"></i></span>
                        <span>8777655 <i className="fas fa-phone-volume"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

*/