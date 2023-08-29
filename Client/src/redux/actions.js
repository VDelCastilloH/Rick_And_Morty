import {ADD_FAV,REMOVE_FAV,FILTER,ORDER} from "./action-type";

export function addFav(personaje){
    return {type: ADD_FAV, payload: personaje};
}

export function removeFav(id){ 
    return {type: REMOVE_FAV, payload: id}
}

export function filterCards(gender){
    return {type:FILTER, payload: gender}
}

export function orderCards(orden){
    return {type: ORDER, payload: orden}
}