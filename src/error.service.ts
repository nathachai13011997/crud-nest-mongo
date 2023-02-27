import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as fs from 'fs';
import * as moment from 'moment';

@Injectable()
export class ErrorService {
  errorResponse(error: any): any {
    if (process.env.ERROR_LOG === 'true') {
      console.log('process.env.ERROR_LOG: ', process.env.ERROR_LOG);
      const logFileName = './logs/' + moment().format('YYYY-MM-DD') + '.log';
      const logText = `${moment().format('YYYY-MM-DD HH:mm:ss.SSS')} | ${error?.status || HttpStatus.INTERNAL_SERVER_ERROR} | ${
        error?.message || ''
      }\n`;

      fs.appendFile(
        logFileName,
        logText,
        (err) => err && console.log('Error writeLogFile: ', err),
      );
    }

    throw new HttpException(
      error.message,
      error.status || HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
