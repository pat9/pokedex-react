import React, { useContext, useEffect, useState } from 'react'
import { PokeContext } from '../../context/PokeContext'
import axios from 'axios'
import { PokeMainLayout } from '../../components/PokeMainLayout/PokeMainLayout'
import { PokeDetail } from '../../components/PokeDetail/PokeDetail'
import { ChooseOne } from '../../components/ChooseOne/ChooseOne'
import { Loading } from '../../components/Loading/Loading'

export const PokeMain = () => {
    const { pokemonSelected } = useContext(PokeContext)
    const [ pokeInfo, setPokeInfo ] = useState({})
    const [ loading, setLoading ] = useState(false)
     
    useEffect(() => {
        async function GetPokemon (){
            if(!pokemonSelected.url) return  
            setLoading(true)
            const response = await axios.get(pokemonSelected.url)
            setPokeInfo(response.data)
            setLoading(false)
        }
        GetPokemon()
    },[pokemonSelected])

    const render = () => {
        if(!pokeInfo.id) return <ChooseOne /> 

        if(loading) return  <Loading />
        return <PokeDetail {...pokeInfo} />
    } 



    return (
        <PokeMainLayout>
            { render() }           
        </PokeMainLayout>
    )

}
