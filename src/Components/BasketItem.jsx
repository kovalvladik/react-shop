import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import React from "react";

function BasketItem(props){

    const {id,name, price,quantity,description} = props

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
                 Price  for 1 element: {price}.  Quantity : {quantity}
                {description}
            </Typography>
        </AccordionDetails>
    </Accordion>
}
export {BasketItem}