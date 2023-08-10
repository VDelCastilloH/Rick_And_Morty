import { ADD_FAV,REMOVE_FAV } from "./action-type";

const initialState={
    myFavorites:[],
}
function rootReducer (state=initialState,action){
    switch (action.type){
        case ADD_FAV: 
            return {...state , myFavorites: [...state.myFavorites,action.payload]};
        case REMOVE_FAV:
            return {...state, myFavorites: state.myFavorites.filter((char)=>{return char.id !== Number(action.payload)})}
        default:
            return {...state};
    }
}

export default rootReducer;