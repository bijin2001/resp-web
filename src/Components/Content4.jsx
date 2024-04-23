import React from 'react'
import '../App.css'
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import AOS from 'aos'
import { useEffect } from 'react';
import 'aos/dist/aos.css';



function Content4() {

    useEffect(() => {
        AOS.init({
          offset: 200, delay: 0, duration: 1000, easing: 'ease', once: false, mirror: false,
        });
      }, []);
    

    const arrayContent = [

        {
            Title : 'DT899-19 Articulated Dump Truck',
            Para : 'With the Digger DT899-19, you will move more materials faster and work harder in tough conditions, and navigate roadways or difficult terrain with ease',
            Image : 'https://www.pngall.com/wp-content/uploads/12/Excavator-Digger-Equipment-PNG-Photo.png'
        },
        {
            Title : 'DF592-18 Electric Cusion Tyre Forklift',
            Para : 'The Digger DF592-18 cushion tire forklift series has a comfortable operator compartment with advanced AC motor and optimized visibility.',
            Image : 'https://www.pngall.com/wp-content/uploads/12/Excavator-Digger-Equipment-PNG-Image.png'
        },
        {
            Title : 'DT899-19 Articulated Dump Truck',
            Para : 'With the Digger DT899-19, you will move more materials faster and work harder in tough conditions, and navigate roadways or difficult terrain with ease.',
            Image : 'https://pngimg.com/uploads/excavator/excavator_PNG60.png'
        },
        {
            Title : 'DT899-19 Articulated Dump Truck',
            Para : 'With the Digger DT899-19, you will move more materials faster and work harder in tough conditions, and navigate roadways or difficult terrain with ease.',
            Image : 'https://www.jing.fm/clipimg/full/367-3676778_wheel-loader-wheel-loader-hl730-9s.png'
        },




    ]

    return (
        <>
            <div className='container mt-5'>

            <h1 className='ps-3 mb-5' style={{borderLeft:'6px solid #ffd541'}}>Equipments</h1>

                <Row xs={1} md={1} className='g-4'>
                {arrayContent.slice(0, 5).map((Content, idx) => (

                    
                    <Card className='shadow'>
                        <Row data-aos="fade-up" noGutters>
                            <Col xs={12} md={5} key={idx}>
                                <Card.Img style={{width:'12em', height:'9em'}} src={Content.Image} />

                            </Col>
                            <Col xs={12} md={5} key={idx}>
                                <Card.Body col-sm-12 col-lg-6>
                                    <Card.Title style={{fontSize:'26px',color:'black'}}>{Content.Title}</Card.Title>
                                    <Card.Text><p>{Content.Para}</p></Card.Text>
                                </Card.Body>

                            </Col>
                            
                        </Row>
                    </Card>
                    ))}


                </Row>
            </div >

        </>
    )
}

export default Content4