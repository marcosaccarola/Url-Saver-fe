import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { login, register } from "../utilities/fetches"
import { FcGoogle } from 'react-icons/fc'

const Login=({setUser})=>{
    const[isUserRegistered,setisUserRegistered]=useState(true)
    const handleSetIsUserRegistered=()=>{
        isUserRegistered==true?setisUserRegistered(false):setisUserRegistered(true)
    }
    const[email,setEmail]=useState()
    const[pw,setPw]=useState()
    const loginUser=(e)=>{
        e.preventDefault()
        login({email,pw,setUser})
    }
    const registerUser=(e)=>{
        e.preventDefault()
        register({email,pw,setUser})
    }
    
    return(
        <Row className='justify-content-center text-light'>
            <Col sm={6}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Login with email</Form.Label>
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPw(e.target.value)} />
                    </Form.Group>

        {isUserRegistered==true
                ?
                    <>
                    <Form.Text className="text-muted hover" onClick={handleSetIsUserRegistered}>
                        Are you not registered yet? Click here to sign in.
                    </Form.Text>

                    <Form.Group>
                        <Button variant="primary" type="submit" className='mt-2' onClick={(e)=>loginUser(e)}>
                            Login
                        </Button>
                    </Form.Group>
                    </>
                :
                    <>
                    <Form.Group>
                        <Button variant="success" type="submit" onClick={(e)=>registerUser(e)}>
                            Signin
                        </Button>
                    </Form.Group>

                    <Form.Text className="text-muted hover" onClick={handleSetIsUserRegistered}>
                        Are you registered? Back to login page.
                    </Form.Text>
                    </>
        }
                </Form>
                
                <div className='mt-5 d-grid gap-2'>
                    <Button className='btn-dark border border-light'>Login with <FcGoogle className='' size={20} />oogle</Button>
                </div>

            </Col>
        </Row>
    )
}

export default Login