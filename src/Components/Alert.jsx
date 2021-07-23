import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import {useEffect} from "react";
import {useContext} from "react";
import {ShopContext} from "../context";


const useStyles = makeStyles((theme) => ({
    root: {
        position:'fixed',
        bottom:'2rem',
        width:'30%',
        zIndex:'0',

    },
}));

function ColorAlert (){
    const classes = useStyles();
    const {alertName:name = '', closeAlert = Function.prototype} = useContext(ShopContext)

    useEffect(()=>{
        const timerId = setTimeout(closeAlert,3000)
        return ()=>{
            clearTimeout(timerId)
        }
    },[name])
    return (
        <div className={classes.root}>
            <Alert severity="success" color="success"   >
                {name} was  added
            </Alert>
        </div>
    );
}
export {ColorAlert}