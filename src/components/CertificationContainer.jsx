import React from 'react'
import { certificationsList } from '../utils/certificationsList'


const CertificationContainer = () => {
    return (
        <div className='text-light py-4 px-4' style={{ background: 'var(--primary-green)' }}>
            <h2 className="text-center">Certifications</h2>
            <ul className="fa-ul">
                {certificationsList.map((x, i) => {
                    return <li className='my-3' key={i}><i className="fa-li fa-solid fa-certificate"></i>{x}</li>
                })}
            </ul>
        </div>
    )
}

export default CertificationContainer