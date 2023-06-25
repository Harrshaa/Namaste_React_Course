import { useState,useEffect} from "react";
import resList from "../utils/mockData";
import RestaurentCard from "./Restaurentcard";

const Body =()=>{
    //Local State Variable - Super Powerful Variable//
    let [listOfRestaurents,setlistOfRestaurents]=useState(resList);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5366218&lng=78.4844811&page_type=DESKTOP_WEB_LISTING"
        );

        const json =await data.json();
        console.log(json);
    
    
    };

    return(
         <div className='body'>
            <div className='filter'>

                <button className="filter-btn" 
                onClick={()=>{
                    listOfRestaurents=listOfRestaurents.filter(
                        (res)=> res.data.avgRating >4                       
                    );
                    setlistOfRestaurents(listOfRestaurents);               
                    }}>Top Rated Restaurents</button>

            </div>
            <div className='res-container'>
                {/* <RestaurentCard resName="Meghana Foods" cuisine="Biryani,North Indian,Asian" />
                <RestaurentCard resName="KFC" cuisine="Biryani,Continental,American"/> */}
                
                {listOfRestaurents.map((restaurent)=>(
                    <RestaurentCard key={restaurent.data.id} resData ={restaurent} />
                ))}
                
                
            </div>

         </div>
    );
 }

 export default Body;