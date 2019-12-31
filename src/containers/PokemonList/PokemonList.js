import React, { useState, useEffect,useContext } from 'react'
import axios from 'axios'
import { PokemonItem } from '../../components/PokemonItem/PokemonItem'
import { SideMenu } from '../../components/SideMenu/SideMenu'
import { PokeContext } from '../../context/PokeContext'

const BASE_URL = 'https://pokeapi.co/api/v2/'
const ENDPOINT = 'pokemon/?offset=0&limit=150'


export const PokemonList = () => {
    const [pokemon, setPokemon] = useState([])
    
    const { selectPokemon } = useContext(PokeContext)

    useEffect(() => {
        async function getPokemon() {
            const response = await axios.get(`${BASE_URL}${ENDPOINT}`)
            setPokemon(response.data.results)
        }

        getPokemon()
    },[])

    const itemClick =  pokemon  => {
        selectPokemon(pokemon)
    }

    return (
        <SideMenu>
            {pokemon.map((poke, index) => <PokemonItem key={index} onClick={() => itemClick(poke)} {...poke} />)}
        </SideMenu>
    ) 

}
