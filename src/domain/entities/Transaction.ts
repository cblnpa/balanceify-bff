export class Transaction {
  public id: string;
  public date: Date;
  public category: string;
  public paymentMethod: string;
  public amount: number;
  public description: string;

  constructor(
    id: string,
    date: Date,
    category: string,
    paymentMethod: string,
    amount: number,
    description: string,
  ) {
    this.id = id;
    this.date = date;
    this.category = category;
    this.paymentMethod = paymentMethod;
    this.amount = amount;
    this.description = description;
  }

  public updateCategory(newCategory: string): void {
    if (!newCategory) {
      throw new Error('Category cannot be empty');
    }
    this.category = newCategory;
  }

  public updatePaymentMethod(newPaymentMethod: string): void {
    if (!newPaymentMethod) {
      throw new Error('Payment method cannot be empty');
    }
    this.paymentMethod = newPaymentMethod;
  }
}
