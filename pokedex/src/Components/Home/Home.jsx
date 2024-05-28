import React, { useEffect, useState } from "react"
import  {Box, Grid} from '@mui/material';
import axios from 'axios';
import { IMAGE_API_URL, POKEMON_API_URL } from "../../Config";
import { CircularProgress } from "@mui/material";
import PokemonCard from "../Cards/PokemonCard";


const Home = () =>{
    const [pokemonData, setPokemonData] = useState([])
    useEffect(() =>{
        axios.get(POKEMON_API_URL+"?limit=800").then(response =>{
            if(response.status >= 200 && response.status < 300){
                const { results } = response.data
                let newPokemonData = [];
                results.forEach((pokemon, index) => {
                    index++
                    let pokemonObject = {
                        id: index,
                        url: IMAGE_API_URL + index + ".png",
                        name: pokemon.name
                    }
                /*console.log("pokemonObject", pokemonObject)
                console.log("pokemon", pokemon)**/
                newPokemonData.push(pokemonObject)
                });
                setPokemonData(newPokemonData)
            
            }
        })
    }, [])
    return(
        <Box>
            {pokemonData ?
            <Grid container spacing={2}>
                {pokemonData.map((pokemon) =>{
                    return (
                        <PokemonCard pokemon={pokemon} image={pokemon.url}></PokemonCard>
                    )
                })}

            </Grid> 
            : <CircularProgress style={{marginTop: 100}}></CircularProgress >}
        </Box>
    );
}

export default Home