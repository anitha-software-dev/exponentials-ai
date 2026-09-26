import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const FAQ = () => {

    const [active, setIsActive] = useState(null)

    const toggle = (i) => {
        if (active === i) {
            return setIsActive(null)
        }
        setIsActive(i)
    }
    const data = [{
        question: 'What are the benefits of the Exponentials Gold and Silver A.I. Pass?',
        answer: <div><div className="mb-2">Lorem ipsum dolor sit amet consectetur diam enim vitae </div></div>
    },
    {
        question: 'Will there be a public or private launch?',
        answer: <div><div className="mb-2">Initially we are looking to do a small-scale private launch with a public launch due to be announced later down the line. Very special privileges will be given to the Private Launch Collection holders.</div></div>
    },
    {
        question: 'Why is it an NFT and not a Token?',
        answer: <div><div className="mb-2">Lorem ipsum dolor sit amet consectetur diam enim vitae</div></div>
    },
    {
        question: 'Why is it an NFT and not just a regular membership?',
        answer: <div><div className="mb-2">Lorem ipsum dolor sit amet consectetur diam enim vitae</div></div>
    },
    {
        question: ' Lorem ipsum dolor sit amet consectetur diam enim vitae ?',
        answer: <div><div className="mb-2">Lorem ipsum dolor sit amet consectetur diam enim vitae</div></div>
    }
    ]

    return (
        <div className='bg-faq' id='faq'>
            <section>
                <div className="container">

                    <Row>
                        <Col lg="6">
                            <p className=' mb-0 yel-button text-nowrap px-4 py-2'>
                                FAQ
                            </p>
                            <h1 className='text-white text-left mb-0'>Frequently asked questions</h1>
                            {data.map((item, i) => (
                                <div className="mt-4 faq-text" >
                                    <div className="faq-bg p-3 d-flex justify-content-between align-items-center" onClick={() => toggle(i)}>
                                        <h5 className=" text-white mb-0">
                                            {item.question}
                                        </h5>
                                        {active === i ? <img src={require('../../assets/img/expo-images/minus.png').default} className="img-fluid cursor pointer" width={30} /> : <img src={require('../../assets/img/expo-images/plus.png').default} className="img-fluid cursor pointer" width={30} />}
                                    </div>
                                    <div className={`faq-ans ${active === i ? 'content show p-4' : 'content'}`}>
                                        <h6 className="text-lowercase text-white mb-0">
                                            {item.answer}
                                        </h6>
                                    </div>
                                </div>
                            ))}
                        </Col>
                        <Col lg="6" className='pt-5 mt-5'>
                            <img src={require('../../assets/img/expo-images/faq-img.png').default} height={"100%"} width={"100%"} className="img-fluid " />
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    )
}

export default FAQ