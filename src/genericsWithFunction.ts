
const createObjWithString=(value:string)=> [value]
const createObjWithNumber=(value:number)=>[value]

const createObjWithObject=(value:{id:number,name:string})=>{
    return [value]
}


const aryString=createObjWithString('new')
const aryNum=createObjWithNumber(2134)

const aryObject=createObjWithObject({id:234,name:'rifat'})


// use generics
const creteArrayWithGenerics=<T>(value:T)=>{
    return [value]
}


creteArrayWithGenerics(334)
creteArrayWithGenerics('sdf')
creteArrayWithGenerics({id:2314,name:'sdf'})

const aryWithTuple=(param1:string,params2:{id:number,name:string})=>{
    return [param1,params2]
}


const aryWithTupleUseGeneric=<X,Y>(params1:X,params2:Y)=>{
    return [params1,params2]
}

aryWithTupleUseGeneric(2342,'sdf')
aryWithTupleUseGeneric('sdf',34)
aryWithTupleUseGeneric(3424,234)
aryWithTupleUseGeneric('sdf','sdf')
aryWithTupleUseGeneric('sfkj',{id:234,name:'rifat',PhoneNo:234})


const student1={
    id:234,
    name:'rifat',
    haspen:true
}

const student2={
    id:352,
    name:'sakib',
    isMarid:true,
    salary:234
}

type Student={
    id:number,
    name:string,
    dateOfBirth:string
}

const addStudentToCourse=<T extends Student>(studentInfo:T)=>{
    return {
        course:'next level',
        ...studentInfo
    }
}

//! extends here make compolsury that value => id, name and date

const student3={
    hasWatch:true,
    id:234,
    name:'newman',
    dateOfBirth:'2 february 2020'
}

// const stud1=addStudentToCourse(student1)
// const stud2=addStudentToCourse(student2)
const stud3=addStudentToCourse(student3)

console.log(stud3);