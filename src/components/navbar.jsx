import React from "react";
import Logo from "./logo";
import Main from "./main";

const Navbar=()=>{
    return(<div id='navbar'>
        <Logo />
        <Main  islogin={true}/>
    </div>);
};

export default Navbar