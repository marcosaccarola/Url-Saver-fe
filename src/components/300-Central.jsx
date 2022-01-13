import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './000.css'
import Login from './305-Login'
import BoxGroups from './310-BoxGroups'
import BoxUrls from './320-BoxUrls'

const Central=({user,setUser})=>{
    const[selectedGroup,setSelectedGroup]=useState()

    return(
        <Container fluid className='row'>

                <Col sm={1} className=''>                    
                </Col>

                <Col sm={10}>
                    <Row className='central text-black'>
                    {
                    user
                    ?
                        <>
                        <Col sm={6} className=' overY'>
                            <BoxGroups user={user} setUser={setUser} selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />
                        </Col>
                        <Col sm={6} className=' overY'>
                            <BoxUrls user={user} setUser={setUser} selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />
                        </Col>
                        </>
                    :
                        <Col sm={12} className='my-auto'>
                            <Login setUser={setUser} />
                        </Col>                  
                    }
                    </Row>
                </Col>

                <Col sm={1} className=''>
                </Col>

        </Container>
    )
}

export default Central