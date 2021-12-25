import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './000.css'
import BoxGroups from './310-BoxGroups'
import BoxUrls from './320-BoxUrls'

const Central=({user})=>{
    const[selectedGroup,setSelectedGroup]=useState()

    return(
            <Row className='vw-100'>

                <Col sm={1} className='wings'>                    
                </Col>

                <Col sm={10}>
                    <Row className='central text-black'>
                        <Col sm={6} className='box-groups overY'>
                            <BoxGroups user={user} setSelectedGroup={setSelectedGroup} />
                        </Col>
                        <Col sm={6} className='box-urls overY'>
                            <BoxUrls selectedGroup={selectedGroup} />
                        </Col>                    
                    </Row>
                </Col>

                <Col sm={1} className='wings'>
                </Col>

            </Row>
    )
}

export default Central