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

    const {addToBasket}= useContext(ShopContext)

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

        return (
            <Card id={id} className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar src={icon} aria-label="recipe" >
                        </Avatar>
                    }
                    // action={
                    //     <IconButton aria-label="settings">  //settings button
                    //         <MoreVertIcon />
                    //     </IconButton>
                    // }
                    title={name}
                    subheader={rarity}
                />
                <CardMedia
                    className={classes.media}
                    image={image}

                    // title={name}
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon  />
                    </IconButton>
                    <Button className={classes.buttonStyles}  onClick={()=>addToBasket({id,name,price})}>Buy</Button>
                    <span> Price: {price} $</span>
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