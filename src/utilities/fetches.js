const USER_URL='http://localhost:3000/user'

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