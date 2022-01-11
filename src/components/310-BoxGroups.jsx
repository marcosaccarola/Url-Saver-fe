import { Dropdown } from 'bootstrap'
import {useState} from 'react'
import { Button, ButtonGroup, Col, DropdownButton, Row } from 'react-bootstrap'
import { postGroup } from '../utilities/fetches'
import './000.css'

const BoxGroups=({user,setSelectedGroup})=>{
    const[newGroupName,setNewGroupName]=useState()

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

                <Button onClick={()=>addGroup()}>add Group</Button>

            </ButtonGroup>

        </>
        // </div>
    )
}

export default BoxGroups