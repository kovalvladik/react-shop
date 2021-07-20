import {useState,useEffect} from "react";
import {API_URL,API_KEY} from "../config";
import Preloader from "./Preloader";
import {ItemsList} from "./ItemsList";
import {ShopIcons} from "./ShopIcons";
import {BasketList} from "./BasketList";

function Shop(){
    const [items,setItems]=useState([])
    const [loading, setLoading]= useState(true)
    const [order, setOrder]= useState([])
    const [basketShow, setBasketShow]= useState(false)

    const addToBasket =(good)=> {
        const goodIndex = order.findIndex((orderGood) => orderGood.id === good.id)
        if (goodIndex < 0) {
            const newGood = {
                ...good,
                quantity: 1,
            }
            setOrder([...order, newGood])
        } else {
            const newOrder = order.map((orderGood, index) => {
                if (index === goodIndex) {
                    return {
                        ...orderGood,
                        quantity: orderGood.quantity + 1,
                    }
                } else {
                    return orderGood
                }
            })
            setOrder(newOrder)
        }
    }

    const handleBasketShow= ( ) =>{
        setBasketShow(!basketShow)
    }


    useEffect(
        function getItems(){
            fetch(API_URL,{
                headers:{
                    'Authorization': API_KEY
                }
            }).then(response => response.json()).then(data=>{
                data.featured && setItems(data.featured)
                setLoading(false)
            })
        }, []
    )


    return<main className='container content'>
        <ShopIcons quantity={order.length} handleBasketShow={handleBasketShow} />
        {
            loading ? <Preloader/> : <ItemsList items={items} addToBasket={addToBasket}/>
        }
        {
            basketShow &&<BasketList order={order} handleBasketShow={handleBasketShow}/>
        }
    </main>
}
export {Shop}