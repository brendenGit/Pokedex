import React from "react";
import pokemons from './pokemon';
import Pokecard from "./Pokecard";
import './Pokedex.css'

const Pokedex = ({ pokemon = pokemons }) => (
    <div className="Pokedex">
        { pokemon.map(pokemon => <Pokecard pokemon={pokemon}/>)}
    </div>
)

export default Pokedex;