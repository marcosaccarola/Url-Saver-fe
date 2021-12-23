import { Col, Row } from 'react-bootstrap'
import './000.css'

const BoxDetails=({user,selectedGroup,selectedUrl})=>{

    return(
        <div className='mx-3 my-3 bg-dark text-light '>
            {user&&user.groups.map(g=>
                <Row>
                    <Col sm={12} className='text-start'>
                        <span className='container border border-info'>{g.groupName}</span>
                    </Col>
                </Row>
            )}
        </div>
    )
}

export default BoxDetails