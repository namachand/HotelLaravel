import React,{Component} from 'react';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import room1 from './images/room1.jpg';
import room2 from './images/room2.jpeg';
import room3 from './images/room3.jpg';
import room4 from './images/room4.jpg';
import room5 from './images/room5.jpg';
import room6 from './images/room6.jpg';
import testimonial1 from './images/testimonial1.jpg';
import testimonial2 from './images/testimonial2.jpg';
import testimonial3 from './images/testimonial3.png';
import testimonial4 from './images/testimonial4.jpg';
import testimonial5 from './images/testimonial5.jpg';
import testimonial6 from './images/testimonial6.jpg';
import testimonial7 from './images/testimonial7.jpg';
import testimonial8 from './images/testimonial8.jpg';
import testimonial9 from './images/testimonial9.jpg';
import benches from './images/benches.jpg'
import bar from './images/bar.jpg'
import carparks from './images/carparks.jpg'
import club from './images/club.jpeg'
import fire from './images/fire.jpg'
import spa from './images/spa.jpg'
import swimmingpool from './images/swimmingpool.jpg'
import homeImage from './images/home.jpg'
import "./css/Home.css";
import {Navbar,Nav,NavLink,NavItem,NavbarBrand} from "reactstrap"

export default class Home extends Component{
    render(){
        return(  
        <React.Fragment>
        <Navbar dark expand='md' fixed='top' style={{
                backgroundColor:"grey",
                height:50,
                
            }}>
            <NavbarBrand className="mr-auto">Aman</NavbarBrand>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink className="nav-link" tag={Link} to="/"><span>Home</span></NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" tag={Link} to="/HoteMenu"><span>Hotels</span></NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" tag={Link} to="/AboutUs"><span >About Us</span></NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" tag={Link} to="/ContactUs"><span >contact Us</span></NavLink>
            </NavItem>
            </Nav>
        </Navbar>
        <div className='huts'>
            <img src={homeImage} className='househuts animate fadeIn five'/>          </div> 
        <div className="container ourRooms">
                <div className="row mt-5">
                    <div className="offset-5 col-7"><span className="font-heading">Our Rooms</span></div>
                </div>
                <div className="row ml-5 mt-5">
                    <div className=" col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={room1} height="200" width="200" />
                            <Card.Body>
                            <Card.Title>Standard Room</Card.Title>
                            <Card.Text>
                                ₹ 2800 / per night
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="offset-1 col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={room2} height="200" width="200" />
                            <Card.Body>
                            <Card.Title>Family Room</Card.Title>
                            <Card.Text>
                                ₹ 4000 / per night
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="offset-1 col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={room3} height="200" width="200" />
                            <Card.Body>
                            <Card.Title>Single Room</Card.Title>
                            <Card.Text>
                                ₹ 1800 / per night
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>            
                <div className="row ml-5 mt-5">
                    <div className=" col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={room4} height="200" width="200" />
                            <Card.Body>
                            <Card.Title>Deluxe Room</Card.Title>
                            <Card.Text>
                                ₹ 1500 / per night
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="offset-1 col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={room5} height="200" width="200" />
                            <Card.Body>
                            <Card.Title>Luxury Room</Card.Title>
                            <Card.Text>
                                ₹ 2000 / per night
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="offset-1 col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={room6} height="200" width="200" />
                            <Card.Body>
                            <Card.Title>Single Room</Card.Title>
                            <Card.Text>
                                ₹ 1800 / per night
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>            
            </div>    
            <div className="container aboutUs">
                <div className="row ml-5 mt-5">
                    <div className="col-6">
                        <img src={benches} height="400" width="500"/>
                    </div>
                    <div className="offset-1 col-5">
                        <div className="row">
                            <div className="col-12"><span className="font-heading">About Us</span></div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 aboutusContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget ipsum vitae ligula condimentum interdum vitae eget risus. Aliquam porttitor leo a aliquet bibendum. Proin et commodo nulla, a feugiat nisi. Integer dignissim dolor eu risus pellentesque, sit amet feugiat nibh tempor. Morbi a venenatis nulla.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container hotelFeatures">
                <div className="row mt-5">
                    <div className="offset-5 col-7"><span className="font-heading">Hotel Features</span></div>
                </div>
                <div className="row mt-5 ml-5">
                    <div className="col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={swimmingpool} height="200" width="200" />
                            <Card.Body>
                            <Card.Title>Swimming</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="offset-1 col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={fire} height="200" width="200" />
                            <Card.Body>
                            <Card.Title>Fire Exit</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="offset-1 col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={carparks} height="200" width="200"/>
                            <Card.Body>
                            <Card.Title>Car Parking</Card.Title>
                            </Card.Body>
                        </Card>
                    </div> 
                </div>
                <div className="row mt-5 ml-5">
                    <div className="col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={bar} height="200" width="200" />
                            <Card.Body>
                            <Card.Title>Minibar</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="offset-1 col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={club} height="200" width="200" />
                            <Card.Body>
                            <Card.Title>clubs</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="offset-1 col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={spa} height="200" width="200" />
                            <Card.Body>
                            <Card.Title>spas</Card.Title>
                            </Card.Body>
                        </Card>
                    </div> 
                </div>
            </div>
            <div className="container testimonials">
                <div className="row mt-5 ml-5">
                    <div className="col-8 offset-4"><span className="font-heading">Testimonials</span></div>
                </div>
                <div className="row mt-5">
                <Carousel>
                    <Carousel.Item>
                        <CardGroup>
                            <Card>
                            <Card.Img variant="top" src={testimonial1} height="250" />
                            <Card.Body>
                                <Card.Title>John Doe</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum libero vel turpis viverra, in.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 6 mins ago</small>
                            </Card.Footer>
                            </Card>
                            <Card>
                            <Card.Img variant="top" src={testimonial2} height="250" />
                            <Card.Body>
                                <Card.Title>David</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum libero vel turpis viverra, in.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 8 mins ago</small>
                            </Card.Footer>
                            </Card>
                            <Card>
                            <Card.Img variant="top" src={testimonial3} height="250"/>
                            <Card.Body>
                                <Card.Title>Johny</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum libero vel turpis viverra, in.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 9 mins ago</small>
                            </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardGroup>
                            <Card>
                                <Card.Img variant="top" src={testimonial4} height="250" />
                                <Card.Body>
                                    <Card.Title>John</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum libero vel turpis viverra, in.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={testimonial5} height="250" />
                                <Card.Body>
                                    <Card.Title>David</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum libero vel turpis viverra, in.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 12 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={testimonial6} height="250"/>
                                <Card.Body>
                                    <Card.Title>Johny</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum libero vel turpis viverra, in.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardGroup>
                            <Card>
                                <Card.Img variant="top" src={testimonial7} height="250" />
                                <Card.Body>
                                    <Card.Title>John</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum libero vel turpis viverra, in.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={testimonial8} height="250" />
                                <Card.Body>
                                    <Card.Title>David</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum libero vel turpis viverra, in.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 15 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={testimonial9} height="250" />
                                <Card.Body>
                                    <Card.Title>Johny</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum libero vel turpis viverra, in.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Carousel.Item>
                </Carousel>
                </div>
        </div>
        </React.Fragment>
        )
    }

}