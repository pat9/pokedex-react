import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PokemonItem } from '../../components/PokemonItem/PokemonItem'
import { SideMenu } from '../../components/SideMenu/SideMenu'

const BASE_URL = 'https://pokeapi.co/api/v2/'
const ENDPOINT = 'pokemon/?offset=0&limit=150'


export const PokemonList = () => {
    const [pokemon, setPokemon] = useState([])
    
    useEffect(() => {
        async function getPokemon() {
            const response = await axios.get(`${BASE_URL}${ENDPOINT}`)
            setPokemon(response.data.results)
        }

        getPokemon()
    },[])

    return (
        <SideMenu>
            {pokemon.map((poke, index) => <PokemonItem key={index} {...poke} />)}
        </SideMenu>
    ) 

}
