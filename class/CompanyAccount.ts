import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (value: number): void => {
    if (!this.isValidAccount()) {
      console.log("Depósito falhou: conta inválida.");
      return;
    }

    this.balance += value;
    console.log(
      `Empréstimo de R$${value} realizado com sucesso! Novo saldo: R$${this.balance}`
    );
  };
}
