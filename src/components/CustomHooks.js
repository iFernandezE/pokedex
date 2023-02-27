import { useEffect } from "react";
import { useState } from "react";

function usePokeChanger(pokeApiDomain) {
    const [currentId, setCurrentId] = useState(1);
    const [pokemon, setPokemon] = useState({ id: 0, sprites: { other: { home: {} } }, weight: 0, height: 0, abilities: [], types: [], stats: [], species: { url: "" } });
    const [pokemonSpecies, setPokemonSpecies] = useState({ color: { name: 'white' } });

    useEffect(() => {
        fetch(`${pokeApiDomain}${currentId}`)
            .then(response => response.json())
            .then(pokemonData => {
                setCurrentId(pokemonData.id);
                setPokemon(pokemonData);
                console.log(pokemonData);

                fetch(`${pokemonData.species.url}`)
                    .then(response2 => response2.json())
                    .then(pokemonSpeciesData => {
                        //console.log(pokemonSpeciesData);
                        setPokemonSpecies(pokemonSpeciesData);
                    })
            });
    }, [currentId]);

    function previousPokemon() {
        if (currentId === 1) setCurrentId(1);
        else setCurrentId(currentId - 1);
    }

    function nextPokemon() {
        if (currentId === 150) setCurrentId(150);
        else setCurrentId(currentId + 1);
    }

    return [previousPokemon, nextPokemon, pokemon, pokemonSpecies];
}

export default usePokeChanger;