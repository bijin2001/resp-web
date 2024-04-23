import React from 'react'
import '../App.css'

function Content2() {
    return (
        <div>
            <div className='d-flex flex-column flex-lg-row container cnt-2 my-5'>
                <div className='cnt-2s px-5 px-lg-0 mb-lg-0' >
                    <h1 style={{ fontSize: '26px' }}>Safety</h1>
                    <h3 style={{ fontSize: '16px', color: 'grey' }}>Making your work safe</h3>
                </div>
                <div className='cnt-2s px-2 px-lg-0 mb-lg-0'>
                    <h1 style={{ fontSize: '26px' }}>Teamwork</h1>
                    <h3 style={{ fontSize: '16px', color: 'grey' }}>Qualified team</h3>
                </div>
                <div className='cnt-2s px-2 px-lg-0'>
                    <h1 style={{ fontSize: '26px' }}>Integrity</h1>
                    <h3 style={{ fontSize: '16px', color: 'grey' }}>Always honest & dedicated</h3>
                </div>
            </div>

        </div>
    )
}

export default Content2