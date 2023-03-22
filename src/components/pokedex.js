import MediaCard from './CustomCard';
import usePokeChanger from './CustomHooks'
import Button from './Button';

import React from 'react';

function Pokedex() {
    
    const pokeApiDomain = `https://pokeapi.co/api/v2/pokemon/`;
    const [previousPokemon, nextPokemon, pokemon, pokemonSpecies] = usePokeChanger(pokeApiDomain);

    return (
        <div className="pokedex">
            <div>
                <Button
                    onClick={previousPokemon}
                    text={"<"}
                ></Button>
            </div>
            <div>
                <MediaCard
                    pokeName={pokemon.name}

                    pokeImage={pokemon.sprites.other.home.front_default}
                    pokeImageLow={pokemon.sprites.front_default}
                    //pokeImage= {pokemon.sprites.other["official-artwork"].front_default}

                    pokeWeight={pokemon.weight}
                    pokeHeight={pokemon.height}
                    pokeAbilities={pokemon.abilities}
                    pokeTypes={pokemon.types}
                    pokeStats={pokemon.stats}
                    pokeColor={pokemonSpecies.color}
                    pokeNum={pokemon.id}
                ></MediaCard>
                <br></br>
            </div>
            <div>
                <Button
                    onClick={nextPokemon}
                    text={">"}
                ></Button>
            </div>
        </div>
    )
}

export default Pokedex;