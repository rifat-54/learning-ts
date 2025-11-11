
// intersection means where we have to fullfill all condition


type Emplyee={
    id:number,
    name:string,
    PhoneNo:number
}

type Manager={
    designation:string,
    teamSize:number
}

type EmplyeeManager=Emplyee & Manager

const rakib:EmplyeeManager={
    id:12313,
    name:'rakib',
    PhoneNo:234234,
    designation:'manager',
    teamSize:234
}

