import { ADD_FAV,REMOVE_FAV,FILTER,ORDER} from "./action-type";

const initialState={
    myFavorites:[],
    allFavorites:[],
}
function rootReducer (state=initialState,action){
    switch (action.type){
        case ADD_FAV: 
            // return {...state, 
            //     myFavorites: [...state.myFavorites,action.payload],
            //     allFavorites:[...state.allFavorites,action.payload]
            // };

            return { ...state, myFavorites:  action.payload, allFavorites: action.payload };
        
        case REMOVE_FAV:
            // let newfavorite = state.myFavorites.filter((char)=>{return char.id !== Number(action.payload)})
            // return {...state, myFavorites: newfavorite, allFavorites: newfavorite }

            return { ...state, myFavorites: action.payload };

        case FILTER:
            let favoriteFiltered = action.payload==="All"? state.allFavorites : state.allFavorites.filter(char => char.gender=== action.payload)
            return {
                ...state,
                myFavorites: favoriteFiltered
            }

        case ORDER:
            let favoritesOrdered = state.myFavorites.sort((a,b)=>{
                return action.payload === "Ascendente"? a.id - b.id : b.id-a.id})
            return{
                ...state,
                myFavorites:favoritesOrdered
            }

        default:
            return {...state};
    }
}

export default rootReducer;