import {useState} from 'react'
import { Button, ButtonGroup, Col, Form} from 'react-bootstrap'
import { deleteGroup, putGroup, postGroup, getGroup } from '../utilities/fetches'
import './000.css'
import {RiSettingsLine} from 'react-icons/ri'
import {FiDelete} from 'react-icons/fi'
import { FaRegSave } from 'react-icons/fa'

const BoxGroups=({user,setUser,selectedGroup,setSelectedGroup})=>{
    
    //!__________________________________________ GET GROUP
    const loadGroupOfUrls=(g)=>{
        getGroup({"groupId":g._id,setSelectedGroup})
    }
    //!__________________________________________ POST GROUP
    const[showPostGroup,setshowPostGroup]=useState(false)
    const handleshowPostGroup=()=>{
        showPostGroup==false?setshowPostGroup(true):setshowPostGroup(false)
    }
    const[groupToPost,setgroupToPost]=useState()
    const handleGroupNamePost=(e)=>{
        setgroupToPost(e.target.value)
    }
    const addGroup=()=>{
        console.log('USER: ',user)
        postGroup({"userId":user._id,"groupToAdd":{"name":groupToPost},setUser})
        handleshowPostGroup()
    }
    //!__________________________________________ PUT GROUP
    const[showPutGroup,setshowPutGroup]=useState(false)
    const[GroupToPutId,setGroupToPutId]=useState()
    const handleshowPutGroup=(group)=>{
        showPutGroup==false?setshowPutGroup(true):setshowPutGroup(false)
        setGroupToPutId(group._id)
        setSelectedGroup(group)
    }
    const[groupToPut,setgroupToPut]=useState()
    const handleGroupNamePut=(e)=>{
        setgroupToPut(e.target.value)
    }
    const modifyGroup=()=>{
        putGroup({"groupId":GroupToPutId,"userId":user._id,"groupToPut":{"name":groupToPut},setUser})
        handleshowPutGroup()
        setGroupToPutId()
        setgroupToPut()
    }
    //!__________________________________________ DELETE GROUP
    const removeGroup=(g)=>{
        deleteGroup({"groupId":g._id,"userId":user._id,setUser})
    }

    return(
        <>
            <ButtonGroup vertical className='container-fluid'>

        {user&&user.groups.map(g=>
                    <Button key={g._id} className='d-flex' onClick={()=>loadGroupOfUrls(g)}>
                        <Button onClick={()=>removeGroup(g)}><FiDelete className='text-danger' size={20} /></Button>
                        <Button onClick={()=>handleshowPutGroup(g)}><RiSettingsLine className='text-warning' size={20} /></Button>
                        <Button>{g.name}</Button> 
                    </Button>
        )}
        {showPutGroup==true&&
                    <Button>
                        <Form>
                            <Form.Group as={Button} className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder={selectedGroup.name} onChange={(e)=>handleGroupNamePut(e)}/>
                            </Form.Group>
                            <Button onClick={()=>modifyGroup()}><FaRegSave className='text-warning' size={20} /></Button>
                            <Button onClick={()=>handleshowPutGroup()}><FiDelete className='text-danger' size={20} /></Button>
                        </Form>
                    </Button>
        }           


                <Col>
        {showPostGroup==false
        ?
                    <Button onClick={()=>handleshowPostGroup()}>add Group</Button>
        :
                    <Form>
                        <Form.Group as={Button} className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Group name" onChange={(e)=>handleGroupNamePost(e)}/>
                        </Form.Group>
                        <Button onClick={()=>addGroup()}>save</Button>
                        <Button onClick={()=>handleshowPostGroup()}>cancel</Button>
                    </Form>
        }
                </Col>

            </ButtonGroup>

        </>
    )
}

export default BoxGroups