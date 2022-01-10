import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { login, register } from "../utilities/fetches"

const Login=({setUser})=>{
    const[email,setEmail]=useState()
    const[pw,setPw]=useState()
    const loginUser=()=>{
        // login({email,pw,setUser})
        console.log({email,pw})
    }
    const registerUser=()=>{
        register({email,pw,setUser})
    }
    
    return(
        <Row className='justify-content-center'>
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

                    <Row>
                        <Col sm={6}>
                            <Button variant="primary" type="submit" onClick={loginUser}>
                                Login
                            </Button>
                        </Col>
                        <Col sm={6}>
                            <Button variant="primary" type="submit" onClick={registerUser}>
                                Signin
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

export default Login