
// type UserRole='Admin' | 'Editor' |'Viewer'

enum UserRole{
    Admin='Admin',
    Editor="Editor",
    Viewer="Viewer"
}

const canEdit=(role:UserRole)=>{
    if(role===UserRole.Admin || role===UserRole.Viewer){
        return true;
    }else{
        return false;
    }
}

const result=canEdit(UserRole.Admin)