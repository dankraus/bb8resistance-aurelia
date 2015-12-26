import {inject} from 'aurelia-framework';
import * as fetchClient from 'aurelia-fetch-client';
import * as httpClient from 'aurelia-http-client';

@inject(fetchClient, httpClient)
export class ResistanceService {
	constructor(fetchClient, httpClient) {
		this.fetchClient = new fetchClient.HttpClient();
		this.json = fetchClient.json;
		this.httpClient = new httpClient.HttpClient();

		this.fetchClient.configure(config => {
			config
				.useStandardConfiguration()
				// .withBaseUrl('http://bb8-resistance-api.azurewebsites.net/api/');
				.withBaseUrl('http://192.168.1.135:3005/api/');
		});

		this.httpClient.configure(config => config.withBaseUrl('http://192.168.1.135:3005/api/'));
	}

	findAll(){
		return this.fetchClient.fetch('Resistances')
      		.then(response => response.json());
	}

	findByStoreNumber(storeNumber){
		return this.fetchClient.fetch(`TargetStores/${storeNumber}/Resistances`)
      		.then(response => response.json());
	}

	create(storeNumber, agentName, image) {
		var imageUrl = "";
		// this.uploadImage(image)
		// 	.then(response => {
		// 		if(response.isSuccess){
		// 			console.log(response.content.url);
		// 			imageUrl = response.content.url;

					// this.createResistance(storeNumber, agentName, imageUrl)
					this.createResistance("storeNumber", "agentName", "imageUrl")
						.then(response =>{
							console.log(response);
						});
			// 	}

			// });
	}

	uploadImage(image) {
		var formData = new FormData();
		formData.append('image', image[0]);

		return this.httpClient.createRequest('Images')
          .asPost()
          .withContent(formData)
          .send();
	}

	createResistance(storeNumber, agentName, imageUrl){
		var resistance = new this.json({
			"storeNumber": storeNumber,
			"agentName": agentName,
			"url": imageUrl
		});

		return this.fetchClient.fetch('Resistances', {
            method: 'post',
            body: resistance
        });
	}

}