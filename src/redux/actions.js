import {ADD_FAV,REMOVE_FAV} from "./action-type";

export function addFav(id){
    return {type: ADD_FAV, payload: id};
}

export function removeFav(id){ 
    return {type: REMOVE_FAV, payload: id}
}