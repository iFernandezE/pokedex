import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions/types";

// const initialState = {
//     favoriteIds: []
// };

export const pokedexReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return [...state, action.payload]
        case REMOVE_FROM_FAVORITES:
            return state.filter(element => element.pokeNum !== action.payload)
    }
}