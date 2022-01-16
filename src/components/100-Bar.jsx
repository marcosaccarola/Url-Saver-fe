import { Container, Navbar, NavDropdown} from 'react-bootstrap'
import './000.css'
import { FiUserCheck } from "react-icons/fi"
import {AiFillContainer} from 'react-icons/ai'

const Bar=({user,setUser})=>{

    return(
        <>

            <Navbar bg="light" variant="" >
                <Container>
                    <Navbar.Brand className='text-primary'>
                        <AiFillContainer size={40} className='me-3' />
                        Urls Containers
                    </Navbar.Brand>
                {
                user
                ?
                <>
                    <Navbar.Brand href="" className='d-flex align-items-center text-primary'>
                        {user.email}
                        <NavDropdown title={user.email,<FiUserCheck size={40} className='text-primary' />} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                        </NavDropdown>
                        {/* <FiUserCheck size={40} className='ms-3' /> */}
                    </Navbar.Brand>
                </>
                :
                    <Navbar.Brand className='text-danger'>
                        Login or Signin
                        <FiUserCheck size={40} className='ms-3'/>
                    </Navbar.Brand>
                }
                </Container>
            </Navbar>

        </>
    )
}

export default Bar