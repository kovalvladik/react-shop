import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import React from "react";
import {Button} from "@material-ui/core";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
    root:{
        position:'absolute',
        cursor:'pointer',
        top:'3rem',
        right:'0.5rem',
        color:'#ba000d',
    },
    button: {
        position:'absolute',
        cursor:'pointer',
        top:'5rem',
        right:'5rem',

    },
    deleteButtom:{
        position:'absolute',
        cursor:'pointer',
        top:'4.4rem',
        right:'0.5rem',
    }
}))



function BasketItem(props){

    const {id,name, price,quantity,description,
        removeFromBasket = Function.prototype,
        removeElement = Function.prototype,
        addElement = Function.prototype} = props

    const classes = useStyles();

    return <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            id={id} >
            <FormControlLabel
                aria-label="Acknowledge"
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={<Checkbox />}
                label={name}
            />

        </AccordionSummary>
        <AccordionDetails>
            <Typography color="textSecondary">
                 Price  for 1 element: {price}.  Quantity : {quantity}.  Price for all elements : {price * quantity}
            </Typography>
                    <ButtonGroup className={classes.button}>
                        <Button
                            aria-label="reduce"
                            onClick={() =>removeElement(id) }>
                            <RemoveIcon fontSize="small" />
                        </Button>
                        <Button
                            aria-label="increase"
                            onClick={() => addElement(id)}
                        >
                            <AddIcon fontSize="small" />
                        </Button>
                    </ButtonGroup>
            <IconButton aria-label="delete" className={classes.deleteButtom}>
                <DeleteIcon onClick={()=>removeFromBasket(id)}/>
            </IconButton>
        </AccordionDetails>
    </Accordion>
}
export {BasketItem}