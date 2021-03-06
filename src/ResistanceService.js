import {inject} from 'aurelia-framework';
import * as FetchClient from 'aurelia-fetch-client';
import * as HttpClient from 'aurelia-http-client';

@inject(FetchClient, HttpClient)
export class ResistanceService {
  constructor(fetchClient, httpClient) {
    this.fetchClient = new fetchClient.HttpClient();
    this.Json = fetchClient.json;
    this.httpClient = new httpClient.HttpClient();

    this.fetchClient.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://bb8-resistance-api.azurewebsites.net/api/');
        // .withBaseUrl('http://192.168.1.135:3005/api/');
    });

    this.httpClient.configure(config => config.withBaseUrl('http://bb8-resistance-api.azurewebsites.net/api/'));
    // this.httpClient.configure(config => config.withBaseUrl('http://192.168.1.135:3005/api/'));
  }

  findAll() {
    return this.fetchClient.fetch('Resistances')
          .then(response => response.json());
  }

  findByStoreNumber(storeNumber) {
    return this.fetchClient.fetch(`TargetStores/${storeNumber}/Resistances`)
          .then(response => response.json());
  }

  getStats() {
    return this.fetchClient.fetch(`Resistances/Stats`)
          .then(response => response.json());
  }

  create(storeNumber, agentName, image) {
    return this.uploadImage(image)
      .then(uploadResponse => uploadResponse.content.url)
      .then(imageUrl => this.createResistance(storeNumber, agentName, imageUrl))
      .then(response => response.json());
  }

  uploadImage(image) {
    let formData = new FormData();
    formData.append('image', image[0]);

    return this.httpClient.createRequest('Images')
          .asPost()
          .withContent(formData)
          .send();
  }

  createResistance(storeNumber, agentName, imageUrl) {
    let resistance = new this.Json({
      'storeNumber': storeNumber,
      'agentName': agentName,
      'url': imageUrl
    });

    return this.fetchClient.fetch('Resistances', {
      method: 'post',
      body: resistance
    });
  }

}
