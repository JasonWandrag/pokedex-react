import React from 'react'

const Information = (props) => {
  return (
    <div className="infoView">

      <div className="pokeTitle">
        <div className="pokeID"># {props.pokemonInfo.id}</div>
        <h1 className="pokeName">{props.pokemonInfo.name.toUpperCase()}</h1>
      </div>
      
      <div className="pokeImageFlip">
          <img className="imgFront" src={props.pokemonInfo.sprites.front_default} alt="front"/>
          <img className="imgBack" src={props.pokemonInfo.sprites.back_default} alt="back" />
      </div>

      <div className="pokeStats">
        <h3>Stats</h3>
        {props.pokemonInfo.stats.map((s,i) => (
          <p key = {i}><b>{s.stat.name}</b> : {s.base_stat}</p>
        ))}
      </div>
      
          <hr />

      <p>Weight: {props.pokemonInfo.weight}</p>
      <p>Height: {props.pokemonInfo.height}</p>
      
          <hr />

      <select>
        {props.pokemonInfo.abilities.map((v,i) => (
          <option key = {i}>{v.ability.name}</option>
          ))}
      </select>
      
      <div>
        <h3>Moves</h3>
        {props.pokemonInfo.moves.map((m,i) => (
          <p key = {i}>{m.move.name}</p>
        ))}
      </div>
      
      <div>
        {props.pokemonInfo.types.map((t,i) => (
          <p key = {i}>Type: {t.type.name}</p>
        ))}
      </div>
    </div>
  )
}

export default Information;