import React from 'react'
import Wrapper from '../assets/wrappers/Service'

const Service = (props) => {

    return (
        <Wrapper className="container-fluid d-flex flex-column py-3">
            <div className='d-flex align-items-center'><i className={props.icon}></i><h5 className='my-0 ms-2 fw-bold'>{props.service}</h5></div>
            <ul className='fa-ul mt-2 mb-0'>
                {props.included && props.included.map((x, i) => {
                    return <li key={i}><i className="fa-li fa fa-check-square"></i>{x}</li>
                })}
            </ul>
        </Wrapper>
    )
}

export default Service