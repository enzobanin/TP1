import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  info(msg:String, extra?:unknown){ //any, usa-se o unknown para testar o tipo
    console.info(msg,extra??'');
  }
  warn(msg:String,extra?:unknown){
    console.warn(msg,extra??'');
  }
  error(msg:String,extra?:unknown){
    console.error(msg,extra??'');
  }
}
