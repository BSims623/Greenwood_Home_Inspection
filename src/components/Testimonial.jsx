import React from 'react'

const Testimonial = ({ data, testimonialIndex }) => {
    const currentTestimonial = data[testimonialIndex];

    return (
        <div className="py-3 d-flex flex-column align-items-center">
            {/* <FontAwesomeIcon icon={faQuoteLeft} className='icon' id={testimonialIndex} /> */}
            {currentTestimonial.review.map((item) => <p key={item} className='review'>{item}</p>)}
            <p className='mb-0'>{currentTestimonial.name}, {currentTestimonial.location}</p>
        </div>
    )
}

export default Testimonial