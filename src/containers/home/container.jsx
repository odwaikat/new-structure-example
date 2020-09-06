import React from 'react';
import { connect } from 'react-redux';
import {
    loadCategoriesData,
    loadBooksCarouselData
} from './actions'

import Categories from 'components/categories/container'
import Carousel from 'components/carousel/container'
// import Books from 'components/books/books'

class Home extends React.Component {
    // constructor() {
    //     super();
    //     // this.state = {
    //     //     categoriesdata: {},
    //     //     nonfictionData: {}
    //     // }
    // }
    componentDidMount() {
        this.props.loadCategoriesData();
        this.props.loadBooksCarouselData();
    }
    render() {
        const {home} = this.props;
        const books = home.books;
        let categories = home.categories;
        if (categories) {
            categories = categories.slice(0, 8);
        }
        return (
            <div>
                <Categories categoriesData={categories} />
                <Carousel carouselData={books} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    home: state.home || {}
})
const mapDispatchToProps = dispatch => ({
    loadCategoriesData: () => dispatch(loadCategoriesData()),
    loadBooksCarouselData: () => dispatch(loadBooksCarouselData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);