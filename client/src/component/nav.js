import React,{Component} from 'react';
import Logo from './logo.png';
import '../App.css';
class navbar extends Component{

render(){
return(
    <div className="row navbar">
    <div className="col-md-2"> 

    <img  src={Logo} alt="logo" width="130" height="80" className="logo"/>
   
    </div>
    <div className="col-md-3" >
    <h5 id="nav-product"></h5>
    </div>

    <div className="col-md-7"> <h5 id="shopping-cart">Shopping list</h5></div>
    </div>
);

}
}
export default navbar;