class BankAccount{
  consructor(owner, balance = 0){
    this.owner = owner;
    this.balance = balance;}

deposit(amount){
if(amount > 0){
     this.balance += amount;
     console.log(`${yhis.balance}`);
  }
else console.log('deposit amount must be positive');
}
withdraw(amount){
  if(amount <= this.balance){
    this.balance -= amount;
    console.log(`${this.balance}`);
   }
    else console.log('Insufficient funds');
}
 print_final_balance(){
   console.log(`${this.owner}s balance is ${balance}`);

 }
  }
const account = new BankAccount("Liana",100);
      account.deposit(50);
      account.withdraw(30);
      account.print_final_balance();
