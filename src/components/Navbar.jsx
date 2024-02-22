import React from 'react'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation().pathname


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <h2 className='text-light mt-3 mx-auto d-none d-sm-block d-lg-none'>Greenwood Home Inspection</h2>
                    <h5 className='text-light mt-3 mx-auto d-sm-none'>Greenwood Home Inspection</h5>
                    <div className="collapse navbar-collapse justify-content-md-center flex-column" id="navbarsExample08">
                        <h1 className="text-light d-none d-sm-block">Greenwood Home Inspection</h1>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className={location === '/' ? 'nav-link active' : 'nav-link'} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={location === '/about' ? 'nav-link active' : 'nav-link'} href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className={location === '/services' ? 'nav-link active' : 'nav-link'} href='/services'>Services</a>
                            </li>
                            <li className="nav-item">
                                <a className={location === '/contact' ? 'nav-link active' : 'nav-link'} href='/contact'>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar