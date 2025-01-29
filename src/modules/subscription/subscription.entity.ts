export class Subscription {
  public id: string;
  public name: string;
  public amount: number;
  public isShared: boolean;

  constructor(id: string, name: string, amount: number, isShared: boolean) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.isShared = isShared;
  }

  public calculateAnnualCost(): number {
    return this.amount * 12;
  }

  public updateAmount(newAmount: number): void {
    if (newAmount < 0) throw new Error('Amount must be positive');
    this.amount = newAmount;
  }
}
