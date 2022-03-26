import {GET_CAT_CATEGORIES, GET_CATS, SET_CATEGORY_ID, SET_IS_LOADER} from "./types";
import {sendRequest} from "../../api/api";

const getCatCategoriesAC = (payload) => ({ type: GET_CAT_CATEGORIES, payload});
const setIsLoader = (payload) => ({ type:SET_IS_LOADER, payload })
const getCatsAC = (page, cats ) => ({ type:GET_CATS, page, cats})
export const setCategoryId = ( payload ) => ({ type:SET_CATEGORY_ID, payload })

export const getCatCategories = () => {
    return async(dispatch) => {
        dispatch(setIsLoader(true))
        const response = await sendRequest('https://api.thecatapi.com/v1/categories', 'GET')
        dispatch(getCatCategoriesAC(response))
        dispatch(setIsLoader(false))
    }
}

export const getCats = (id, page) => {
    return async ( dispatch, ) => {
        dispatch(setIsLoader(true))
        const response = await sendRequest(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${id}`)
        dispatch(getCatsAC(page, response))
        dispatch(setIsLoader(false))

    }
}

