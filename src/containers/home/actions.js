import {requestAPIData} from '../../utils/fetch-utils'
import {
    loadCategoriesDataAction,
    loadBooksCarouselDataAction
} from 'actions/homeActions'

export const loadCategoriesData = () => dispatch => {
    const url = 'https://api.jsonbin.io/b/5f54eb494d8ce4111389ed99'
    const method = 'GET'
    requestAPIData(url, method)
        .then((response) => {
            dispatch(loadCategoriesDataAction(response.categories))
        })
}
export const loadBooksCarouselData = () => dispatch => {
    const url = 'https://api.jsonbin.io/b/5f54eb7a4d8ce4111389edbb'
    const method = 'GET'
    requestAPIData(url, method)
        .then((response) => {
            dispatch(loadBooksCarouselDataAction(response.books))
        })
}