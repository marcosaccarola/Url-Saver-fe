import { useState } from 'react'
import { Button, ButtonGroup, Col, Form, Row } from 'react-bootstrap'
import { deleteUrl, postUrl } from '../utilities/fetches'
import './000.css'

const BoxUrls=({user,setUser,selectedGroup,setSelectedGroup})=>{

        //!__________________________________________ POST URL
        const[showPostUrl,setshowPostUrl]=useState(false)
        const handleshowPostUrl=()=>{
            showPostUrl==false?setshowPostUrl(true):setshowPostUrl(false)
        }
        const[nameToPost,setNameToPost]=useState()
        const handleLinkNameToPost=(e)=>{
            setNameToPost(e.target.value)
        }
        const[urlToPost,setUrlToPost]=useState()
        const handleLinkUrlToPost=(e)=>{
            setUrlToPost(e.target.value)
        }
        const addUrl=()=>{
            // console.log('USER: ',user)
            postUrl({"groupId":selectedGroup._id,"urlToPost":{"name":nameToPost,"url":urlToPost},"userId":user._id,setUser,setSelectedGroup})
            handleshowPostUrl()
        }
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
        //!__________________________________________ DELETE URL
        const removeUrl=(u)=>{
            deleteUrl({"groupId":selectedGroup._id,"urlId":u.id,setSelectedGroup})
        }


    return(
        <>
            <ButtonGroup vertical>

                <Col>
                {selectedGroup&&selectedGroup.urls.map(u=>
                    <Col key={u._id}>
                        <Button onClick={()=>removeUrl(u)}>Delete</Button>
                        {/* <Button onClick={()=>handleshowPutGroup(u._id)}>Update</Button> */}
                        <Button onClick={()=>window.open(u.url)}>{u.name}</Button> 
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

                <Col>
                {showPostUrl==false
                ?
                    <Button onClick={()=>handleshowPostUrl()}>add Url</Button>
                :
                    <Form>
                        <Form.Group as={Button} className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Link name" onChange={(e)=>handleLinkNameToPost(e)}/>
                        <Form.Control type="text" placeholder="Url" onChange={(e)=>handleLinkUrlToPost(e)}/>
                        </Form.Group>
                        <Button onClick={()=>addUrl()}>save</Button>
                        <Button onClick={()=>handleshowPostUrl()}>cancel</Button>
                    </Form>
                }
                </Col>

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