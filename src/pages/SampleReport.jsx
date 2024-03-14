import React from 'react'
import sampleReport from '../assets/pdf/SAMPLE 021623A.pdf'

const SampleReport = () => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <h1 className='my-3 display-3 fw-bold'>Sample Report</h1>
            <div style={{ maxWidth: '900px', width: '100%' }}>
                <iframe src=
                    {sampleReport}
                    width="100%"
                    height="700">
                </iframe>
            </div>
        </div>
    )
}

export default SampleReport