export const loadCategoriesDataAction = (payload) => dispatch => {
    dispatch({
        type: 'LOAD_CATEGORIES_DATA',
        payload,
    })
}
export const loadBooksCarouselDataAction = (payload) => dispatch => {
    dispatch({
        type: 'LOAD_CAROUSEL_DATA',
        payload,
    })
}