// type UserRole='Admin' | 'Editor' |'Viewer'
var UserRole = {
    Admin: 'Admin',
    Editor: "Editor",
    Viewer: "Viewer"
};
/*
 
typeof(UserRole)  //! run time a keyof operator ata ke type a covert kore

type UserRole={
Admin="Admin",
Editor="Editor",
Viewer="Viewer"
}

keyof UserRole="Admin" |"Editor" | "Viewer"
 


*/
var canEdit = function (role) {
    if (role === UserRole.Admin || role === UserRole.Viewer) {
        return true;
    }
    else {
        return false;
    }
};
var result = canEdit(UserRole.Admin);
console.log(result);
