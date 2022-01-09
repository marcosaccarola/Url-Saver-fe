import { useState } from 'react'
import './000.css'
import Bar from './100-Bar'
import ControlsAbove from './200-ControlsAbove'
import Central from './300-Central'
import ControlsBelow from './400-ControlsBelow'

const Home=()=>{
    const[user,setUser]=useState()

    return(
        <>
            <Bar user={user} />
            <ControlsAbove />
            <Central user={user} setUser={setUser} />
            <ControlsBelow />
        </>
    )
}

export default Home