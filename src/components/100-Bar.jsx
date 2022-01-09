import { Col, Image, Row } from 'react-bootstrap'
import './000.css'
import logo from '../assets/logo.png'
import { BsQuestionLg } from "react-icons/bs"

const Bar=({user,setUser})=>{

    return(
        <>
            <Row className='bar bg-warning vw-100 align-items-center'>
                <Col sm={3}>
                    <img className='img-fluid bar bg-warning' src={logo}/>
                    <span>Url Container</span>
                </Col>
                <Col sm={6}>
                    <BsQuestionLg />
                </Col>
                <Col sm={3}>
                    {
                        user&&user.avatar&&
                        <img src={user.avatar} />
                    }
                </Col>
            </Row>
        </>
    )
}

export default Bar