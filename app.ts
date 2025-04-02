import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { SpecialAccount } from "./class/SpecialAccount";

console.log("---------------------------");
console.log("Seja bem vindo ao Dio Bank!");
console.log("---------------------------");

console.log("\n Conta Pessoal");
console.log("---------------------------");

const peopleAccount: PeopleAccount = new PeopleAccount(1, "João", 10);
// console.log(peopleAccount);
peopleAccount.deposit(1000);
peopleAccount.withdraw(750);
peopleAccount.withdraw(251);
peopleAccount.withdraw(-10);
console.log("---------------------------");

console.log("\n Conta Empresarial");
console.log("---------------------------");

const companyAccount: CompanyAccount = new CompanyAccount("Dio", 22);
// console.log(companyAccount);
companyAccount.getLoan(1000);
console.log("---------------------------");

console.log("\n Conta Especial");
console.log("---------------------------");
const specialAccount: SpecialAccount = new SpecialAccount("João Roessler", 33);
specialAccount.deposit(100);
console.log("---------------------------");
