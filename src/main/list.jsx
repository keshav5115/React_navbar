import React  from "react";

let Movielist=(props)=>{
    return (
        <div>
            <h1>{props.a.mname}</h1>
            <h2>{props.a.director}</h2>
            <h3>{props.a.budget}</h3>
            <img  src={props.a.img_url} />
        </div>
    )
}
export default Movielist