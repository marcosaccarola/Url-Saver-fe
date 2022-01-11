import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './000.css'
import Login from './305-Login'
import BoxGroups from './310-BoxGroups'
import BoxUrls from './320-BoxUrls'

const Central=({user,setUser})=>{
    const[selectedGroup,setSelectedGroup]=useState()

    return(
        <Container fluid>
            <Row className='vw-100'>

                <Col sm={1} className=''>                    
                </Col>

                <Col sm={10}>
                    <Row className='central text-black'>
                    {
                    user
                    ?
                        <>
                        <Col sm={6} className='border border-light overY'>
                            <BoxGroups user={user} setUser={setUser} setSelectedGroup={setSelectedGroup} />
                        </Col>
                        <Col sm={6} className='border border-light overY'>
                            <BoxUrls setUser={setUser} selectedGroup={selectedGroup} />
                        </Col>
                        </>
                    :
                        <Col sm={12} className='bg-light my-auto'>
                            <Login setUser={setUser} />
                        </Col>                  
                    }
                    </Row>
                </Col>

                <Col sm={1} className=''>
                </Col>

            </Row>
        </Container>
    )
}

export default Central