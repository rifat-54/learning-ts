//uniion means where if only condition is true. than code run 

type IsAdmin='admin' | 'user'

const isAdmin=(user:IsAdmin)=>{
    if(user==='admin'){
        return 'Admin Dashboard'
    }else if(user==='user'){
        return 'User Dashboard'
    }else{
        return 'Guest Dashboard'
    }
}

isAdmin("admin")