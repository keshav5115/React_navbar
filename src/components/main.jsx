import React, { useState } from "react";

let Log=(props)=>{
    let [islogin,toggle]=useState(props.islogin)
    let logout=()=>{
        toggle(false)
    }

    let login =()=>{
        toggle(true)
    }
    if (islogin===true){
        return(
        <button onClick={logout}>Log out</button>)
        }
        else{
            return(
                <>
            <button onClick={login}> Log in</button>
            <button>Sign up</button>
            </>)
        }
}

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state={time:new Date(),mname:''};
    }
   componentDidMount(){
    setInterval( ()=>{
        this.setState({time:new Date()})
    },1000)
    
    setInterval(()=>{
        let a = this.state.mname===''?'KESHAVAREDDY':'';
        this.setState({mname:a})
    },5000)
   }

    render(){
        return(
            <>
            {this.state.mname}
            <span>{this.state.time.toLocaleTimeString('en-US',{'hour':'2-digit',minute:'2-digit'})}</span>
            <span>{this.state.time.toLocaleDateString('en-US')}</span>
            </>
        )
    }
}



let Main=(props)=>{
    return(<div id='navmain'> 
    <div>Home</div>
    <div>About</div>
    <div>Contact</div>
    <Clock />
    <Log  islogin={props.islogin}/>
   
      </div>)
};

export default Main