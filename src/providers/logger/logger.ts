import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoggerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoggerProvider {

  constructor(public http: Http) {
    console.log('Hello LoggerProvider Provider');
  }

  log(msg: any) {
    console.log(msg);
  }

  error(msg: any) {
    console.error(msg);
  }

  warn(msg: any) {
    console.warn(msg);
  }
}
