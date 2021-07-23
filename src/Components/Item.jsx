import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Button} from "@material-ui/core";
import {useContext} from 'react';
import {ShopContext} from "../context";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {TransformButton} from "./TransformButton";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginTop: '15px'


    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9



    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    // avatar: {
    //     backgroundColor: red[500],
    // },
    buttonStyles:{
        borderStyle:3,

},
    button: {
        position:'absolute',
        cursor:'pointer',


    },

}));


function Item(props){
    const {
        id,
        name,
        description,
        price,
        full_background,
        rarity,
        image,
        icon,


    }= props

    const {addToBasket ,order=[],removeElement, addElement,transformButton,buttonShow}= useContext(ShopContext)

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    function wrapperFunction () {
        addToBasket({id,name,price})
        transformButton(id)
        return <TransformButton/>
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);


    };

        return (
            <Card  className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar src={icon} aria-label="recipe" >
                        </Avatar>
                    }
                    title={name}
                    subheader={rarity}
                />
                <CardMedia
                    className={classes.media}
                    image={full_background}
                />
                <CardActions disableSpacing>

                    {buttonShow ? <Button className={classes.buttonStyles}
                                          onClick={wrapperFunction}>Buy</Button>
                    :   <TransformButton/>
                    }


                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {description}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );

}
export {Item}