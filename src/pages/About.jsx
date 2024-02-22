import React from 'react'
import Wrapper from '../assets/wrappers/About'
import profileImg from '../assets/images/profile-img.jpeg'

const About = () => {
    return (
        <Wrapper className='container'>
            <section className="about-section py-5 mx-auto col-md-6">
                <img className='rounded mx-auto d-block' src={profileImg} alt="Profile picture of Marty Greenwood." width='200' />
                <h1 className="text-center my-3">Marty Greenwood</h1>
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
        </Wrapper>
    )
}

export default About