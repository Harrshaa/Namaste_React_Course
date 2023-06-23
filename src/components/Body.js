import { useState } from "react";
import resList from "../utils/mockData";
import RestaurentCard from "./Restaurentcard";

const Body =()=>{
    //Local State Variable - Super Powerful Variable//

    let [listOfRestaurents,setlistOfRestaurents]=useState(resList);

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