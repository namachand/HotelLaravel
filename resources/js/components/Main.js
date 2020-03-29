import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Home from './Home'
import HotelMenu from './HotelMenu';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
export default class Main extends Component{
    render(){
        return(
        <React.Fragment>
        <Router>
             <Switch>
             <Route  exact path="/" component={Home}/>
             <Route  path="/HoteMenu" component={HotelMenu}/>
             <Route  path="/AboutUs" component={AboutUs}/>
             <Route  path="/ContactUs" component={ContactUs}/>
             </Switch>
        </Router>
        </React.Fragment>
        )
    }

}
if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
