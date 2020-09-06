import React from 'react';
import { loadLocalImage } from 'utils/utils'

const Categories = ({categoriesData}) => (
    <React.Fragment>
        {categoriesData &&
            <div className="categories">
                <h1 className="categories__header">
                    <b>Browse</b> Our Most Popular Categories
                </h1>
                <div className="categories__list">
                    {categoriesData && categoriesData.map((category) => (
                        <div className="category-item" key={category.id} >
                            <div className="category-item__image">
                            <img src={loadLocalImage(category.image)} alt={category.title} width={60} />
                            </div>
                            <div  className="category-item__details">
                                <h3 className="category-item__title">
                                    {category.title}
                                </h3>
                                <span>
                                    {category.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        }
    </React.Fragment>
);

export default Categories;