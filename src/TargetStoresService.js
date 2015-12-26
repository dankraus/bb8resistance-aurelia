import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class TargetStoresService {
  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        // .withBaseUrl('http://bb8-resistance-api.azurewebsites.net/api/');
        .withBaseUrl('http://192.168.1.135:3005/api/');
    });

    this.http = http;
  }

  findAll() {
    return this.http.fetch('TargetStores')
          .then(response => response.json());
  }
}
