import React from 'react'
import { Link, useRouteError } from 'react-router-dom';


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div className='container-fluid h-100 d-flex flex-column justify-content-center align-items-center bg-dark'>
            <h1 className='text-primary'>{error.statusText}</h1>
            <Link to={'/'}>
                <button className='btn-primary' type="button">back home</button>
            </Link>
        </div>
    )
}

export default ErrorPage