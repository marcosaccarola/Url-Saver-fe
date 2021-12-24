import { Col, Row } from 'react-bootstrap'
import './000.css'

const BoxUrls=({selectedGroup})=>{

    return(
        <div className='mx-3 my-3 bg-dark text-light '>
            {selectedGroup&&selectedGroup.urls.map(u=>
                <Row>
                    <Col sm={12} className='text-start'>
                        <span className='container border border-info'>{u.urlName}</span>
                    </Col>
                </Row>
            )}
        </div>
    )
}

export default BoxUrls