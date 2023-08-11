import {ADD_FAV,REMOVE_FAV} from "./action-type";

export function addFav(personaje){
    return {type: ADD_FAV, payload: personaje};
}

export function removeFav(id){ 
    return {type: REMOVE_FAV, payload: id}
}