import {useEffect, useContext} from "react";
import {API_URL, API_KEY} from "../config";
import Preloader from "./Preloader";
import {ItemsList} from "./ItemsList";
import {ShopIcons} from "./ShopIcons";
import {BasketList} from "./BasketList";
import {ColorAlert} from "./Alert";
import {ShopContext} from "../context";

function Shop() {
    const {loading, order, basketShow, alertName, getItem} = useContext(ShopContext)


    useEffect(
        function getItems() {
            fetch(API_URL, {
                headers: {
                    'Authorization': API_KEY
                }
            }).then(response => response.json()).then(data => {
                getItem(data.featured)
            })
        }, []
    )


    return <main>
        <ShopIcons quantity={order.length}/>
        {loading ? <Preloader/> : <ItemsList/>}
        {basketShow && <BasketList/>}
        {alertName && <ColorAlert/>}
    </main>
}

export {Shop}