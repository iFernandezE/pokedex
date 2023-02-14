import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Weaknesses from './components/Weaknesses';

function App() {


  const pokeApiDomain = `https://pokeapi.co/api/v2/pokemon/`;
  const [currentId, setCurrentId] = useState(1);
  const [pokemon, setPokemon] = useState({ sprites: {}, weight: 0, abilities: [], types: [] });
  //const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //setIsLoading(true);
    fetch(`${pokeApiDomain}${currentId}`)
      .then(response => response.json())
      .then(pokemonData => {
        console.log(pokemonData);
        setCurrentId(pokemonData.id);
        setPokemon(pokemonData);
        //setIsLoading(false);
      })
  }, [currentId]);

  const getPokemon = (id) => {
    setCurrentId(id);
  };

  return (
    <div className="App">
      <header className="App-header">

        <div>
          <label>{pokemon.name}</label>
        </div>

        <div>
          <img src={pokemon.sprites.front_default} className="App-logo" alt="logo" />
          {/* <img src={pokemon.sprites.other["official-artwork"].front_default} className="App-logo" alt="logo" /> */}

        </div>

        <br></br>
        <div>
          <label>Weight</label>
          <label>{pokemon.weight}</label>
        </div>

        <br></br>
        <div>
          <label>Abilities</label>
          <label>
            {pokemon.abilities.map(item => (
              <div key={uuidv4()}>
                <label>{item.ability.name}</label>
              </div>
            ))}
          </label>
        </div>

        <br></br>
        <div>
          <label>Weaknesses</label>
          <Weaknesses pokeTypes = {pokemon.types}></Weaknesses>
        </div>

        <br></br>
        <div>
          <button onClick={() => getPokemon(currentId - 1)}>Previous</button>
          <button onClick={() => getPokemon(currentId + 1)}>Next</button>
        </div>
        <br></br>
      </header>
    </div>
  );
}

export default App;
