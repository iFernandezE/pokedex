import './App.css';
import Pokedex from './components/pokedex';
import SignInComponent from './components/SignInComponent';
import {Routes,Route} from 'react-router-dom'

function App() {
  // const pokeApiDomain = `https://pokeapi.co/api/v2/pokemon/`;
  // const [previousPokemon,nextPokemon,pokemon,pokemonSpecies]=usePokeChanger(pokeApiDomain);

  return (
    // <div className="App">
    //   <Button 
    //     onClick={previousPokemon}
    //     text={"<"}
    //   ></Button>
    //   <div>
    //     <MediaCard
    //       pokeName={pokemon.name}

    //       pokeImage={pokemon.sprites.other.home.front_default}
    //       pokeImageLow={pokemon.sprites.front_default}
    //       //pokeImage= {pokemon.sprites.other["official-artwork"].front_default}

    //       pokeWeight={pokemon.weight}
    //       pokeHeight={pokemon.height}
    //       pokeAbilities={pokemon.abilities}
    //       pokeTypes={pokemon.types}
    //       pokeStats={pokemon.stats}
    //       pokeColor={pokemonSpecies.color}
    //       pokeNum={pokemon.id}
    //     ></MediaCard>
    //     <br></br>
    //   </div>
    //   <Button 
    //     onClick={nextPokemon}
    //     text={">"}
    //   ></Button>
    // </div>
    <div className='App'>
      <main>
        <Routes>
          <Route path='/' element={<SignInComponent />} />
          //<Route path='/pokedex' element = {<Pokedex/>} />
        </Routes>
      </main>
    </div>
    
  );
}

export default App;
