export class Account {
  public id: string;
  public name: string;
  public type: string;
  public balance: number;

  constructor(id: string, name: string, type: string, balance: number) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.balance = balance;
  }

  public deposit(amount: number): void {
    if (amount <= 0) throw new Error('Deposit amount must be positive');
    this.balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount <= 0) throw new Error('Withdrawal amount must be positive');
    if (amount > this.balance) throw new Error('Insufficient funds');
    this.balance -= amount;
  }

  public updateType(newType: string): void {
    if (!newType) throw new Error('Type cannot be empty');
    this.type = newType;
  }
}
