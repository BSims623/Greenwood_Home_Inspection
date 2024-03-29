import React from 'react'
import profileImg from '../assets/images/profile-img.jpeg'
import { ScrollToTop, CertificationContainer, Service } from '../components'
import { trainingAndEducation } from '../utils/trainingAndEducation'
import { Link } from 'react-router-dom'

const About = () => {
    const reverseTrainingAndEducation = trainingAndEducation.slice().reverse();

    return (
        <div className='py-5 d-flex flex-column align-items-center'>
            <ScrollToTop />
            <section className="container about-section mx-auto col-lg-6">
                <img className='rounded mx-auto d-block' src={profileImg} alt="Profile picture of Marty Greenwood." width='200' />
                <h1 className="text-center my-3">Martin Greenwood</h1>
                <p className=''>I am Martin Greenwood; I am the owner of Greenwood Home Inspection.</p>
                <p>I am a home inspector, certified by the California Real Estate Inspection
                    Association (<a href="https://www.creia.org/">creia.org</a>). I was certified by CREIA in 2002, completing the education
                    and experience required to become certified by CREIA. Requirements for and
                    maintenance of CREIA certifications are the most stringent of most inspection
                    associations.</p>
                <p>I began my career housing in 1971 as an apprentice carpenter in Southern
                    California. I attended four years of carpenter apprentice training and became a
                    journeyman carpenter certified by the California State Department of Industrial
                    Relations in 1976. I qualified and obtained a California State Contractors Licensed
                    in 1983. My experience in housing is in residential construction in the Bay Area
                    and custom home building In the Napa Valley for 30 years.</p>
                <p>I have been a home inspector for the past 20 years, in the San Francisco Bay Area,
                    Nevada, Placer, and Sacramento counties.</p>
            </section>
            <section className='col-lg-6 mx-auto mt-5'>
                <CertificationContainer />
            </section>
            <section className='col-lg-6 mx-auto mt-5'>
                <div>
                    <h2 className='text-center fw-bold pb-4' style={{ color: 'var(--primary-green)', borderBottom: '5px solid' }}>Inspection Training and Education</h2>
                    {reverseTrainingAndEducation.map((x, i) => {
                        return <Service key={i} service={x.trainingEvent} included={x.topics} icon="icon-medium fa fa-solid fa-certificate" />
                    })}
                </div>
            </section>
            <Link className='btn btn-green text-light mt-4 mx-auto' to='/services'>Services</Link>
        </div>
    )
}

export default About