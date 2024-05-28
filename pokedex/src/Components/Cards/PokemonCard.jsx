import React from "react"
import {Grid, Card, CardMedia, CardContent, Typography, makeStyles} from '@mui/material'

const useStyles = makeStyles((theme) => ({
    CardMedia: {
        margin: "auto",
        
    }
}))
const PokemonCard = (props) =>{

    const {pokemon, image} = props
    const {id, name} = pokemon
    return(
        <Grid item xs={12} sm={2}>
            <Card>
                <CardMedia image={image}></CardMedia>
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