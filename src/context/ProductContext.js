import { createContext, useState } from "react";

import all_product from "../Assets/data/all_product.js";

export const productContext = createContext("");

const getDefaultCart = ()=>{
    let cart = {};
    for(let i=0;i<all_product.length+1;i++){
        cart[i]=0;
    }
    return cart;
}
const ProductContextProvider = (props)=>{
    const [cartItems,setCartItems] = useState(getDefaultCart());

    const [users,setUsers] = useState([{}]);
    const [loggedUser,setLoggedUser] = useState(null);


    const setSignupUser = (user)=>{
        // console.log("get user ",user);
        setUsers([...users,user]);
       
      
    }
    const setLoginUser = (user)=>{
        setLoggedUser(user);
       
    }
    const logout =()=>{
        setLoggedUser(null);
       
    }

    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        console.log(cartItems);
    }
    const getTotalCartAmount = ()=>{
        let total =0;
        for(let item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id === Number(item));
                total+=itemInfo.new_price * cartItems[item];
                console.log("itemInfo from total cart ammount", itemInfo);
            }
        }
        return total;
     }
        const getTotalitems = ()=>{
            let totalItem = 0;
            for(const item in cartItems){
                if(cartItems[item]>0){
                    totalItem +=cartItems[item];
                }
            }
            return totalItem;
        }

        const contextValue = {all_product,setLoginUser, loggedUser, setSignupUser,users,cartItems, logout, addToCart,removeFromCart,getTotalCartAmount,getTotalitems};

        return (
            <productContext.Provider value = {contextValue}>{props.children}</productContext.Provider>
        )

    
}
export default ProductContextProvider;