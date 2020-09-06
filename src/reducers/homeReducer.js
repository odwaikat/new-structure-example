export default (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_CATEGORIES_DATA':
            return {
                ...state,
                categories: action.payload
            }
        case 'LOAD_CAROUSEL_DATA':
            return {
                ...state,
                books: action.payload
            }
        default:
            return state
    }
}