import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {BasketItem} from "./BasketItem";
import List from '@material-ui/core/List';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import {useContext} from "react";
import {ShopContext} from "../context";


const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        backgroundColor:'#e1f5fe',
        top: '30%',
        boxShadow:'initial',
        borderBlock:'20px',
        borderBlockColor:'black',


    },
    button: {
        position:'absolute',
        cursor:'pointer',
        top:'0',
        right:'0.5rem',
        color:'#ba000d',


    },

});



function BasketList() {

    const {order=[],handleBasketShow= Function.prototype} =useContext(ShopContext);


    const totalPrice = order.reduce((sum,el)=>{
        return sum + el.price * el.quantity
    },0)

    const classes = useStyles();

    return (
        <div >
            <List className={classes.root}>
                <List>
                    <Button className={classes.button}>
                        <CancelIcon  fontSize='medium'  onClick={handleBasketShow}/>
                    </Button>
                    <Typography align='center'> Basket</Typography>
                </List>
                {
                    order.length ?( order.map(item =>
                        <BasketItem key={item.id} {...item}/>
                    )):(<List> nothing here </List>)
                }
                <List>
                    <Typography align='center'> Full Price : {totalPrice}</Typography>
                </List>
            </List>

        </div>
    );


}
export {BasketList}