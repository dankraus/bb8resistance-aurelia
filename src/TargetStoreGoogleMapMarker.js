export class TargetStoreGoogleMapMarker {
	constructor(store = {
		coordinates: {
			longitude,
			latitude
		},
		storeNumber,
		legalStoreNumber,
		storeName,
		formattedStoreName,
		street,
		state,
		city,
		country,
		market,
		phoneNumber,
		county,
		intersectionDescription,
		zipCode,
		formattedAddress
	}) {

		this.id = store.storeNumber;
		this.position = { lat: parseFloat(store.coordinates.latitude), lng: parseFloat(store.coordinates.longitude) };
		this.icon = { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" };
		this.storeData = store;
	}
}