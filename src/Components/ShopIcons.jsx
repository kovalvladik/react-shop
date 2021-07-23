import ShoppingBasketSharpIcon from '@material-ui/icons/ShoppingBasketSharp';
import {IconButton} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import {useContext} from "react";
import {ShopContext} from "../context";


const useStyles = makeStyles((theme)=>({
    root:{
        position:'fixed',
        bottom:'2rem',
        right:'2rem',
        cursor:'pointer',
        zIndex:'5',
        padding: '1 rem',
        backgroundColor:'#e1f5fe',
    }
}))

function ShopIcons( ){
    const { order, handleBasketShow = Function.prototype} = useContext(ShopContext);
    const classes = useStyles()
    const  quantity = order.length
    return <div>
        <IconButton className={classes.root} onClick={handleBasketShow}>
            <ShoppingBasketSharpIcon/>
            {quantity ? <span>{quantity}</span> : null}
        </IconButton>
    </div>

}
export {ShopIcons}