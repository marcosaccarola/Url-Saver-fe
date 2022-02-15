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
        setshowPutGroup(false)
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
        setshowPostGroup(false)
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

{/* MAP OF CONTAINERS */}
        {user&&user.groups.map(g=>
                <>
                    <Button key={g._id} className='d-flex' onClick={()=>loadGroupOfUrls(g)}>
                        <Button onClick={()=>removeGroup(g)}><FiDelete className='text-danger' size={20} /></Button>
                        <Button onClick={()=>handleshowPutGroup(g)}><RiSettingsLine className='text-warning' size={20} /></Button>
                        <Button className='px-4 btn-containerName' >{g.name}</Button> 
                    </Button>
                </>
        )}

{/* UPDATE CONTAINER FORM */}
        {showPutGroup==true&&
                <>
                    <Button>
                        <Form>
                            <Form.Group as={Button} className="mb-3" controlId="formBasicEmail" className='btn-containerName container'>
                                <Form.Control type="text" placeholder={selectedGroup.name} onChange={(e)=>handleGroupNamePut(e)} />
                            </Form.Group>
                        </Form>
                    </Button>
                    <Col className='mt-2'>
                        <Button onClick={()=>handleshowPutGroup()} className=''>cancel</Button>
                        <Button onClick={()=>modifyGroup()} className=''>Modify</Button>
                    </Col>
                </>
        }           

{/* ADD CONTAINER FORM */}
        {showPostGroup==true&&  
                <>
                    <Button>
                        <Form className='d-flex'>
                            <Form.Group as={Button} controlId="formBasicEmail" className='btn-containerName container'>
                                <Form.Control type="text" placeholder="Group name" onChange={(e)=>handleGroupNamePost(e)}/>
                            </Form.Group>
                        </Form>
                    </Button>
                    <Col className='mt-2'>
                        <Button onClick={()=>handleshowPostGroup()} className=''>cancel</Button>
                        <Button onClick={()=>addGroup()} className=''>Save</Button>
                    </Col>
                </>
        }

{/* ADD CONTAINER BUTTON */}
        {showPutGroup===false&&showPostGroup===false&&
                    <Col className='mt-2'>
                        <Button onClick={()=>handleshowPostGroup()}>add Container</Button>
                    </Col>
        }

            </ButtonGroup>
        </>
    )
}

export default BoxGroups