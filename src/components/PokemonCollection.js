import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

 renderPokemons = () => { return this.props.pokemons.map(pokemon => <
   PokemonCard
   pokemon={pokemon}
   key={pokemon.id} />)}

  render() {
    return (
      <div>
      <Card.Group itemsPerRow={6}>
      {this.renderPokemons()}
      <h1>Hello From Pokemon Collection</h1>
      </Card.Group>}
      </div>
    )
  }
}

export default PokemonCollection
