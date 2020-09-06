import * as homeActionTypes from './actionTypes'

export const loadCategoriesDataAction = (payload) => dispatch => {
    dispatch({
        type: homeActionTypes.LOAD_CATEGORIES_DATA,
        payload,
    })
}
export const loadBooksCarouselDataAction = (payload) => dispatch => {
    dispatch({
        type: homeActionTypes.LOAD_CAROUSEL_DATA,
        payload,
    })
}