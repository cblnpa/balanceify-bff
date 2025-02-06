export class ErrorResponse {
  status: 'error';
  message: string;
  errorCode?: string;

  constructor(message: string, errorCode?: string) {
    this.status = 'error';
    this.message = message;
    this.errorCode = errorCode;
  }
}
