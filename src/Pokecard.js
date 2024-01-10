import React from "react"
import './Pokecard.css';

const Pokecard = ({ pokemon }) => (
    <div className="Pokecard">
        <h3 className="Pokecard-header">{pokemon.name}</h3>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
        <div className="Pokecard-attributes-container">
            <p className="Pokecard-attribute">Type: {pokemon.type}</p>
            <p className="Pokecard-attribute">EXP: {pokemon.base_experience}</p>
        </div>
    </div>
)

export default Pokecard