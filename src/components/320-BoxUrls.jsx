import { Col, Row } from 'react-bootstrap'
import './000.css'

const BoxUrls=({selectedGroup})=>{

    return(
        <div className='mx-3 my-3 bg-dark text-light'>
                <Row>
                    <Col sm={12} className='text-start'>
                        <span className='container border border-info text-info'>add url</span>
                    </Col>
                </Row>
            {selectedGroup&&selectedGroup.urls.map(u=>
                <Row key={u._id}>
                    <Col sm={12} className='text-start'>
                        <span className='container border border-info' onClick={()=>window.open(u.urlString, '_blank')}>{u.urlName}</span>
                    </Col>
                </Row>
            )}
        </div>
    )
}

export default BoxUrls