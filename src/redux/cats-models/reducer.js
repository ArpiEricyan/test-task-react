import {GET_CAT_CATEGORIES, GET_CATS, SET_CATEGORY_ID, SET_IS_LOADER} from "./types";

const initialState = {
    isLoader:false,
    categories: [],
    categoryId:'',
    cats:[]
}

const CatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_LOADER:
            return { ...state, isLoader:action.payload }
        case GET_CAT_CATEGORIES:
            return { ...state, categories:action.payload }
        case GET_CATS:
            if(action.page > 1) {
                return { ...state, cats:[...state.cats, ...action.cats] }
            }else {
                return { ...state, cats:[...action.cats] }
            }

        case SET_CATEGORY_ID:
            return { ...state, categoryId:action.payload }
        default : return state
    }
}

export default CatsReducer;