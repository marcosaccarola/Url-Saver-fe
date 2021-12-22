import { Col, Row } from 'react-bootstrap'
import './000.css'

const ControlsAbove=()=>{

    return(
        <>
            <Row className='controls-below vw-100'>
                <Col sm={1}>
                    
                </Col>
                <Col sm={10} className='row align-items-center'>
                    <Col sm={6}>
                        groups
                    </Col>
                    <Col sm={6}>
                        details
                    </Col>
                </Col>
                <Col sm={1}>
                    
                </Col>
            </Row>
        </>
    )
}

export default ControlsAbove