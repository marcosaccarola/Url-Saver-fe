import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"

const Login=()=>{
    const[email,setEmail]=useState()
    const[pw,setPw]=useState()

    return(
        <Row className='justify-content-center'>
            <Col sm={6}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Row>
                        <Col sm={6}>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Col>
                        <Col sm={6}>
                            <Button variant="primary" type="submit">
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