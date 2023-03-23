// import { ADD_TO_FAVORITES,REMOVE_FROM_FAVORITES } from "./types";

import { REMOVE_FROM_FAVORITES,ADD_TO_FAVORITES } from "./types"

export const addToFavorites = (payload) => {
    console.log({type: ADD_TO_FAVORITES, payload})
    return{type: ADD_TO_FAVORITES, payload}
}

export const removeFromFavorites = (payload) => {
    console.log({type: REMOVE_FROM_FAVORITES, payload})
    return{type: REMOVE_FROM_FAVORITES, payload}
}