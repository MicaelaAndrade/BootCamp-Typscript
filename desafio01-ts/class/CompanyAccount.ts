import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (amount: number): void => {
    if (this.validateStatus()) {
      if (amount > 0) {
        this.balance += amount;
        console.log('Empréstimo realizado com sucesso!');
      } else {
        console.log('O valor do empréstimo deve ser maior que zero.');
      }
    }
  };
}
