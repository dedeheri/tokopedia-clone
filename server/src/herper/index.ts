export class Helper {
  static responseJsonHandler(
    message: string,
    data: any,
    status: number,
    expressResponse: any
  ) {
    return expressResponse.status(status).json({
      message,
      data,
    });
  }
}
