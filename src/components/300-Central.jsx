import { Col, Row } from 'react-bootstrap'
import './000.css'
import BoxGroups from './310-BoxGroups'
import BoxDetails from './320-BoxDetails'
import BoxUrls from './330-BoxUrls'

const Central=({user})=>{

    return(
        <>
            <Row className='central vw-100'>
                <Col sm={1} className='wings'>                    
                </Col>
                <Col sm={10} className='row text-black'>
                    <Col sm={6} className='box-groups'>
                        <BoxGroups user={user} />
                    </Col>
                    <Col sm={6}>
                        <Row className='box-details'>
                            <BoxDetails user={user} />
                        </Row>                         
                        <Row className='box-urls'>
                            <BoxUrls user={user} />
                        </Row>     
                    </Col>                    
                </Col>
                <Col sm={1} className='wings'>
                </Col>
            </Row>
        </>
    )
}

export default Central