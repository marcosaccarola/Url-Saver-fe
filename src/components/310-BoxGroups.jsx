import { Col, Row } from 'react-bootstrap'
import './000.css'

const BoxGroups=({user,setSelectedGroup})=>{

    return(
        <div className='mx-3 my-3 bg-dark text-light'>
            {user&&user.groups.map(g=>
                <Row key={g._id}>
                    <Col sm={12} className='text-start'>
                        <span className='container border border-light text-light' onClick={()=>setSelectedGroup(g)}>{g.name}</span>
                    </Col>
                </Row>
            )}
                <Row>
                    <Col sm={12} className='text-start'>
                        <span className='container  text-muted'>add group</span>
                    </Col>
                </Row>
        </div>
    )
}

export default BoxGroups