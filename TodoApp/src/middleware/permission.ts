export enum permissionTypes{
    userAdd = 1,
    userDelete = 2,
    userShow = 3
}


export const permission12:any = {
    "admin" : [ permissionTypes.userAdd, permissionTypes.userDelete, permissionTypes.userShow],
    "user" : [permissionTypes.userShow]
}

/*if ( permission12["admin"].includes(permissionTypes.userShow)){
    console.log('klsdjkldg');
}*/
