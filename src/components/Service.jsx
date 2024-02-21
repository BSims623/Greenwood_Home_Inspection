import React from 'react'
import Wrapper from '../assets/wrappers/Service'

const Service = (props) => {
    props.included && props.included.map((x) => console.log(x))

    return (
        <Wrapper className="container-fluid d-flex flex-column py-3">
            <div className='d-flex align-items-center'><i class="fa-div icon-large fa fa-check-square"></i><h3 className='my-0 ms-3 fw-bold'>{props.service}</h3></div>
            <ul className='fa-ul'>
                {props.included && props.included.map((x) => {
                    return <li><i class="fa-li fa fa-check-square"></i>{x}</li>
                })}
                {/* <li><i class="fa-li fa fa-check-square"></i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente eum illo repellat nisi? Molestiae debitis dolorem quod. Quasi, harum dignissimos iure, fuga ipsum asperiores expedita, eveniet sunt vel dolor officiis.</li>
                <li><i class="fa-li fa fa-check-square"></i>Pre-Listing</li>
                <li><i class="fa-li fa fa-check-square"></i>Foundation, Basement, and Subfloor</li>
                <li><i class="fa-li fa fa-check-square"></i>Exterior</li>
                <li><i class="fa-li fa fa-check-square"></i>Roof Covering</li> */}
            </ul>
        </Wrapper>
    )
}

export default Service