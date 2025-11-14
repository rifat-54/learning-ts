
// type UserRole='Admin' | 'Editor' |'Viewer'

const UserRole={
    Admin:'Admin',
    Editor:"Editor",
    Viewer:"Viewer"
}as const;


/*
 
typeof(UserRole)  //! run time a keyof operator ata ke type a covert kore


type UserRole={
Admin="Admin",
Editor="Editor",
Viewer="Viewer"
}

keyof UserRole="Admin" |"Editor" | "Viewer"
 


*/



// const canEdit=(role:keyof typeof UserRole)=>{
//     if(role===UserRole.Admin || role===UserRole.Viewer){
//         return true;
//     }else{
//         return false;
//     }
// }

const canEdit=(role:typeof UserRole[keyof typeof UserRole])=>{
    if(role===UserRole.Admin || role===UserRole.Viewer){
        return true;
    }else{
        return false;
    }
}

const result=canEdit(UserRole.Admin)
console.log(result);