import React from "react"
import { Link } from 'react-router-dom';

const NotFound = () => (

     <>
            <h1 className="title is-size-2">404 - Page not found</h1>
            <p>Apologies, you've hit a route we hadn't planned for.</p>
            <p>Go back to the <Link to="/">search page</Link> to start again</p>
     </>
            

);

export default NotFound;

