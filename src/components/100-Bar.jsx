import { Col, Container, Image, Navbar, Row } from 'react-bootstrap'
import './000.css'
import logo from '../assets/logo.png'
import { BsQuestionLg } from "react-icons/bs"

const Bar=({user,setUser})=>{

    return(
        <>
        <Navbar bg="warning" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                Urls Containers
                </Navbar.Brand>
            </Container>
        </Navbar>

            {/* <Row className='bar bg-warning vw-100 align-items-center'>
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
            </Row> */}
        </>
    )
}

export default Bar