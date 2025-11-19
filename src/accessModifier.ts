class BankAccount{
    readonly userId:number;
    userName:string;
    //* private is only access inside that class
//    private userBalance:number;   
       protected userBalance :number  //* protected is accessable on that class and if have any child class. like here => studentAccount


    constructor(userId:number,userName:string,userBalance:number){
        this.userId=userId;
        this.userName=userName;
        this.userBalance=userBalance;
    }

    addBalance(balance:number){
        this.userBalance=this.userBalance+balance;
    }
}


class StudentAccount extends BankAccount{
    test(){
        this.userBalance=this.userBalance+10;
    }
}


const rakib=new BankAccount(222,'rakib',3)  //* it called instance

// rakib.userId=4324;
rakib.addBalance(20)

console.log(rakib);
