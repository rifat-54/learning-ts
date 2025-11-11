// ata soria setea thaka item gola ke akta array te convert kore. 

// sobgola iteam nea akta array make kore. than we can do array operation on that array


const sendInvite=(...friends:string[])=>{
    friends.forEach((friend:string)=>console.log(`Send invitaion to :: ${friend}`))
}

sendInvite('pintu','cinto','minto','kipto','multo')