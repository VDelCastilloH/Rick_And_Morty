import {ADD_FAV,REMOVE_FAV,FILTER,ORDER} from "./action-type";
import axios from "axios";

// export function addFav(personaje){
//     return {type: ADD_FAV, payload: personaje};
// }

export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   try {
      return async (dispatch) => {
      const response = await axios.post(endpoint, character);
      return dispatch({
         type: ADD_FAV,
         payload: response.data,
         });
      }
   } catch (error) {
      console.log(error);         
   }
};

// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character)
//        .then(({ data }) => {
//           return dispatch({
//              type: ADD_FAV,
//              payload: data,
//           });
//        });
//     };
//  };

// export function removeFav(id){ 
//     return {type: REMOVE_FAV, payload: id}
// }

export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   try {
      return async (dispatch) => {
        const response = await axios.delete(endpoint)
        return dispatch({
               type: REMOVE_FAV,
               payload: response.data,
         });
      } 
   } catch (error) {
      console.log(error);    
   }
};

   // export const removeFav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//        axios.delete(endpoint)
//        .then(({ data }) => {
//           return dispatch({
//              type: REMOVE_FAV,
//              payload: data,
//        });
//        });
//     };
//  };

export function filterCards(gender){
    return {type:FILTER, payload: gender}
}

export function orderCards(orden){
    return {type: ORDER, payload: orden}
}