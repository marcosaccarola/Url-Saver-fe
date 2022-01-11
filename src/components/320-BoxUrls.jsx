import { useState } from 'react'
import { Button, ButtonGroup, Col, Form, Row } from 'react-bootstrap'
import './000.css'

const BoxUrls=({setUser,selectedGroup})=>{

        //!__________________________________________ POST GROUP
        // const[showPostGroup,setshowPostGroup]=useState(false)
        // const handleshowPostGroup=()=>{
        //     console.log(showPostGroup)
        //     showPostGroup==false?setshowPostGroup(true):setshowPostGroup(false)
        // }
        // const[groupToPost,setgroupToPost]=useState()
        // const handleGroupNamePost=(e)=>{
        //     setgroupToPost(e.target.value)
        // }
        // const addGroup=()=>{
        //     console.log('USER: ',user)
        //     postGroup({"userId":user._id,"groupToAdd":{"name":groupToPost},setUser})
        //     handleshowPostGroup()
        // }
        //!__________________________________________ PUT GROUP
        // const[showPutGroup,setshowPutGroup]=useState(false)
        // const[GroupToPutId,setGroupToPutId]=useState()
        // const handleshowPutGroup=(groupId)=>{
        //     showPutGroup==false?setshowPutGroup(true):setshowPutGroup(false)
        //     setGroupToPutId(groupId)
        // }
        // const[groupToPut,setgroupToPut]=useState()
        // const handleGroupNamePut=(e)=>{
        //     setgroupToPut(e.target.value)
        // }
        // const modifyGroup=()=>{
        //     putGroup({"groupId":GroupToPutId,"userId":user._id,"groupToPut":{"name":groupToPut},setUser})
        //     handleshowPutGroup()
        //     setGroupToPutId()
        //     setgroupToPut()
        // }
        //!__________________________________________ DELETE GROUP
        // const removeGroup=(g)=>{
        //     deleteGroup({"groupId":g._id,"userId":user._id,setUser})
        // }


    return(
        <>
            <ButtonGroup vertical>

                <Col>
                {selectedGroup&&selectedGroup.urls.map(u=>
                    <Col key={u._id}>
                        {/* <Button onClick={()=>removeGroup(u)}>Delete</Button> */}
                        {/* <Button onClick={()=>handleshowPutGroup(u._id)}>Update</Button> */}
                        <Button>{u.name}</Button> 
                    </Col>
                )}
                {/* {showPutGroup==true&&
                            <Form>
                                <Form.Group as={Button} className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="New group name" onChange={(e)=>handleGroupNamePut(e)}/>
                                </Form.Group>
                                <Button onClick={()=>modifyGroup()}>save</Button>
                                <Button onClick={()=>handleshowPutGroup()}>cancel</Button>
                            </Form>
                }            */}
                </Col>

                {/* <Col>
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
                </Col> */}

            </ButtonGroup>
        </>
        // ROWS & COLS
        // <div className='mx-3 my-3 bg-dark text-light'>
        //     {selectedGroup&&selectedGroup.urls.map(u=>
        //         <Row key={u._id}>
        //             <Col sm={12} className='text-start'>
        //                 <span 
        //                     className='container border' 
        //                     onClick={()=>window.open(u.urlString, '_blank')}
        //                     >{u.name}</span>
        //             </Col>
        //         </Row>
        //     )}
        //         <Row>
        //             <Col sm={12} className='text-start'>
        //                 <span className='container text-muted'>add url</span>
        //             </Col>
        //         </Row>
        // </div>
    )
}

export default BoxUrls