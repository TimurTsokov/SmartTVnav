import React from 'react';
// import classes from './Layout.css'
import Auxiliary from '../../hoc/Auxiliary'

const layout = (props) => (
    <Auxiliary>
        {/* <main className={classes.Container}> */}
        <main>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;
