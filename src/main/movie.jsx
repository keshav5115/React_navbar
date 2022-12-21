import React  from "react";
import Movielist from "./list";
 export default class Movies extends React.Component{
     constructor(props){
    super(props)
     this.state={cinema:[{
        mname:'RRR',
        director:' SS Rajmouli',
        budget:'500crore',
        img_url:'https://th.bing.com/th/id/OIP.IdWesSN352Ul44t37_5dCQHaDz?pid=ImgDet&rs=1'
     },
    {
        mname:'KGF',
        director:'Prashanth Neel',
        budget:'300crore',
        img_url:'https://th.bing.com/th?id=OIF.6BeCZ4uYVQ4OflQJ3dVW%2fg&pid=ImgDet&rs=1'
    },
     {
        mname:'KANTARA',
        director:'Rishab shetty',
        budget:'40crore',
        img_url:'https://www.filmibeat.com/ph-big/2021/08/kantara_16282346622.jpg',
     }]}
     }

    render(){
        // console.log(element)
        return(
            <div id='movie-container'>
                {/* <h1> hai</h1> */}
                {this.state.cinema.map(emp=>{
                    return(
                        <>
                        <Movielist a={emp} />
                        
                        </>
                    )
                })};
                
            </div>

        )
    }
}