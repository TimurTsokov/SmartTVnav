import React from 'react';
import CategoryListItem from '../CategoryListItem/CategoryListItem';

const CategoryList = React.memo((props) => (
    <div>
        <CategoryListItem/>
    </div>
));

export default CategoryList;
