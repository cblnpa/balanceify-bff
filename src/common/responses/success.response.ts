export class SuccessResponse<T> {
  status: 'successful';
  data: T;
  message?: string;

  constructor(data: T, message?: string) {
    this.status = 'successful';
    this.data = data;
    this.message = message;
  }
}
