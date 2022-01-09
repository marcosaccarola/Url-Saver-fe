import { Col, Image, Row } from 'react-bootstrap'
import './000.css'
import logo from '../assets/logo.png'

const Bar=({user,setUser})=>{

    return(
        <>
            <Row className='bar bg-warning vw-100 align-items-center'>
                <Col sm={2}>
                    <img className='img-fluid bar bg-warning' src={logo} style={{}} />
                </Col>
                <Col sm={8}>
                    home
                </Col>
                <Col sm={2}>
                    avatar
                </Col>
            </Row>
        </>
    )
}

export default Bar