import React,{Component} from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel'
import './css/HotelMenu.css'
import axios from 'axios';
import {Navbar,Nav,NavLink,NavItem,NavbarBrand} from "reactstrap"
export default class HotelMenu extends Component{
    constructor(){
        super();
        this.state={
            lists:[],
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8000/list')
        .then((res)=>{
            this.setState({lists:res.data});
        });
    }
   
    render(){
        {this.state.lists.map((list)=>{
            console.log(list.image);
            console.log(typeof(list.image));
        })}
        return(
        <React.Fragment>
            <Navbar dark expand='md' fixed='top' style={{
                backgroundColor:"grey",
                height:50,
                
            }}>
            <NavbarBrand className="mr-auto">Aman</NavbarBrand>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink className="nav-link" to="/"><span>Home</span></NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/HoteMenu"><span>Hotels</span></NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/AboutUs"><span >About Us</span></NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/ContactUs"><span >contact Us</span></NavLink>
            </NavItem>
            </Nav>
        </Navbar>
        <Carousel style={{
            height:'70vh',
            opacity:'1'
        }}
        interval={5000}
        >
         <Carousel.Item>
            <img
            className="d-block w-100 car"
            src="./images/hot.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h1>Best Hotels At Best Deals</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
         <Carousel.Item>
            <img
            className="d-block w-100 car"
            src="./images/two.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h1>Serve The Best</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img
            className="d-block w-100 car"
            src="./images/spa.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h1>Comfort Is Our Priority</h1>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
         </Carousel.Item>
        </Carousel>
        <div className="row mt-2 ml-3">
            {this.state.lists.map((list)=>{
                return(
                    <div className=" col-4  mt-4">
                    <Card style={{ width: '26rem' }} >
                        <Card.Img variant="top" src={list.image} height="300"/>
                        <Card.Body>
                        <Card.Text>
                            {list.hotelName} | {list.hotelTye}
                        </Card.Text>
                        <Card.Text>
                            {list.description}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                )
            })    
            }
         </div>
    </React.Fragment>
 )
    }

}