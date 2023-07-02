import React from "react";
import { ReactDOM } from "react";
import { useState,useEffect} from "react";
import resList from "../utils/mockData";
import RestaurentCard from "./Restaurentcard";
import Shimmer from "./Shimmer";
import { useState } from "react";

 

const Body =()=>{
    //Local State Variable - Super Powerful Variable//
    const [listOfRestaurents,setlistOfRestaurents]=useState(resList);
    

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5366218&lng=78.4844811&page_type=DESKTOP_WEB_LISTING");
        const json =await data.json();
        console.log(json);
        //Optional Chaining//
        setlistOfRestaurents(json.data.cards[0].data.data.cards); 
    };  

    return(
         <div className='body'>
            
            <div className='filter'>

            <div className="search">
                <input type="text" className="search-box" placeholder="search it"></input>
                <button onClick={()=>{
                    //Filter the Restaurent cards and update UI//
                }}></button>
            </div>
                <button className="filter-btn" 
                onClick={()=>{
                    const filteredList=listOfRestaurents.filter(
                        (res)=> res.data.avgRating >4                       
                    );
                    setlistOfRestaurents(filteredList);               
                    }}>Top Rated Restaurents</button>

            </div>
            <div className='res-container'>               
                
                {listOfRestaurents.map((restaurent)=>(
                    <RestaurentCard key={restaurent.data.id} resData ={restaurent} />
                ))}              
                
            </div>
         </div>
    );
}
 export default Body;