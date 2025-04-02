export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (value: number): void => {
    if (value <= 0) {
      console.log("Depósito falhou: o valor deve ser maior que zero.");
      return;
    }

    if (!this.validateStatus()) {
      console.log("Depósito falhou: conta inválida.");
      return;
    }

    this.balance += value;
    console.log(
      `Depósito de R$${value} realizado com sucesso! Novo saldo: R$${this.balance}`
    );
  };

  withdraw = (value: number): void => {
    if (!this.validateStatus()) {
      console.log("Saque falhou: conta inválida.");
      return;
    }

    if (value <= 0) {
      console.log("Saque falhou: o valor deve ser maior que zero.");
      return;
    }

    if (this.balance < value) {
      console.log("Saque falhou: saldo insuficiente.");
      return;
    }

    const saldoAnterior = this.balance;
    this.balance -= value;
    console.log(`Saque de R$${value} realizado com sucesso!`);
    console.log(`Saldo anterior: R$${saldoAnterior}`);
    console.log(`Novo saldo: R$${this.balance}`);
  };

  getBalance = (): number => {
    return this.balance;
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };

  isValidAccount = (): boolean => {
    return this.status;
  };
}
