import { Account, Subscription } from './index';

export class User {
  public id: string;
  public name: string;
  public email: string;
  public accounts: Account[];
  public subscriptions: Subscription[];

  constructor(
    id: string,
    name: string,
    email: string,
    accounts: Account[],
    subscriptions: Subscription[],
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.accounts = accounts;
    this.subscriptions = subscriptions;
  }
}