import React from 'react'
import Wrapper from '../assets/wrappers/Services'
import { servicesList } from '../utils/servicesList'
import Service from '../components/Service'
import creiaLogo from '../assets/images/creia-logo.webp'
import { Link } from 'react-router-dom'

const Services = () => {
    console.log(servicesList[4].included);

    return (
        <Wrapper className='container d-flex flex-column align-items-center'>
            <h1 className="text-center mt-3 display-3 fw-bold">Inspection Services</h1>
            <section className='logo-section mx-auto'>
                <a href="https://www.creia.org/"><img className='w-100' src={creiaLogo} alt="creia logo" /></a>
            </section>
            <div className="col-lg-8">
                <h5 className='description'>I am a CREIA Certified Home Inspector working with both homeowners and real estate agents in Nevada, Placer and Sacramento counties. Every inspection is held to the standards of the CREIA contract, click <a href="src/assets/pdf/CreiaContractAndSOP10.2018.pdf">here</a> to view the full contract.</h5>
            </div>
            <div className="col-md-6 mt-5">
                <h2 className='text-center fw-bold'>What is Included in an Inspection?</h2>
                {servicesList.map((x, i) => {
                    return <Service key={i} service={x.service} included={x.included} />
                })}
            </div>
            <Link className='btn btn-green text-light my-4' to='/contact'>Schedule Inspection</Link>
        </Wrapper>
    )
}

export default Services