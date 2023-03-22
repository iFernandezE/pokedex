import './App.css';
import Pokedex from './components/pokedex';
import SignInComponent from './components/SignInComponent';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import AppUI from './components/AppUI';

function App() {
  // const pokeApiDomain = `https://pokeapi.co/api/v2/pokemon/`;
  // const [previousPokemon,nextPokemon,pokemon,pokemonSpecies]=usePokeChanger(pokeApiDomain);

  return (
    <div className='App' >
      <main>
        <ThemeProvider>
          <AppUI></AppUI>
            {/* <Header />
            <Routes>
              <Route path='/' element={<></>} />
              <Route path='/login' element={<SignInComponent />} />
              <Route path='/pokedex' element={<Pokedex />} />
            </Routes>
            <Footer /> */}
        </ThemeProvider>

      </main>
    </div>

  );
}

export default App;
