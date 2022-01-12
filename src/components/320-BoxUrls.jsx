import { useState } from 'react'
import { Button, ButtonGroup, Col, Form, Row } from 'react-bootstrap'
import { FiDelete } from 'react-icons/fi'
import { RiSettingsLine } from 'react-icons/ri'
import { FaRegSave } from 'react-icons/fa'
import { deleteUrl, postUrl, putUrl } from '../utilities/fetches'
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
        const[showPutUrl,setshowPutUrl]=useState(false)
        const[UrlToPut,setUrlToPut]=useState()
        const handleshowPutUrl=(urlObj)=>{
            showPutUrl==false?setshowPutUrl(true):setshowPutUrl(false)
            setUrlToPut(urlObj)
        }
        const[urlNameToPut,setUrlNameToPut]=useState()
        const handleUrlNamePut=(e)=>{
            setUrlNameToPut(e.target.value)
        }
        const[urlUrlToPut,setUrlUrlToPut]=useState()
        const handleUrlUrlPut=(e)=>{
            setUrlUrlToPut(e.target.value)
        }
        const modifyUrl=()=>{
            putUrl({"groupId":selectedGroup._id,"urlId":UrlToPut.id,"urlToPut":{"name":urlNameToPut,"url":urlUrlToPut},setSelectedGroup})
            handleshowPutUrl()
            setUrlToPut()
            setUrlNameToPut()
            setUrlUrlToPut()
        }
        //!__________________________________________ DELETE URL
        const removeUrl=(u)=>{
            deleteUrl({"groupId":selectedGroup._id,"urlId":u.id,setSelectedGroup})
        }


    return(
        <>
            <ButtonGroup vertical className='container-fluid'>

                {/* <Col> */}
                {selectedGroup&&selectedGroup.urls.map(u=>
                    <Button key={u._id} className='d-flex'>
                        <Button className='ms-auto' onClick={()=>window.open(u.url)}>{u.name}</Button> 
                        <Button onClick={()=>handleshowPutUrl(u)} ><RiSettingsLine className='text-warning' size={20} /></Button>
                        <Button onClick={()=>removeUrl(u)}><FiDelete className='text-danger' size={20} /></Button>
                    </Button>
                )}
                {showPutUrl==true&&
                        <Button>
                            <Form>
                                <Form.Group as={Button} className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder={UrlToPut.name} onChange={(e)=>handleUrlNamePut(e)}/>
                                <Form.Control type="text" placeholder={UrlToPut.url} onChange={(e)=>handleUrlUrlPut(e)}/>
                                </Form.Group>
                                <Button onClick={()=>modifyUrl()}><FaRegSave className='text-warning' size={20} /></Button>
                                <Button onClick={()=>handleshowPutUrl()}><FiDelete className='text-light' size={20} /></Button>
                            </Form>
                        </Button>
                }           
                {/* </Col> */}

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