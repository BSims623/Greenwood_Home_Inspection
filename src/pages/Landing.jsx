import React from 'react'
import Wrapper from '../assets/wrappers/Landing'
import { Link } from 'react-router-dom'
import { Testimonials } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'


const Landing = () => {
    return (
        <Wrapper>
            <div className="img-container">
                <img src='src/assets/images/landing.jpg' />
            </div>
            <section className="about-section container-lg py-3 d-flex flex-column align-items-center">
                <h1 className='display-5 fw-bold lh-1'>Welcome To Greenwood Home Inspection</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A minus id at distinctio voluptas. Voluptatem assumenda voluptas officia fuga facilis eos odio numquam incidunt. Pariatur ipsum laboriosam veritatis! Deleniti, ipsam!
                    Inventore rem veritatis architecto iusto odit soluta sed doloribus officiis similique illum non aperiam, nemo ratione cupiditate dolore dolores. Fugiat necessitatibus, doloremque in cupiditate deleniti eum quo aliquid consequatur quisquam?
                    Quisquam error nisi porro iure incidunt labore enim officiis? Aliquid quis natus vitae at similique tempore quaerat hic accusamus reprehenderit, ullam maiores incidunt mollitia. Quas sint amet quaerat commodi blanditiis!</p>
                <Link className='btn btn-green text-light' to='/about'>Learn More</Link>
            </section>
            <section className="services-section py-5 d-flex flex-column align-items-center text-light">
                <h1 className='display-5 fw-bold lh-1 text-center'>Inspection Services</h1>
                <div className="d-md-flex my-5">
                    <div className="services-container mx-5">
                        <ul className='mx-auto mb-0 fa-ul'>
                            <li><i class="fa-li fa fa-check-square"></i>Residential</li>
                            <li><i class="fa-li fa fa-check-square"></i>Pre-Listing</li>
                            <li><i class="fa-li fa fa-check-square"></i>Foundation, Basement, and Subfloor</li>
                            <li><i class="fa-li fa fa-check-square"></i>Exterior</li>
                            <li><i class="fa-li fa fa-check-square"></i>Roof Covering</li>
                            <li><i class="fa-li fa fa-check-square"></i>Attic Areas and Roof Framing</li>
                        </ul>
                    </div>
                    <div className="services-container mx-5">
                        <ul className='mx-auto mt-0 fa-ul'>
                            <li><i class="fa-li fa fa-check-square"></i>Plumbing</li>
                            <li><i class="fa-li fa fa-check-square"></i>Electrical</li>
                            <li><i class="fa-li fa fa-check-square"></i>Heating and Cooling</li>
                            <li><i class="fa-li fa fa-check-square"></i>Fireplaces and Chimneys</li>
                            <li><i class="fa-li fa fa-check-square"></i>Building Interior</li>
                        </ul>
                    </div>
                </div>
                <Link className='btn btn-dark' to='/services'>Learn More</Link>
            </section>
            <section className='logo-section mx-auto'>
                <a href="https://www.creia.org/">
                    {/* <img src="https://www.creia.org/assets/site/logo.png" alt="creia logo" /> */}
                    <img src="src/assets/images/CREIA Logo.webp" alt="creia logo" />
                </a>
            </section>
            <section className='testimonials-section'>
                <Testimonials />
            </section>
            <section className="contact-section py-3 d-flex flex-column align-items-center">
                <h1 className='display-5 fw-bold lh-1 text-center'>Schedule an Inspection</h1>
                <div className='my-3'>
                    <p className='m-0'>Phone: <a href='tel:7073228350'>707-322-8350</a></p>
                    <p className='m-0'>Email: <a href='mailto:greenwoodhomeinspections@gmail.com'>greenwoodinspec@aol.com</a></p>
                    <p className='m-0'>Hours: M-F 9am to 5pm</p>
                </div>
                <Link className='btn btn-green text-light' to='/contact'>Contact</Link>
            </section>
        </Wrapper>
    )
}

export default Landing