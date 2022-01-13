import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { login, register } from "../utilities/fetches"

const Login=({setUser})=>{
    const[isUserRegistered,setisUserRegistered]=useState(true)
    const handleSetIsUserRegistered=()=>{
        isUserRegistered==true?setisUserRegistered(false):setisUserRegistered(true)
    }
    const[email,setEmail]=useState()
    const[pw,setPw]=useState()
    const loginUser=()=>{
        login({email,pw,setUser})
    }
    const registerUser=()=>{
        register({email,pw,setUser})
    }
    
    return(
        <Row className='justify-content-center text-light'>
            <Col sm={6}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPw(e.target.value)} />
                    </Form.Group>

        {isUserRegistered==true
                ?
                    <>
                    <Form.Group>
                        <Button variant="primary" type="submit" onClick={loginUser}>
                            Login
                        </Button>
                    </Form.Group>

                    <Form.Text className="text-muted hover" onClick={handleSetIsUserRegistered}>
                        Are you not registered yet? Click here to sign in.
                    </Form.Text>
                    </>
                :
                    <>
                    <Form.Group>
                        <Button variant="success" type="submit" onClick={registerUser}>
                            Signin
                        </Button>
                    </Form.Group>

                    <Form.Text className="text-muted hover" onClick={handleSetIsUserRegistered}>
                        Are you registered? Back to login page.
                    </Form.Text>
                    </>
        }
                </Form>
            </Col>
        </Row>
    )
}

export default Login