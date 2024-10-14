import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
import { addToLS, getStoredCart } from "../../utilities/localstorage";



const Bottles = () => {
    const [bottles, setBottles] =useState([])
    const [cart, setCart] = useState([])
    

    useEffect( () =>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    useEffect( () => {
        console.log( 'use the call useEffect',bottles.length)
        if(bottles.length){
            const storedCart =getStoredCart()
            console.log(storedCart, bottles)
            const saveCart =[];
            for( const id of storedCart){
                console.log(id)
                const bottle =bottles.find(bottle => bottle.id ===id)
                if(bottle){
                    saveCart.push(bottle)
                   
                }
                
            }
            console.log('save cart', saveCart)
            setCart(saveCart)
        }
       
    },[bottles])

    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart)
        addToLS(bottle.id)
    }

    

    return (
        <div>
            <h2>Bottles Here:{bottles.length}</h2>
            <h4>cart{cart.length}</h4>
         <div className="bottles-container">
            {
                bottles.map(bottle => <Bottle  
                    key={bottle.id} 
                    bottle={bottle} 
                    handleAddToCart={handleAddToCart}
                    ></Bottle>)
                
            }
         </div>
        </div>
    );
};

export default Bottles;