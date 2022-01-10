import { Col, Row } from 'react-bootstrap'
import './000.css'

const BoxUrls=({selectedGroup})=>{

    return(
        <div className='mx-3 my-3 bg-dark text-light'>
            {selectedGroup&&selectedGroup.urls.map(u=>
                <Row key={u._id}>
                    <Col sm={12} className='text-start'>
                        <span 
                            className='container border' 
                            onClick={()=>window.open(u.urlString, '_blank')}
                            >{u.name}</span>
                    </Col>
                </Row>
            )}
                <Row>
                    <Col sm={12} className='text-start'>
                        <span className='container text-muted'>add url</span>
                    </Col>
                </Row>
        </div>
    )
}

export default BoxUrls