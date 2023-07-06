import React from "react";
import { useEffect,useState } from "react";




const RestaurantMenu = () => {
    const [resInfo,setresInfo]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu =async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5366218&lng=78.4844811&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
               
        setresInfo(json.data);
        console.log(resInfo);
    };

  return (
    <div className="menu">
        <h1>{resInfo.cards[2].data.data.cards[0].data.name}</h1>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Burgers</li>
            <li>Diet Coke</li>
        </ul>
    </div>
  )
}
export default RestaurantMenu