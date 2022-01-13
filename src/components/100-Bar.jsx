import { Container, Navbar} from 'react-bootstrap'
import './000.css'
import { FiUserCheck } from "react-icons/fi"
import {AiFillContainer} from 'react-icons/ai'

const Bar=({user,setUser})=>{

    return(
        <>

            <Navbar bg="light" variant="" >
                <Container>
                    <Navbar.Brand href="#home">
                        <AiFillContainer size={40} className='me-3' />
                        Urls Containers
                    </Navbar.Brand>
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

        </>
    )
}

export default Bar