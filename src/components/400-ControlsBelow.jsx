import { Col, Row } from 'react-bootstrap'
import './000.css'

const ControlsBelow=()=>{

    return(
        <>
            <Row className='controls-below vw-100'>
                <Col sm={2}>
                    logo
                </Col>
                <Col sm={8}>
                    home button
                </Col>
                <Col sm={2}>
                    avatar
                </Col>
            </Row>
        </>
    )
}

export default ControlsBelow