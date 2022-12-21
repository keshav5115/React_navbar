import React,{Component} from "react";
import Navbar from './components/navbar';
import Movies from "./main/movie";

export default class App extends Component{
  render(){
    return(
      <div >
        
        <Navbar />
        <Movies />
        
      </div>
    )
  }
}


