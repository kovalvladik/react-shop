import React from 'react';
import {Item} from "./Item";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


function ItemsList(props){
    const {items = [], addToBasket = Function.prototype}= props

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            marginTop:'20px',
        },
    }))
    const classes = useStyles();

    if (!items.length){
       return <h3>Nothing Here</h3>
    }
    return <Grid container spacing={1}  className={classes.root}>

            {items.map(good =>(
                <Grid  item xs={12} sm={6} md={4} lg={3} >
                <Item key={good.id} {...good} addToBasket={addToBasket}/>
                </Grid>
            ))}

    </Grid>
}
export {ItemsList}