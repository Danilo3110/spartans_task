import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Page404.module.css';

const Page404 = () => {

    return (
        <div className={classes.notfound_div}>
            <div className={classes.notfound}>
                <div className={classes.notfound_404}></div>
                <h1>404</h1>
                <h2>{'Page not found!'}</h2>
                <p>{'Sorry, the page you are looking for does not exist, has been removed, has been renamed, or it is temporarily unavailable!'}</p>
                <Link to="/">{'Return to the home page'}</Link>
            </div>
        </div>
    );
};

export default Page404;