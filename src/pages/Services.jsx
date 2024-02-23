import React from 'react'
import { servicesList } from '../utils/servicesList'
import { Service, ScrollToTop } from '../components'
import creiaLogoWebp from '../assets/images/creia-logo.webp'
import creiaLogoJpg from '../assets/images/creia-logo.jpg'
import { Link } from 'react-router-dom'

const Services = () => {

    // h2 {
    //     color: var(--primary-green);
    //     border-bottom: 5px solid;
    // }

    return (
        <div className='container d-flex flex-column align-items-center'>
            <ScrollToTop />
            <h1 className="text-center mt-3 display-3 fw-bold" id='inspection-services-heading'>Inspection Services</h1>
            <section className='logo-section mx-auto'>
                <a href="https://www.creia.org/"><picture>
                    <source srcSet={creiaLogoWebp} media="(max-width: 100%)" type="image/webp" />
                    <img className='w-100' style={{ maxWidth: '100%' }} src={creiaLogoJpg} alt="CREIA Logo image" />
                </picture>
                </a>
            </section>
            <div className="col-lg-8">
                <p className='description'>I am a CREIA Certified Home Inspector working with both homeowners and real estate agents in Nevada, Placer and Sacramento counties. Every inspection is held to the standards of the CREIA contract, click <a href="src/assets/pdf/CreiaContractAndSOP10.2018.pdf">here</a> to view the full contract.</p>
            </div>
            <div className="col-md-6 mt-5">
                <h2 className='text-center fw-bold' style={{ color: 'var(--primary-green)', borderBottom: '5px solid' }}>What is Included in an Inspection?</h2>
                {servicesList.map((x, i) => {
                    return <Service key={i} service={x.service} included={x.included} />
                })}
            </div>
            <Link className='btn btn-green text-light my-4' to='/contact'>Schedule Inspection</Link>
        </div>
    )
}

export default Services