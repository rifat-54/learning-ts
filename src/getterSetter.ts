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

    // addBalance(balance:number){
    //     this.userBalance=this.userBalance+balance;
    // }

    //* add valance useing setter

    set addBalance(amount:number){
        this.userBalance=this.userBalance+amount;
    }

    // getBalance(){
    //     return this.userBalance;
    // }

    //* get value useing getter

    get checkBalance(){
       return this.userBalance;
    }
}





const rakib=new BankAccount(222,'rakib',3)  //* it called instance

// rakib.userId=4324;
// rakib.addBalance(20)

rakib.addBalance=20
rakib.addBalance=10

console.log(rakib.checkBalance);
