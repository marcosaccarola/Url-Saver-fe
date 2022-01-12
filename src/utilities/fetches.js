const USER_URL='http://localhost:3001/user'
const GROUP_URL='http://localhost:3001/group'
const URL_URL='http://localhost:3001/url'

//*______________________________________________ REGISTER USER
export const register=async({email,pw,setUser})=>{
    try {
        const responseRegister=await fetch(USER_URL,
            {
                method:'POST',
                body:JSON.stringify({email,pw}),
                headers:{'Content-Type':'application/json'}
            })
            if(responseRegister.ok){
                let user=await responseRegister.json()
                setUser(user)
                console.log(user)
            }else{
                console.log('User not found.')
            }
    } catch (error) {
        throw error
    }
}
//*______________________________________________ LOGIN USER
export const login=async({email,pw,setUser})=>{
    try {
        const responseUser=await fetch(USER_URL+'/login',
            {
                method:'POST',
                body:JSON.stringify({email,pw}),
                headers:{'Content-Type':'application/json'}
            })
            if(responseUser.ok){
                let user=await responseUser.json()
                setUser(user)
                console.log(user)
            }else{
                console.log('User not found.')
            }
    } catch (error) {
        throw error
    }
}
//*______________________________________________ GET GROUP
// export const getGroup=async({groupId})=>{
//     try {
//         const responseGetGroup=await fetch(GROUP_URL+`/${groupId}`,
//             {
//                 method:'GET'
//             }
//         )
//         if(responseGetGroup.ok){
//             let group=await responseGetGroup.json()
//             setSelectedGroup(group)
//         }else{
//             console.log('Group not getted')
//         }
//     } catch (error) {
//         throw error
//     }
// }
//*______________________________________________ POST GROUP
export const postGroup=async({userId,groupToAdd,setUser})=>{
    try {
        const responsePostGroup=await fetch(GROUP_URL+`/${userId}`,
                {
                    method:'POST',
                    body:JSON.stringify(groupToAdd),
                    headers:{'Content-Type':'application/json'}
                }
            )
            if(responsePostGroup.ok){
                let updatedUser=await responsePostGroup.json()
                setUser(updatedUser)
            }else{
                console.log('Group not added')
            }
    } catch (error) {
        throw error
    }
}
//*______________________________________________ PUT GROUP
export const putGroup=async({groupId,userId,groupToPut,setUser})=>{
    try {
        const responsePutGroup=await fetch(GROUP_URL+`/${groupId}/${userId}`,
                {
                    method:'PUT',
                    body:JSON.stringify(groupToPut),
                    headers:{'Content-Type':'application/json'}
                }
            )
            if(responsePutGroup.ok){
                let updatedUser=await responsePutGroup.json()
                setUser(updatedUser)
            }else{
                console.log('Group not updated')
            }
    } catch (error) {
        throw error
    }
}
//*______________________________________________ DELETE GROUP
export const deleteGroup=async({groupId,userId,setUser})=>{
    try {
        const responseDeleteGroup=await fetch(GROUP_URL+`/${groupId}`+`/${userId}`,
            {
                method:'DELETE'
            }
        )
        if(responseDeleteGroup.ok){
            let updatedUser=await responseDeleteGroup.json()
            setUser(updatedUser)
        }else{
            console.log('Group not deleted')
        }
    } catch (error) {
        throw error
    }
}
//*______________________________________________ POST URL
export const postUrl=async({groupId,urlToPost,userId,setUser,setSelectedGroup})=>{
    try {
        const responsePostUrl=await fetch(URL_URL+`/${groupId}/${userId}`,
        {
            method:'POST',
            body:JSON.stringify(urlToPost),
            headers:{'Content-Type':'application/json'}
        }
        )
        if(responsePostUrl.ok){
            let updatedGroup=await responsePostUrl.json()
            setSelectedGroup(updatedGroup)
        }else{
            console.log('Url not added')
        }
    } catch (error) {
        throw error
    }
}
//*______________________________________________ DELETE URL
export const deleteUrl=async({groupId,urlId,setSelectedGroup})=>{
    console.log(groupId,urlId)
    try {
        const responseDeleteUrl=await fetch(URL_URL+`/${groupId}/${urlId}`,
            {
                method:'DELETE',
            }
        )
        if(responseDeleteUrl.ok){
            let updatedGroup=await responseDeleteUrl.json()
            setSelectedGroup(updatedGroup)
            console.log('UPDATED GROUP:',updatedGroup)
        }else{
            console.log('Url not deleted')
        }
    } catch (error) {
        throw error
    }
}