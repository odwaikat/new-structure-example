import * as homeActionTypes from '../../actions/homeActions/actionTypes'

export default (state = {}, action) => {
    switch (action.type) {
        case homeActionTypes.LOAD_CATEGORIES_DATA:
            return {
                ...state,
                categories: action.payload
            }
        case homeActionTypes.LOAD_CAROUSEL_DATA:
            return {
                ...state,
                books: action.payload
            }
        default:
            return state
    }
}