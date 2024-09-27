import React, { useEffect, useState } from "react";
import MemeCard from "../componenets/Card";
import { getAllMemes } from "../Api/memes";

const Homepage=()=>{
    const[data,setdata]=useState([]);

    useEffect(()=>{
        getAllMemes().then((memes)=>setdata(memes.data.memes));
    },[])
    return(
        <div className="row">
            {
            data.map((el)=>(
                <MemeCard img={el.url} title={el.name}/>
            ))}
        </div>
    );
};

export default Homepage;