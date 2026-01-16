import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/asset";
/* eslint-disable react-refresh/only-export-components */

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {


    const [cartitems,Setcartitems] = useState({});
   const [deliveryDetails, SetDeliveryDetails] = useState(
  JSON.parse(localStorage.getItem("deliveryDetails")) || {}
);

   
   useEffect(() => {
    if (Object.keys(deliveryDetails).length > 0) {
     localStorage.setItem(
      "deliveryDetails",
      JSON.stringify(deliveryDetails)
    );
    }
   }, [deliveryDetails]);

    const AddToCart = (itemid) =>{
        if(!cartitems[itemid]){
            Setcartitems((prev)=>({...prev,[itemid]:1}))

        }
        else{
            Setcartitems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        }
    };

    const RemoveCart = (itemid) =>{
        Setcartitems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    };

    useEffect(()=>{
         console.log(cartitems);
         
    },[cartitems])


     const contextValue = {
         food_list,cartitems,Setcartitems,AddToCart,RemoveCart,deliveryDetails,SetDeliveryDetails
     }
     return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
     )
}

export default StoreContextProvider