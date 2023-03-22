import { previousId , nextId, getPokemonName} from "../components/CustomHooks";

describe('functions in CustomHooks componente', () => {   //describe: funcion para agrupar caso de prueba
    
    describe('previousId', () => {
        test ('testGivenCurrentIdReturnsThePreviousId',()=>{
            const result = previousId(11);
            expect(result).toBe(10)
        });

        test ('testGivenNumberOneIdReturnsOne',()=>{
            const result = previousId(1);
            expect(result).toBe(1)
        })
    })

    describe('nextId', () => {
        test ('testGivenCurrentIdReturnsTheNextId',()=>{
            const result = nextId(11);
            expect(result).toBe(12)
        });

        test ('testGivenNumber150IdReturns150',()=>{
            const result = nextId(150);
            expect(result).toBe(150)
        })
    })
    // test('el dato es pikachu', () => {
    //     const result = getPokemonName('https://pokeapi.co/api/v2/pokemon/',25)
    //         expect(result).toBe('pikachu')
    // });
})

describe('testing a promise', () => {

    test('Test given Api domain and an ID return the pokemon name', () => {
        const pokeApiDomain = 'https://pokeapi.co/api/v2/pokemon/';
        const currentId = 25;

        return fetch(`${pokeApiDomain}${currentId}`)
            .then(response => response.json())
            .then(data => {
            expect(data.name).toBe('pikachu');
        });
      });
});