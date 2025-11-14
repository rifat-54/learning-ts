// type UserRole='Admin' | 'Editor' |'Viewer'
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["Editor"] = "Editor";
    UserRole["Viewer"] = "Viewer";
})(UserRole || (UserRole = {}));
var canEdit = function (role) {
    if (role === UserRole.Admin || role === UserRole.Viewer) {
        return true;
    }
    else {
        return false;
    }
};
var result = canEdit(UserRole.Admin);
