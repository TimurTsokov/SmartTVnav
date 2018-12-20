import React from 'react';

const CategoryListItem = React.memo((props) => (
    <div onClick={() => props._openCategory(props.id)}>{props.children}</div>
));

export default CategoryListItem;