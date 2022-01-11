const USER_URL='http://localhost:3001/user'
const GROUP_URL='http://localhost:3001/group'

//*______________________________________________ REGISTER
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
//*______________________________________________ LOGIN
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
//*______________________________________________ ADD GROUP
export const postGroup=async({userId,groupToAdd,setSelectedGroup})=>{
    try {
        const responsePostGroup=await fetch(GROUP_URL+`/${userId}`,
                {
                    method:'POST',
                    body:JSON.stringify({groupToAdd}),
                    headers:{'Content-Type':'application/json'}
                }
            )
            if(responsePostGroup.ok){
                let newGroup=await responsePostGroup.json()
                setSelectedGroup(newGroup)
                console.log(newGroup)
            }else{
                console.log('Group not added')
            }
    } catch (error) {
        throw error
    }
}