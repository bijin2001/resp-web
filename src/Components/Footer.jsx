import React from 'react'
import '../App.css'
import Button from 'react-bootstrap/Button';


function Footer() {
    return (
        <>
            <div className='ftr mt-5 d-flex-lg mb-5 pt-5 pb-5'>
                <div className='container'>
                    <h2 className='mt-5'>OUR CONTACTS</h2>
                    <p className='mt-5' style={{ color: '#ffffff80', fontSize: '20px' }}>51 Francis Street, Darlinghurst NSW 2010, United States</p>
                    <p className='mt-5'><span style={{ color: '#ffd541', fontSize: '16px', fontWeight: '600' }}>Ph:</span><span className='ms-3'>+91 9876543210</span></p>


                    <div className='d-flex mt-5' style={{ gap: '10px' }}>
                        <input type="text" placeholder='E-Mail' style={{ padding: '5px', width: '345px', height: '65px', outline: 'none', border: 'none', backgroundColor: 'rgb(89, 87, 87)', color: 'white' }} />
                        <button style={{ padding: '5px', backgroundColor: '#ffd541', outline: 'none', border: 'none', }}> Subscribe</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer