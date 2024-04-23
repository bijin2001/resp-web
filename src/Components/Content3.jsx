import React from 'react'
import '../App.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AOS from 'aos'
import { useEffect } from 'react';
import 'aos/dist/aos.css';



function Content3() {

    useEffect(() => {
        AOS.init({
          offset: 200, delay: 0, duration: 1000, easing: 'ease', once: false, mirror: false,
        });
      }, []);


    const arrayContent = [

        {
            Title: 'Agriculture',
            Text : '20 Models',
            Image : 'https://livedemo00.template-help.com/wt_prod-25523/crafter-construction-equipment/images/home-1-379x291.jpg'

        },

        {

            Title: 'Construction',
            Text : '25 Models',
            Image : 'https://livedemo00.template-help.com/wt_prod-25523/crafter-construction-equipment/images/home-2-379x291.jpg'


        },

        {

            Title: 'Asphalt Paving',
            Text : '10 Models',
            Image : 'https://livedemo00.template-help.com/wt_prod-25523/crafter-construction-equipment/images/home-3-379x291.jpg'


        },

        {

            Title: 'Warehousing',
            Text : '28 Models',
            Image : 'https://livedemo00.template-help.com/wt_prod-25523/crafter-construction-equipment/images/home-4-379x291.jpg'


        },

        {

            Title: 'Mining',
            Text : '15 Models',
            Image : 'https://livedemo00.template-help.com/wt_prod-25523/crafter-construction-equipment/images/home-5-379x291.jpg'


        },

        {

            Title: 'Transportaion',
            Text : '30 Models',
            Image : 'https://livedemo00.template-help.com/wt_prod-25523/crafter-construction-equipment/images/home-6-379x291.jpg'


        }




    ]

    return (
        <div>

            <div style={{ paddingTop: '5em', paddingBottom: '5.5em' }} className='cnt-3 px-5 row justify-content-center'>
                <div data-aos="zoom-in" className='col-lg-4 cnt-3s'>
                    <h1 className='cnt-hd'>Browse Industry</h1>
                </div>

                <div data-aos="zoom-in" className='col-lg-8 cnt-3s'>
                    <p className='cnt-pr'>We provide heavy-duty equipment for a variety of industries. Companies all over the world buy & rent our equipment to make their work safe, reliable, and efficient.</p>
                </div>

            <Row xs={1} md={3} className="g-4">
                {arrayContent.slice(0, 9).map((Content, idx) => (
                    <Col key={idx}>
                        <Card data-aos="fade-up">
                            <Card.Img style={{ borderRadius: '10px' }} variant="top" src={Content.Image} />
                            <Card.Body>
                                <Card.Title style={{ color: 'black', display: 'flex', justifyContent: 'center', fontSize: '26px' }}>{Content.Title}</Card.Title>
                                <Card.Text style={{ color: 'black', display: 'flex', justifyContent: 'center', fontSize: '16px', fontWeight: '400' }}>{Content.Text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>


        </div>
    )
}

export default Content3