import { useState } from 'react'
import './000.css'
import Bar from './100-Bar'
import ControlsAbove from './200-ControlsAbove'
import Central from './300-Central'
import ControlsBelow from './400-ControlsBelow'

const Home=()=>{
    const[user,setUser]=useState(
        // {
        //     "_id":"1",
        //     "user":"Marco",
        //     "email":"marco@gmail.com",
        //     "pw":"1234",
        //     "avatar":"https://images.unsplash.com/photo-1599598425947-5202edd56bdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        //     "groups":[
        //         {
        //             "groupName":"org",
        //             "groupNumber":1,
        //             "groupColor":2,
        //             "groupDetailsTitle":"Organization",
        //             "groupDetailsText":"Here I put my basic urls like: calendar, email, gdrive",
        //             "urls":[
        //                 {
        //                     "urlName":"marco.saccarola.dev@gmail.com",
        //                     "urlString":"https://mail.google.com/mail/u/1/#inbox",
        //                     "urlNumber":1,
        //                     "urlDetailsTitle":"Gmail",
        //                     "urlDetails":"Developer email"
        //                 },
        //                 {
        //                     "urlName":"google",
        //                     "urlString":"https://www.google.it/",
        //                     "urlNumber":1,
        //                     "urlDetailsTitle":"Gmail",
        //                     "urlDetails":"Developer email"
        //                 },
        //                 {
        //                     "urlName":"Ansa",
        //                     "urlString":"https://www.ansa.it/",
        //                     "urlNumber":1,
        //                     "urlDetailsTitle":"Gmail",
        //                     "urlDetails":"Developer email"
        //                 },
        //                 {
        //                     "urlName":"marco.saccarola.dev@gmail.com",
        //                     "urlString":"https://mail.google.com/mail/u/1/#inbox",
        //                     "urlNumber":1,
        //                     "urlDetailsTitle":"Gmail",
        //                     "urlDetails":"Developer email"
        //                 },
        //                 {
        //                     "urlName":"google",
        //                     "urlString":"https://www.google.it/",
        //                     "urlNumber":1,
        //                     "urlDetailsTitle":"Gmail",
        //                     "urlDetails":"Developer email"
        //                 },
        //                 {
        //                     "urlName":"Ansa",
        //                     "urlString":"https://www.ansa.it/",
        //                     "urlNumber":1,
        //                     "urlDetailsTitle":"Gmail",
        //                     "urlDetails":"Developer email"
        //                 },
        //                 {
        //                     "urlName":"marco.saccarola.dev@gmail.com",
        //                     "urlString":"https://mail.google.com/mail/u/1/#inbox",
        //                     "urlNumber":1,
        //                     "urlDetailsTitle":"Gmail",
        //                     "urlDetails":"Developer email"
        //                 },
        //                 {
        //                     "urlName":"google",
        //                     "urlString":"https://www.google.it/",
        //                     "urlNumber":1,
        //                     "urlDetailsTitle":"Gmail",
        //                     "urlDetails":"Developer email"
        //                 },
        //                 {
        //                     "urlName":"Ansa",
        //                     "urlString":"https://www.ansa.it/",
        //                     "urlNumber":1,
        //                     "urlDetailsTitle":"Gmail",
        //                     "urlDetails":"Developer email"
        //                 },
        //                 {
        //                     "urlName":"marco.saccarola.dev@gmail.com",
        //                     "urlString":"https://mail.google.com/mail/u/1/#inbox",
        //                     "urlNumber":1,
        //                     "urlDetailsTitle":"Gmail",
        //                     "urlDetails":"Developer email"
        //                 },
        //                 {
        //                     "urlName":"google",
        //                     "urlString":"https://www.google.it/",
        //                     "urlNumber":1,
        //                     "urlDetailsTitle":"Gmail",
        //                     "urlDetails":"Developer email"
        //                 },
        //                 {
        //                     "urlName":"Ansa",
        //                     "urlString":"https://www.ansa.it/",
        //                     "urlNumber":1,
        //                     "urlDetailsTitle":"Gmail",
        //                     "urlDetails":"Developer email"
        //                 },
        //                 {
        //                     "urlName":"marco.saccarola.dev@gmail.com",
        //                     "urlString":"https://mail.google.com/mail/u/1/#inbox",
        //                     "urlNumber":1,
        //                     "urlDetailsTitle":"Gmail",
        //                     "urlDetails":"Developer email"
        //                 },
        //                 {
        //                     "urlName":"google",
        //                     "urlString":"https://www.google.it/",
        //                     "urlNumber":1,
        //                     "urlDetailsTitle":"Gmail",
        //                     "urlDetails":"Developer email"
        //                 },
        //                 {
        //                     "urlName":"Ansa",
        //                     "urlString":"https://www.ansa.it/",
        //                     "urlNumber":1,
        //                     "urlDetailsTitle":"Gmail",
        //                     "urlDetails":"Developer email"
        //                 },
        //                 {
        //                     "urlName":"marco.saccarola.dev@gmail.com",
        //                     "urlString":"https://mail.google.com/mail/u/1/#inbox",
        //                     "urlNumber":1,
        //                     "urlDetailsTitle":"Gmail",
        //                     "urlDetails":"Developer email"
        //                 },
        //                 {
        //                     "urlName":"google",
        //                     "urlString":"https://www.google.it/",
        //                     "urlNumber":1,
        //                     "urlDetailsTitle":"Gmail",
        //                     "urlDetails":"Developer email"
        //                 },
        //                 {
        //                     "urlName":"Ansa",
        //                     "urlString":"https://www.ansa.it/",
        //                     "urlNumber":1,
        //                     "urlDetailsTitle":"Gmail",
        //                     "urlDetails":"Developer email"
        //                 },
        //             ]
        //         }
        //     ]
        // }
    )

    return(
        <>
            <Bar user={user} setUser={setUser} />
            <ControlsAbove />
            <Central user={user} />
            <ControlsBelow />
        </>
    )
}

export default Home