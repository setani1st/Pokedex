import React from "react"
import {Grid, Card, CardMedia, CardContent, Typography} from '@mui/material'
//import makeStyles from '@mui/styled-engine-sc'
import './PokemonCard.css'; 

/*const useStyles = makeStyles((theme) => ({
    CardMedia: {
        margin: "auto",
        width:130,
        height:130

    }
}))*/
const PokemonCard = (props) =>{
    /*const classes = useStyles();*/
    const {pokemon, image} = props
    const {id, name} = pokemon
    return(
        <Grid item xs={12} sm={2}>
            <Card className='Card'>
                <CardMedia className='cardMedia' image={image}></CardMedia>
                <CardContent>
                    <Typography>
                        {name}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default PokemonCard