import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/TestimonialContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle as faRegCircle } from '@fortawesome/free-regular-svg-icons'
import { faAngleRight, faAngleLeft, faQuoteLeft, faCircle } from '@fortawesome/free-solid-svg-icons'
import { data } from '../utils/mockData';
import Testimonial from './Testimonial';

const indexArray = Array.from({ length: data.length }, (_, index) => {
    return index
})
const maxIndex = indexArray.length - 1


const TestimonialsContainer = () => {
    const [testimonialIndex, setTestimonialIndex] = useState(0)

    const incrementIndex = () => {
        if (testimonialIndex < maxIndex) {
            setTestimonialIndex(testimonialIndex + 1)
        } else {
            setTestimonialIndex(0)
        }
    }

    const decrementIndex = () => {
        if (testimonialIndex > 0) {
            setTestimonialIndex(testimonialIndex - 1)
        } else {
            setTestimonialIndex(maxIndex)
        }
    }


    return (
        <Wrapper className='container-fluid px-0 py-5 d-flex flex-column align-items-center justify-content-between'>
            <h1 className='display-5 fw-bold lh-1 mb-3 text-center'>Testimonials</h1>
            <div className="container-fluid px-0 w-100 d-flex h-100">
                <div className="container icon-container d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleLeft} className='icon' onClick={() => decrementIndex()} />
                </div>
                <div className="container content-container">
                    <Testimonial data={data} testimonialIndex={testimonialIndex} indexArray={indexArray} />
                </div>
                <div className="container icon-container d-flex align-items-center justify-content-end">
                    <FontAwesomeIcon icon={faAngleRight} className='icon' onClick={() => incrementIndex()} />
                </div>
            </div>
            <div className="container-fluid d-flex justify-content-center align-items-center">
                {indexArray.map((item) => {
                    return item === testimonialIndex ? <FontAwesomeIcon key={item} icon={faCircle} className='circle mx-2' onClick={() => setTestimonialIndex(item)} /> : <FontAwesomeIcon key={item} icon={faRegCircle} className='circle mx-2' onClick={() => setTestimonialIndex(item)} />
                })}
            </div>
        </Wrapper>
    )
}

export default TestimonialsContainer