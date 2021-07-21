import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import {useEffect} from "react";


const useStyles = makeStyles((theme) => ({
    root: {
        position:'fixed',
        bottom:'2rem',
        width:'30%',
        zIndex:'0',

    },
}));

function ColorAlert (props){
    const classes = useStyles();
    const {name = '', closeAlert = Function.prototype} = props

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