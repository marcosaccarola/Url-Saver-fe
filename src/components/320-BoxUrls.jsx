import { useState } from 'react'
import { Button, ButtonGroup, Col, Form } from 'react-bootstrap'
import { MdOutlineOpenInNew } from 'react-icons/md'
import { RiSettingsLine } from 'react-icons/ri'
import { FiDelete } from 'react-icons/fi'
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

        {selectedGroup&&selectedGroup.urls.map(u=>
                    <Button key={u.id} className='d-flex'>
                        <Button className='ms-auto' onClick={()=>window.open(u.url)}>{u.name}<MdOutlineOpenInNew className='text-light ms-5' size={20} /></Button> 
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

        {showPostUrl==false
                ?
                    <Col className='mt-2 ms-auto'>
                        <Button onClick={()=>handleshowPostUrl()}>add Url</Button>
                    </Col>
                :
                    <Button>
                        <Form>
                            <Form.Group as={Button} className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Link name" onChange={(e)=>handleLinkNameToPost(e)}/>
                            <Form.Control type="text" placeholder="Url" onChange={(e)=>handleLinkUrlToPost(e)}/>
                            </Form.Group>
                            <Button onClick={()=>addUrl()}><FaRegSave className='text-warning' size={20} /></Button>
                            <Button onClick={()=>handleshowPostUrl()}><FiDelete className='text-danger' size={20} /></Button>
                        </Form>
                    </Button>
        }

            </ButtonGroup>
        </>
    )
}

export default BoxUrls