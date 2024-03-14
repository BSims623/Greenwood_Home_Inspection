import React from 'react'
import sampleReport from '../assets/pdf/SAMPLE 021623A.pdf'

const SampleReport = () => {
    return (
        <div>
            <h1 className='my-3 display-3 fw-bold text-center'>Sample Report</h1>
            <h2 className="text-center">Click <a href={sampleReport}>here</a> to view a sample report.</h2>
        </div>
    )
}

export default SampleReport