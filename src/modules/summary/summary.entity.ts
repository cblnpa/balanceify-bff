export class Summary {
  public totalBalance: number;
  public totalSavings: number;
  public availableBalance: number;

  constructor(totalBalance: number, totalSavings: number, availableBalance: number) {
    this.totalBalance = totalBalance;
    this.totalSavings = totalSavings;
    this.availableBalance = availableBalance;
  }

  public calculateNetBalance(): number {
    return this.totalBalance + this.totalSavings;
  }
}
