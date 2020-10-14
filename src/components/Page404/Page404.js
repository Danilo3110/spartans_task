import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Page404.module.css';

const Page404 = props => {

    return (
        <div className={classes.notfound_div}>
            <div className={classes.notfound}>
                <div className={classes.notfound_404}></div>
                <h1>404</h1>
                <h2>''</h2>
                <p>''</p>
                <Link to="/">Home</Link>
            </div>
        </div>
    );
};

export default Page404;