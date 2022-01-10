import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap'
import './000.css'
import logo from '../assets/logo.png'
import { BsQuestionLg } from "react-icons/bs"
import { FiUserCheck } from "react-icons/fi"
import {AiFillContainer} from 'react-icons/ai'

const Bar=({user,setUser})=>{

    return(
        <>

            {/* REACT-BOOTSTRAP */}
            <Navbar bg="warning" variant="">
                <Container>
                    <Navbar.Brand href="#home">
                        <AiFillContainer size={40} className='me-3' />
                        Urls Containers
                    </Navbar.Brand>    
                    <Nav className="">
                        {/* 
                        <Nav.Link href="#features">?</Nav.Link>
                        */}
                    </Nav>
                {
                user
                ?
                    <Navbar.Brand href="#home">
                        {user.email}
                        <FiUserCheck size={40} className='ms-3' />
                    </Navbar.Brand>
                :
                    <Navbar.Brand href="#home" className='text-danger'>
                        Login or Signin
                        <FiUserCheck size={40} className='ms-3'/>
                    </Navbar.Brand>
                }
                </Container>
            </Navbar>

            
            {/* ROWS & COLS
            <Row className='bar bg-warning vw-100 align-items-center'>
                <Col sm={3}>
                    <Container>
                        <img className='img-fluid bar bg-warning' src={logo}/>
                        <span className=''>Urls Container</span>
                    </Container>
                </Col>
                <Col sm={6}>
                    <BsQuestionLg />
                </Col>
                <Col sm={3}>
                    {
                        user&&user.avatar&&
                        <img className='img-fluid bar bg-warning' src={user.avatar} />
                    }
                </Col>
            </Row>
            */}

        </>
    )
}

export default Bar