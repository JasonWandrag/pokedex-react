import React from 'react'

const Information = (props) => {
  return (
    <div>
      <h1><b>{props.pokemonInfo.id}</b> {props.pokemonInfo.name.toUpperCase()}</h1>
      <div>
          <img src={props.pokemonInfo.sprites.front_default} alt="front"/>
          <img src={props.pokemonInfo.sprites.back_default} alt="back" />
      </div>
      <div>
        <h3>Stats</h3>
        {props.pokemonInfo.stats.map((s,i) => (
          <p key = {i}>{s.stat.name} : {s.base_stat}</p>
        ))}
      </div>
      <p>Base Experience: {props.pokemonInfo.base_experience}</p>
      <p>Height: {props.pokemonInfo.height}</p>
      <p>Is default: {props.pokemonInfo.is_default}</p>
      <p>Order: {props.pokemonInfo.order}</p>
      <p>Weight: {props.pokemonInfo.weight}</p>
      <div>
        {props.pokemonInfo.abilities.map((v,i) => (
          <p key = {i}>{v.ability.name}</p>
        ))}
      </div>
      <div>
        {props.pokemonInfo.forms.map((form,i) => (
          <p key = {i}>{form.name}</p>
        ))}
      </div>
      <div>
        {props.pokemonInfo.game_indices.map((gi,i) => (
          <p key = {i}>{gi.version.name}</p>
        ))}
      </div>
      <div>
        {props.pokemonInfo.held_items.map((hi,i) => (
          <p key = {i}>{hi.item.name}</p>
        ))}
      </div>
      <p>Location Area Encounters: {props.pokemonInfo.location_area_encounters}</p>
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