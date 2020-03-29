import React,{Component} from 'react';
import { Button, Form, FormGroup,Input, Col,Card,CardBody } from 'reactstrap';
import './css/contact.css';
import image from './images/contact.png'
import {Navbar,Nav,NavLink,NavItem,NavbarBrand} from "reactstrap"

export default class ContactUs extends Component{
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
 <div className="back" style={{ background: `url('${image}') no-repeat`,
        opacity:0.9,
        backgroundSize:'cover',
        minHeight:"100vh"
}}>
<Card className="crd col-md-4" style={{borderRadius:10,
    background:"transparent",
    opacity:2,
   backgroundColor:"white",
   background:'transparent'
    }}>
    <CardBody>
        <div className="row row-content content">
            <div className="col-12">
                <h3>Send us your Feedback</h3>
            </div>
            <div className="col-12 col-md-9 ">
                <Form>
                    <FormGroup row>

                        <Col className='col-md-12' md={{offset:2}}>
                            <Input type="text" id="firstname" name="firstname"
                                placeholder="Name"/>
                        </Col>
 
                    </FormGroup>
                    <FormGroup row>
                        <Col className="col-md-12" md={{offset:2}}>
                            <Input type="tel" id="telnum" name="telnum"
                                placeholder="Tel. number"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col className="col-md-12" md={{offset:2}}>
                            <Input type="email" id="email" name="email"
                                placeholder="Email"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>

                        <Col className="col-md-12" md={{offset:2}}>
                            <Input type="textarea" id="message" name="message"
                              placeholder="comment here"  rows="8"></Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{size: 10, offset: 3}}>
                            <Button type="submit" color="primary">
                                Send Feedback
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </div> 
        </CardBody>
    </Card>
</div>
</React.Fragment>        
        )
    }

}