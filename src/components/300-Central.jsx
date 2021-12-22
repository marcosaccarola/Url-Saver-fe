import { Col, Row } from 'react-bootstrap'
import './000.css'
import BoxGroups from './310-BoxGroups'
import BoxDetails from './320-BoxDetails'
import BoxUrls from './330-BoxUrls'

const Central=()=>{

    return(
        <>
            <Row className='central vw-100'>
                <Col sm={2} className='wings'>                    
                </Col>
                <Col sm={8} className='row text-black'>
                    <Col sm={6} className='box-groups'>
                        <BoxGroups />
                    </Col>
                    <Col sm={6}>
                        <Row className='box-details'>
                            <BoxDetails />
                        </Row>                         
                        <Row className='box-urls'>
                            <BoxUrls />
                        </Row>     
                    </Col>                    
                </Col>
                <Col sm={2} className='wings'>
                </Col>
            </Row>
        </>
    )
}

export default Central