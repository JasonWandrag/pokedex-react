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

      <div className="container">
        <h3>Stats</h3>
        {props.pokemonInfo.stats.map((s,i) => (
          <p key = {i} className="d-inline"><b>{s.stat.name}</b> : {s.base_stat}</p>
        ))}
      </div>
      
      <div className="container">
        <h3>Basic Information</h3>
        <p className="d-inline"><b>Weight:</b> {props.pokemonInfo.weight / 10}kg</p>
        <p className="d-inline"><b>Height:</b> {props.pokemonInfo.height / 10}m</p>
      </div>

      <div className="container">
          <h3>Types</h3>
        {props.pokemonInfo.types.map((t,i) => (
          <p key = {i} className="capitalize d-inline">{t.type.name}</p>
        ))}
      </div>

      <div className="container">
        <h3>Abilities</h3>
        <select>
          {props.pokemonInfo.abilities.map((v,i) => (
          <option
            className={v.is_hidden? 'hiddenAbility': null} 
            key = {i}>{v.ability.name}</option>
          ))}
        </select>
      </div>
      
      <div className="container">
        <h3>Moves</h3>
        <select>
          {props.pokemonInfo.moves.map((m,i) => (
            <option key = {i}>{m.move.name}</option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default Information;