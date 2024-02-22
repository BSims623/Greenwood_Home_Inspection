import React from 'react'
import Wrapper from '../assets/wrappers/Landing'
import { Link } from 'react-router-dom'
import landingImgWebp from '../assets/images/landing-3.webp'
import landingImgJpg from '../assets/images/landing-img-new.jpg'
import creiaLogoWebp from '../assets/images/creia-logo.webp'
import creiaLogoJpg from '../assets/images/creia-logo.jpg'
import { ImagePreloader } from '../components'


const Landing = () => {


    return (
        <Wrapper>
            <div className="img-container w-100">
                <picture>
                    <source srcset={landingImgWebp} media="(width: 100%)" type="image/webp" />
                    <source srcset={landingImgJpg} media="(width: 100%)" type="image/jpg" />
                    <img className='w-100' src={landingImgJpg} alt="Landing image of a new home." />
                </picture>
                {/* <ImagePreloader src={landingImg} alt="Landing image of new home." className="landing-img" /> */}
            </div>
            <section className="about-section container-lg py-5 d-flex flex-column align-items-center">
                <h1 className='display-5 fw-bold lh-1'>Welcome To Greenwood Home Inspection</h1>
                <p className='mt-3'>I am a home inspector, certified by the California Real Estate Inspection
                    Association (<a href="https://www.creia.org/">creia.org</a>). I was certified by CREIA in 2002, completing the education
                    and experience required to become certified by CREIA. Requirements for and
                    maintenance of CREIA certifications are the most stringent of most inspection
                    associations. I work with both homeowners and real estate agents in Nevada, Placer, and Sacramento Counties.</p>
                <Link to='/about'><button className='btn btn-green text-light mt-5'>Learn More</button></Link>
            </section>
            <section className="services-section py-5 d-flex flex-column align-items-center text-light">
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
                <Link to='/services'><button className='btn btn-light'>Learn More</button></Link>
            </section>
            <section className='logo-section d-flex justify-content-center mx-auto py-5'>
                <a href="https://www.creia.org/">
                    <picture>
                        <source srcset={creiaLogoWebp} media="(max-width: 100%)" type="image/webp" />
                        {/* <source srcset={creiaLogoWebp} media="(max-width: 100%)" type="image/jpg" /> */}
                        <img className='w-100' style={{ maxWidth: '100%' }} src={creiaLogoJpg} alt="Landing image of a new home." />
                    </picture>
                    {/* <img src={creiaLogo} alt="creia logo" /> */}
                </a>
            </section>
            <section className="contact-section py-5 d-flex flex-column align-items-center">
                <h1 className='display-5 fw-bold lh-1 text-center'>Schedule an Inspection</h1>
                <div className='my-3'>
                    <p className='m-0'>Phone: <a href='tel:7073228350'>707-322-8350</a></p>
                    <p className='m-0'>Email: <a href='mailto:greenwoodhomeinspections@gmail.com'>greenwoodinspec@aol.com</a></p>
                    <p className='m-0'>Hours: M-F 9am to 5pm</p>
                </div>
                <Link to='/contact'><button className='btn btn-light'>Contact</button></Link>
            </section>
        </Wrapper>
    )
}

export default Landing