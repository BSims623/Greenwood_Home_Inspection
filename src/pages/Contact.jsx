import React from 'react'
import Wrapper from '../assets/wrappers/Contact'
import profileImg from '../assets/images/profile-img.jpeg'
import creiaLogo from '../assets/images/creia-logo.webp'

const Contact = () => {
    return (
        <Wrapper className='d-flex flex-column align-items-center'>
            <div className='contact-section row mx-auto px-5 mt-5'>
                <div className="contact-container col-12 col-sm-8 d-flex flex-column justify-content-center">
                    <h2 className='fw-bold'>Martin Greenwood</h2>
                    <h4>Feel free to reach out with any questions or to get a quote.</h4>
                    <div className="contact-info">
                        <p className='m-0 fw-bold'>Phone: <a className='fw-normal' href='tel:7073228350'>707-322-8350</a></p>
                        <p className='m-0 fw-bold'>Email: <a className='fw-normal' href='mailto:greenwoodhomeinspections@gmail.com'>greenwoodinspec@aol.com</a></p>
                        <p className='m-0 fw-bold'>Hours: M-F 9am to 5pm</p>
                    </div>
                </div>
                <div className="img-container my-5 col-12 col-sm-4 mx-auto">
                    <img className='rounded' src={profileImg} alt="Marty Greenwood profile picture." />
                </div>
            </div>
            <a href="https://www.creia.org/"><img className='creia-logo' src={creiaLogo} alt="CREIA Logo" /></a>
        </Wrapper>
    )
}

export default Contact