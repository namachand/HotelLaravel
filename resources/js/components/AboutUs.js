import React,{Component} from 'react';
import imag from './images/hotelhuts.jpg'
import imag2 from './images/hot.jpg'
import image1 from './images/beach.jpg'
import one from './images/one.jpg';
import two from './images/two.jpg';
import four from './images/four.jpg';
import { Parallax } from "react-parallax";
import {Button} from 'reactstrap'
import {Navbar,Nav,NavLink,NavItem,NavbarBrand} from "reactstrap"
import './css/styles.css'
const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
  const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };
export default class AboutUs extends Component{
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
        <div className='huts'>
            <img src={imag} className='househuts animate fadeIn five'/>  
            <h1>About Us!</h1>
        </div>
        <div className='row middle'>    
            <div className="col-md-4 offset-2">
            <h1>A Place TO Remember</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
            < Button className='btn btn-danger'>Read more</Button>
            </div>
            <div className='col-md-4'>
            <img src={imag2} className='househuts animate fadeIn five'/>  
            </div>
        </div>
        <div>
            <Parallax style={{styles}} bgImage={image1} strength={500}>
            <div style={{ height: 500 }}>
            <div style={insideStyles}>Best Luxirious Comfort</div>
            </div>
            </Parallax>
        </div>
        <div className='lastone'>
            <h1>Our Hotels</h1>
        </div>
        <div className='row'>
            <div className="col-md-3 offset-1">
            <img className='pic' src={one}/>
            </div>
            <div className='col-md-3 ml-2'>
            <img className='pic' src={two}/>
            </div>
            <div className='col-md-4 ml-2'>
            <img className='pic' src={four}/>
            </div>
        </div>
        </React.Fragment>
        )
    }

}