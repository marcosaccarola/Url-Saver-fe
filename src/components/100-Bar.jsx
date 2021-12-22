import { Col, Row } from 'react-bootstrap'
import './000.css'

const Bar=()=>{

    return(
        <>
            <Row className='bar vw-100'>
                <Col sm={2}>
                    logo
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