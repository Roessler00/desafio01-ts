import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    if (value <= 0) {
      console.log("Depósito falhou: o valor deve ser maior que zero.");
      return;
    }

    const adjustedValue = value + 10;
    console.log(
      `Depósito no valor de: R$${value}, Depósito ajustado para: R$${adjustedValue}`
    );
  };
}
