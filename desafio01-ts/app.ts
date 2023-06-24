import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
console.log(peopleAccount);
peopleAccount.deposit(100);
peopleAccount.getBalance();
peopleAccount.withdraw(50);
peopleAccount.getBalance();

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
console.log(companyAccount);
companyAccount.deposit(200);
companyAccount.getBalance();
companyAccount.getLoan(500);
companyAccount.getBalance();