export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  private setName = (name: string): void => {
    this.name = name;
    console.log('Nome alterado com sucesso!');
  };

  private getName = (): string => {
    return this.name;
  };

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      if (amount > 0) {
        this.balance += amount;
        console.log('Depósito realizado com sucesso!');
      } else {
        console.log('Você depositou');
      }
    }
  };

  withdraw = (amount: number): void => {
    if (this.validateStatus()) {
      if (this.balance >= amount && amount > 0) {
        this.balance -= amount;
        console.log('Saque realizado com sucesso!');
      } else {
        console.log('Você sacou');
      }
    }
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

   validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  };

  customDeposit = (amount: number): void => {
    if (this.validateStatus()) {
      if (amount > 0) {
        this.balance += amount;
        console.log('Depósito realizado com sucesso!');

        // Acrescenta 10 ao valor do depósito
        this.balance += 10;
        console.log('Valor acrescido: 10');
      } else {
        console.log('O valor do depósito deve ser maior que zero.');
      }
    }
  };
}