import { Dropdown } from 'bootstrap'
import {useState} from 'react'
import { Button, ButtonGroup, Col, DropdownButton, Form, Modal, Row } from 'react-bootstrap'
import { postGroup } from '../utilities/fetches'
import './000.css'

const BoxGroups=({user,setSelectedGroup})=>{
    const[showGroupModal,setShowGroupModal]=useState(false)
    const handleShowGroupModal=()=>{
        console.log(showGroupModal)
        showGroupModal==false?setShowGroupModal(true):setShowGroupModal(false)
    }

    const[newGroupName,setNewGroupName]=useState()
    const handleGroupName=(e)=>{
        setNewGroupName(e.target.value)
    }
    
    const addGroup=()=>{
        postGroup({"userId":user._id,"groupToAdd":{"name":newGroupName},setSelectedGroup})
    }

    return(
        // <div className='mx-3 my-3 bg-dark text-light'>
            <>

            {/* ROWS & COLS
            {user&&user.groups.map(g=>
                <Row key={g._id}>
                    <Col sm={12} className='text-start'>
                        <span 
                            className='container border border-light text-light' 
                            onClick={()=>setSelectedGroup(g)}
                            >{g.name}</span>
                    </Col>
                </Row>
            )}
                <Row>
                    <Col sm={12} className='text-start'>
                        <span 
                            className='container text-muted'
                            onClick={()=>addContainer()}>add group</span>
                    </Col>
                </Row> */}

            {/* BUTTON GROUP */}
            <ButtonGroup vertical>

            {user&&user.groups.map(g=>
                <Button key={g._id} onClick={()=>setSelectedGroup(g)}>{g.name}</Button>
            )}

            {showGroupModal==false
            ?
                <Button onClick={()=>handleShowGroupModal()}>add Group</Button>
            :
                <Form>
                    <Form.Group as={Button} className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Group name" onChange={(e)=>handleGroupName(e)}/>
                    </Form.Group>
                    <Button onClick={()=>addGroup()}>save</Button>
                    <Button onClick={()=>handleShowGroupModal()}>cancel</Button>
                </Form>
            }

            </ButtonGroup>
            

        </>
        // </div>
    )
}

export default BoxGroups