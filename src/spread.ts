
const friends=['rakib','sakib']

const schoolFriends=['raju','kaju','faju']

const collegeFriends=['sarwar','abid']

friends.push(...schoolFriends);
friends.push(...collegeFriends);
console.log(friends);


// spread use in class

const user={
    name:'new client',
    age:23
}

const otherInfo={
    address:'dhaka',
    phone:'021312343'
}

const userInfo={...user,...otherInfo}
console.log(userInfo);

