import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

@Injectable()
export class AppService {
  static config;
  static appConfig;
  static appLabels;
  static appMessages;
  static BASE_URL = environment.BASE_URL;

  constructor(@Inject(Http) private http: Http) {}

  loadConfigFile(): Promise < any > {
    const promise = this.http.get('./assets/config/config.json').map((res) => res.json()).toPromise();
    promise.then(config => {
      AppService.config = config;
    });
    return promise;
  }

  loadLabels(): Promise < any > {
    const promise = this.http.get('./assets/message-labels/labels.json').map((res) => res.json()).toPromise();
    promise.then(config => {
      AppService.appLabels = config;
    });
    return promise;
  }

  loadMessages(): Promise < any > {
    const promise = this.http.get('./assets/message-labels/messages.json').map((res) => res.json()).toPromise();
    promise.then(config => {
      AppService.appMessages = config;
    });
    return promise;
  }

  sendInfoToMail(userInfo) {
    console.log("inside ", userInfo);
   let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let opts = new RequestOptions();
    opts.headers = headers;

    return this.http.post('http://18.220.124.39:8080/quote/send/PDF', userInfo, opts); 
  }
}
