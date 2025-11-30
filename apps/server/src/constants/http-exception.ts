export class HttpException extends Error {
  statusCode: number;

  constructor(message: string | object | any[], statusCode: number) {
    if (typeof message === "string") {
      super(message);
    } else {
      super(JSON.stringify(message));
    }
    this.statusCode = statusCode;
  }
}
