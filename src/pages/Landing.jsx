import React from 'react'
import { Link } from 'react-router-dom'
import mobileLandingImgWebp from '../assets/images/landing-3.webp?w=480'
import mobileLandingImgJpg from '../assets/images/landing-img-new.jpg?w=480'
import tabletLandingImgWebp from '../assets/images/landing-3.webp?w=1024'
import tabletLandingImgJpg from '../assets/images/landing-img-new.jpg?w=1024'
import landingImgWebp from '../assets/images/landing-3.webp'
import landingImgJpg from '../assets/images/landing-img-new.jpg?w=1200'
import creiaLogoWebp from '../assets/images/creia-logo.webp'
import creiaLogoJpg from '../assets/images/creia-logo.jpg'
import { Testimonials } from '../components'
import { Helmet } from 'react-helmet'


const Landing = () => {


    return (
        <div>
            <Helmet>
                <link rel="preload" href={mobileLandingImgWebp} as="image" type="image/webp" />
                <link rel="preload" href={mobileLandingImgJpg} as="image" type="image/jpeg" />
                <link rel="preload" href={landingImgWebp} as="image" type="image/webp" />
                <link rel="preload" href={landingImgJpg} as="image" type="image/jpeg" />
            </Helmet>
            <picture>
                <source srcSet={mobileLandingImgWebp} media="(max-width: 480px)" type="image/webp" />
                <source srcSet={mobileLandingImgJpg} media="(max-width: 480px)" type="image/jpg" />
                <source srcSet={tabletLandingImgWebp} media="(max-width: 1024px)" type="image/webp" />
                <source srcSet={tabletLandingImgJpg} media="(max-width: 1024px)" type="image/jpg" />
                <source srcSet={landingImgWebp} media="(min-width: 1025px)" type="image/webp" />
                <source srcSet={landingImgJpg} media="(min-width: 1025px)" type="image/jpg" />
                <img className='w-100 max-vh object-fit-cover' src={landingImgJpg} alt="Landing image of a new home." />
            </picture>
            <section className="about-section container-lg py-5 d-flex flex-column align-items-center">
                <h1 className='display-5 fw-bold lh-1'>Welcome To Greenwood Home Inspection</h1>
                <p className='mt-3'>I am a home inspector, certified by the California Real Estate Inspection
                    Association (<a href="https://www.creia.org/">creia.org</a>). I was certified by CREIA in 2002, completing the education
                    and experience required to become certified by CREIA. Requirements for and
                    maintenance of CREIA certifications are the most stringent of most inspection
                    associations. I work with both homeowners and real estate agents in Nevada, Placer, and Sacramento Counties.</p>
                <Link to='/about'><button className='btn btn-green text-light mt-5'>Learn More</button></Link>
            </section>
            <section className="services-section py-5 d-flex flex-column align-items-center text-light" style={{ background: 'var(--primary-green)' }}>
                <h1 className='display-5 fw-bold lh-1 text-center'>Inspection Services</h1>
                <div className="d-md-flex my-5">
                    <div className="services-container mx-5">
                        <ul className='mx-auto mb-0 fa-ul'>
                            <li><i className="fa-li fa fa-check-square"></i>Residential</li>
                            <li><i className="fa-li fa fa-check-square"></i>Pre-Listing</li>
                            <li><i className="fa-li fa fa-check-square"></i>Foundation, Basement, and Subfloor</li>
                            <li><i className="fa-li fa fa-check-square"></i>Exterior</li>
                            <li><i className="fa-li fa fa-check-square"></i>Roof Covering</li>
                            <li><i className="fa-li fa fa-check-square"></i>Attic Areas and Roof Framing</li>
                        </ul>
                    </div>
                    <div className="services-container mx-5">
                        <ul className='mx-auto mt-0 fa-ul'>
                            <li><i className="fa-li fa fa-check-square"></i>Plumbing</li>
                            <li><i className="fa-li fa fa-check-square"></i>Electrical</li>
                            <li><i className="fa-li fa fa-check-square"></i>Heating and Cooling</li>
                            <li><i className="fa-li fa fa-check-square"></i>Fireplaces and Chimneys</li>
                            <li><i className="fa-li fa fa-check-square"></i>Building Interior</li>
                        </ul>
                    </div>
                </div>
                <Link to='/services#inspection-services-heading'><button className='btn btn-light'>Learn More</button></Link>
            </section>
            <section className='logo-section d-flex justify-content-center mx-auto py-5' style={{ maxWidth: '700px' }}>
                <a href="https://www.creia.org/">
                    <picture>
                        <source srcSet={creiaLogoWebp} media="(max-width: 100%)" type="image/webp" />
                        <img className='w-100' style={{ maxWidth: '100%' }} src={creiaLogoJpg} alt="Landing image of a new home." />
                    </picture>
                </a>
            </section>
            <section className='testimonial-section'>
                <Testimonials />
            </section>
            <section className="contact-section py-5 d-flex flex-column align-items-center bg-dark text-light mt-5">
                <h1 className='display-5 fw-bold lh-1 text-center'>Schedule an Inspection</h1>
                <div className='my-3'>
                    <p className='m-0'>Phone: <a href='tel:7073228350'>707-322-8350</a></p>
                    <p className='m-0'>Email: <a href='mailto:greenwoodhomeinspections@gmail.com'>greenwoodinspec@aol.com</a></p>
                    <p className='m-0'>Hours: M-F 9am to 5pm</p>
                </div>
                <Link to='/contact'><button className='btn btn-light'>Contact</button></Link>
            </section>
        </div>
    )
}

export default Landing