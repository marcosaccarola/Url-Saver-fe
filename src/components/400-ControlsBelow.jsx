import { Col, Row } from 'react-bootstrap'
import './000.css'

const ControlsBelow=()=>{

    return(
        <>
            <Row className='controls-below vw-100'>
                <Col sm={1}>
                    
                </Col>
                <Col sm={10} className='row align-items-center'>
                    <Col sm={6}>
                        ?
                    </Col>
                    <Col sm={6}>
                        urls
                    </Col>
                </Col>
                <Col sm={1}>
                    
                </Col>
            </Row>
        </>
    )
}

export default ControlsBelow