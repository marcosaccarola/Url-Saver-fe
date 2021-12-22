import { Col, Row } from 'react-bootstrap'
import './000.css'

const ControlsAbove=()=>{

    return(
        <>
            <Row className='controls-below vw-100'>
                <Col sm={2}>
                    
                </Col>
                <Col sm={8} className='row'>
                    <Col sm={5}>
                        groups
                    </Col>
                    <Col sm={2}>
                        ?
                    </Col>
                    <Col sm={5}>
                        details
                    </Col>
                </Col>
                <Col sm={2}>
                    
                </Col>
            </Row>
        </>
    )
}

export default ControlsAbove