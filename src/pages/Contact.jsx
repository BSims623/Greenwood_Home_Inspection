import React from 'react'
import Wrapper from '../assets/wrappers/Contact'
import profileImg from '../assets/images/profile-img.jpeg'

const Contact = () => {
    return (
        <Wrapper className='pt-5'>
            <div className='contact-section row mx-auto px-5'>
                <div className="contact-container my-5 col-12 col-sm-8 d-flex flex-column justify-content-around">
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
        </Wrapper>
    )
}

export default Contact