"bundle";!function(){var a=System.get("@@amd-helpers").createDefine();define("welcome.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template>\n  <section class="au-animate">\n    <h2>${heading}</h2>\n    <form role="form" submit.delegate="submit()">\n      <div class="form-group">\n        <label for="fn">First Name</label>\n        <input type="text" value.bind="firstName" class="form-control" id="fn" placeholder="first name">\n      </div>\n      <div class="form-group">\n        <label for="ln">Last Name</label>\n        <input type="text" value.bind="lastName" class="form-control" id="ln" placeholder="last name">\n      </div>\n      <div class="form-group">\n        <label>Full Name</label>\n        <p class="help-block">${fullName | upper}</p>\n      </div>\n      <button type="submit" class="btn btn-default">Submit</button>\n    </form>\n  </section>\n</template>\n'}),a()}(),System.register("welcome",[],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c,d,e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return{setters:[],execute:function(){c=function(){function a(){b(this,a),this.heading="Welcome to the Aurelia Navigation App!",this.firstName="John",this.lastName="Doe",this.previousValue=this.fullName}return e(a,[{key:"submit",value:function(){this.previousValue=this.fullName,alert("Welcome, "+this.fullName+"!")}},{key:"canDeactivate",value:function(){return this.fullName!==this.previousValue?confirm("Are you sure you want to leave?"):void 0}},{key:"fullName",get:function(){return this.firstName+" "+this.lastName}}]),a}(),a("Welcome",c),d=function(){function a(){b(this,a)}return e(a,[{key:"toView",value:function(a){return a&&a.toUpperCase()}}]),a}(),a("UpperValueConverter",d)}}}),function(){var a=System.get("@@amd-helpers").createDefine();define("users.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template>\n  <require from="blur-image"></require>\n\n  <section class="au-animate">\n    <h2>${heading}</h2>\n    <div class="row au-stagger">\n      <div class="col-sm-6 col-md-3 card-container au-animate" repeat.for="user of users">\n        <div class="card">\n          <canvas class="header-bg" width="250" height="70" blur-image.bind="image"></canvas>\n          <div class="avatar">\n            <img src.bind="user.avatar_url" crossorigin ref="image"/>\n          </div>\n          <div class="content">\n            <p class="name">${user.login}</p>\n            <p><a target="_blank" class="btn btn-default" href.bind="user.html_url">Contact</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</template>\n'}),a()}(),System.register("users",["npm:aurelia-framework@1.0.0-beta.1.0.6","npm:aurelia-fetch-client@1.0.0-beta.1.0.2","github:github/fetch@0.10.1"],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c,d,e,f=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return{setters:[function(a){c=a.inject},function(a){d=a.HttpClient},function(a){}],execute:function(){e=function(){function a(a){b(this,e),this.heading="Github Users",this.users=[],a.configure(function(a){a.useStandardConfiguration().withBaseUrl("https://api.github.com/")}),this.http=a}f(a,[{key:"activate",value:function(){var a=this;return this.http.fetch("users").then(function(a){return a.json()}).then(function(b){return a.users=b})}}]);var e=a;return a=c(d)(a)||a}(),a("Users",e)}}}),function(){var a=System.get("@@amd-helpers").createDefine();define("target-stores.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template>\n  <require from=\'./google-map\'></require>\n  <require from=\'./new-resistance-form\'></require>\n  <require from=\'./resistances\'></require>\n\n  <section class="au-animate">\n    <h2>The BB-8 Resistance</h2>\n    <p>Click a Target store map marker and upload your resistance photo. Touch the BB-8 display! Join the other ${resistanceCount} agents!</p>\n\n    <div class="row">\n      <div class="col-md-6">\n        <google-map markers.bind="targetStoreGoogleMapMarkers"></google-map>\n      </div>\n\n      <div class="col-md-6">\n        <h2 if.bind="isLoading">Loading...</h2>\n        <new-resistance-form if.bind="isFormVisible" selected-store.bind="selectedStore"></new-resistance-form>\n      </div>\n    </div>\n\n    <div class="row">\n      <resistances resistances.bind="selectedStoreResistances"></resistances>\n    </div>\n  </section>\n</template>\n'}),a()}(),System.register("TargetStoreGoogleMapMarker",[],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c;return{setters:[],execute:function(){c=function d(){var a=arguments.length<=0||void 0===arguments[0]?{coordinates:{longitude:longitude,latitude:latitude},storeNumber:storeNumber,legalStoreNumber:legalStoreNumber,storeName:storeName,formattedStoreName:formattedStoreName,street:street,state:state,city:city,country:country,market:market,phoneNumber:phoneNumber,county:county,intersectionDescription:intersectionDescription,zipCode:zipCode,formattedAddress:formattedAddress}:arguments[0];b(this,d),this.id=a.storeNumber,this.position={lat:parseFloat(a.coordinates.latitude),lng:parseFloat(a.coordinates.longitude)},this.icon={url:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"},this.storeData=a},a("TargetStoreGoogleMapMarker",c)}}}),System.register("TargetStoresService",["npm:aurelia-framework@1.0.0-beta.1.0.6","npm:aurelia-fetch-client@1.0.0-beta.1.0.2"],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c,d,e,f=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return{setters:[function(a){c=a.inject},function(a){d=a.HttpClient}],execute:function(){e=function(){function a(a){b(this,e),a.configure(function(a){a.useStandardConfiguration().withBaseUrl("http://bb8-resistance-api.azurewebsites.net/api/")}),this.http=a}f(a,[{key:"findAll",value:function(){return this.http.fetch("TargetStores").then(function(a){return a.json()})}}]);var e=a;return a=c(d)(a)||a}(),a("TargetStoresService",e)}}}),System.register("target-stores",["npm:aurelia-framework@1.0.0-beta.1.0.6","aurelia-event-aggregator","TargetStoresService","ResistanceService","TargetStoreGoogleMapMarker","github:github/fetch@0.10.1"],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c,d,e,f,g,h,i=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return{setters:[function(a){c=a.inject},function(a){d=a.EventAggregator},function(a){e=a.TargetStoresService},function(a){f=a.ResistanceService},function(a){g=a.TargetStoreGoogleMapMarker},function(a){}],execute:function(){h=function(){function a(a,c,d){b(this,h),this.targetStoreGoogleMapMarkers=[],this.selectedStore={},this.selectedStoreResistances=[],this.resistanceCount=0,this.isLoading=!0,this.isFormVisible=!1,this.ea=a,this.targetStoresService=c,this.resistanceService=d}i(a,[{key:"activate",value:function(){var a=this;this.ea.subscribe("google-map.marker.clicked",function(b){a.isFormVisible=!0,a.selectedStore=b.storeData,a.resistanceService.findByStoreNumber(a.selectedStore.storeNumber).then(function(b){return a.selectedStoreResistances=b})}),this.targetStoresService.findAll().then(function(b){a.targetStoreGoogleMapMarkers=b.map(function(a){return null!==a.coordinates&&null!==a.coordinates.latitude&&null!==a.coordinates.longitude?new g(a):void 0}),a.isLoading=!1}),this.resistanceService.getStats().then(function(b){return a.resistanceCount=b.totalCount})}}]);var h=a;return a=c(d,e,f)(a)||a}(),a("TargetStores",h)}}}),function(){var a=System.get("@@amd-helpers").createDefine();define("resistances.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template>\n	<div class="resistance col-sm-6 col-md-3 card-container au-animate" repeat.for="resistance of resistances">\n		<div class="card">\n          <div class="content">\n          	<img class="thumbnail" src="${resistance.url}" alt="${resistance.agentName}">\n            <p class="name">${resistance.agentName}</p>\n          </div>\n        </div>\n	</div>\n</template>'}),a()}(),System.register("resistances",["npm:aurelia-framework@1.0.0-beta.1.0.6","aurelia-event-aggregator"],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function c(a,b,c){var d=c[b];if(d){var e={};for(var f in d)e[f]=d[f];e.value=e.initializer?e.initializer.call(a):void 0,Object.defineProperty(a,b,e)}}var d,e,f,g,h=function(){function a(a,b,c){for(var d=0;d<b.length;d++){var e=b[d],f=e.decorators,g=e.key;if(delete e.key,delete e.decorators,e.enumerable=e.enumerable||!1,e.configurable=!0,("value"in e||e.initializer)&&(e.writable=!0),f){for(var h=0;h<f.length;h++){var i=f[h];if("function"!=typeof i)throw new TypeError("The decorator for method "+e.key+" is of the invalid type "+typeof i);e=i(a,g,e)||e}if(void 0!==e.initializer){c[g]=e;continue}}Object.defineProperty(a,g,e)}}return function(b,c,d,e,f){return c&&a(b.prototype,c,e),d&&a(b,d,f),b}}();return{setters:[function(a){d=a.inject,e=a.bindable},function(a){f=a.EventAggregator}],execute:function(){g=function(){function a(a){b(this,i),c(this,"resistances",g),this.ea=a}var g={},g={};h(a,[{key:"resistances",decorators:[e],initializer:null,enumerable:!0}],null,g),h(a,[{key:"attached",value:function(){var a=this;this.ea.subscribe("resistance.created",function(b){return a.resistances.push(b)})}}],null,g);var i=a;return a=d(f)(a)||a}(),a("Resistances",g)}}}),function(){var a=System.get("@@amd-helpers").createDefine();define("new-resistance-form.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template>\n	<div class="well">\n		<h3>${selectedStore.storeName}<br><small>${selectedStore.formattedAddress}</small></h3>\n		<form submit.trigger="submit()">\n			<div class="form-group">\n				<label for="resistanceAgentName">Your Agent Name</label>\n				<input type="text" class="form-control" name="resistanceAgentName" value.bind="agentName">\n			</div>\n			<div class="form-group">\n				<label for="resistancePhotoUpload">Photo</label>\n				<input type="file" name="resistancePhotoUpload" accept="image/*" files.bind="photo">\n			</div>\n			<button show.bind="!isSubmitting" type="submit" class="btn btn-success">Join the Resistance!</button>\n			<p show.bind="isSubmitting">Submitting...</p>\n		</form>\n	</div>\n</template>'}),a()}(),System.register("ResistanceService",["npm:aurelia-framework@1.0.0-beta.1.0.6","npm:aurelia-fetch-client@1.0.0-beta.1.0.2","npm:aurelia-http-client@1.0.0-beta.1"],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c,d,e,f,g=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return{setters:[function(a){c=a.inject},function(a){d=a},function(a){e=a}],execute:function(){f=function(){function a(a,c){b(this,f),this.fetchClient=new a.HttpClient,this.Json=a.json,this.httpClient=new c.HttpClient,this.fetchClient.configure(function(a){a.useStandardConfiguration().withBaseUrl("http://bb8-resistance-api.azurewebsites.net/api/")}),this.httpClient.configure(function(a){return a.withBaseUrl("http://bb8-resistance-api.azurewebsites.net/api/")})}g(a,[{key:"findAll",value:function(){return this.fetchClient.fetch("Resistances").then(function(a){return a.json()})}},{key:"findByStoreNumber",value:function(a){return this.fetchClient.fetch("TargetStores/"+a+"/Resistances").then(function(a){return a.json()})}},{key:"getStats",value:function(){return this.fetchClient.fetch("Resistances/Stats").then(function(a){return a.json()})}},{key:"create",value:function(a,b,c){var d=this;return this.uploadImage(c).then(function(a){return a.content.url}).then(function(c){return d.createResistance(a,b,c)}).then(function(a){return a.json()})}},{key:"uploadImage",value:function(a){var b=new FormData;return b.append("image",a[0]),this.httpClient.createRequest("Images").asPost().withContent(b).send()}},{key:"createResistance",value:function(a,b,c){var d=new this.Json({storeNumber:a,agentName:b,url:c});return this.fetchClient.fetch("Resistances",{method:"post",body:d})}}]);var f=a;return a=c(d,e)(a)||a}(),a("ResistanceService",f)}}}),System.register("new-resistance-form",["npm:aurelia-framework@1.0.0-beta.1.0.6","aurelia-event-aggregator","ResistanceService"],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function c(a,b,c){var d=c[b];if(d){var e={};for(var f in d)e[f]=d[f];e.value=e.initializer?e.initializer.call(a):void 0,Object.defineProperty(a,b,e)}}var d,e,f,g,h,i=function(){function a(a,b,c){for(var d=0;d<b.length;d++){var e=b[d],f=e.decorators,g=e.key;if(delete e.key,delete e.decorators,e.enumerable=e.enumerable||!1,e.configurable=!0,("value"in e||e.initializer)&&(e.writable=!0),f){for(var h=0;h<f.length;h++){var i=f[h];if("function"!=typeof i)throw new TypeError("The decorator for method "+e.key+" is of the invalid type "+typeof i);e=i(a,g,e)||e}if(void 0!==e.initializer){c[g]=e;continue}}Object.defineProperty(a,g,e)}}return function(b,c,d,e,f){return c&&a(b.prototype,c,e),d&&a(b,d,f),b}}();return{setters:[function(a){d=a.inject,e=a.bindable},function(a){f=a.EventAggregator},function(a){g=a.ResistanceService}],execute:function(){h=function(){function a(a,d){b(this,j),c(this,"selectedStore",h),this.agentName="",this.photo="",this.isSubmitting=!1,this.ea=a,this.resistanceService=d}var h={},h={};i(a,[{key:"selectedStore",decorators:[e],initializer:null,enumerable:!0}],null,h),i(a,[{key:"submit",value:function(){var a=this;this.isSubmitting=!0,this.resistanceService.create(this.selectedStore.storeNumber,this.agentName,this.photo).then(function(b){a.isSubmitting=!1,a.agentName="",a.photo="",a.ea.publish("resistance.created",b)})}}],null,h);var j=a;return a=d(f,g)(a)||a}(),a("NewResistanceForm",h)}}}),function(){var a=System.get("@@amd-helpers").createDefine();define("nav-bar.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template bindable="router">\n  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#skeleton-navigation-navbar-collapse">\n        <span class="sr-only">Toggle Navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="#">\n        <i class="fa fa-home"></i>\n        <span>${router.title}</span>\n      </a>\n    </div>\n\n    <div class="collapse navbar-collapse" id="skeleton-navigation-navbar-collapse">\n      <ul class="nav navbar-nav">\n        <li repeat.for="row of router.navigation" class="${row.isActive ? \'active\' : \'\'}">\n          <a data-toggle="collapse" data-target="#skeleton-navigation-navbar-collapse.in" href.bind="row.href">${row.title}</a>\n        </li>\n      </ul>\n\n      <ul class="nav navbar-nav navbar-right">\n        <li class="loader" if.bind="router.isNavigating">\n          <i class="fa fa-spinner fa-spin fa-2x"></i>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</template>\n'}),a()}(),System.register("main",["github:twbs/bootstrap@3.3.6"],function(a){"use strict";function b(a){a.use.standardConfiguration().developmentLogging(),a.start().then(function(a){return a.setRoot()})}return a("configure",b),{setters:[function(a){}],execute:function(){}}}),function(){var a=System.get("@@amd-helpers").createDefine();define("google-map.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template>\n    <require from="google-map.css"></require>\n</template>'}),a()}(),function(){var a=System.get("@@amd-helpers").createDefine();define("google-map.css!github:systemjs/plugin-text@0.0.3",[],function(){return"google-map {\n    display: block;\n    height: 350px;\n}"}),a()}(),System.register("google-map",["npm:aurelia-framework@1.0.0-beta.1.0.6","aurelia-event-aggregator"],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function c(a,b,c){var d=c[b];if(d){var e={};for(var f in d)e[f]=d[f];e.value=e.initializer?e.initializer.call(a):void 0,Object.defineProperty(a,b,e)}}var d,e,f,g,h=function(){function a(a,b,c){for(var d=0;d<b.length;d++){var e=b[d],f=e.decorators,g=e.key;if(delete e.key,delete e.decorators,e.enumerable=e.enumerable||!1,e.configurable=!0,("value"in e||e.initializer)&&(e.writable=!0),f){for(var h=0;h<f.length;h++){var i=f[h];if("function"!=typeof i)throw new TypeError("The decorator for method "+e.key+" is of the invalid type "+typeof i);e=i(a,g,e)||e}if(void 0!==e.initializer){c[g]=e;continue}}Object.defineProperty(a,g,e)}}return function(b,c,d,e,f){return c&&a(b.prototype,c,e),d&&a(b,d,f),b}}();return{setters:[function(a){d=a.inject,e=a.bindable},function(a){f=a.EventAggregator}],execute:function(){g=function(){function a(a,d){b(this,i),c(this,"zoom",g),c(this,"centerLat",g),c(this,"centerLng",g),c(this,"markers",g),this.element=a,this.ea=d,this.map={},this.apikey=""}var g={},g={};h(a,[{key:"zoom",decorators:[e],initializer:function(){return 4},enumerable:!0},{key:"centerLat",decorators:[e],initializer:function(){return 38.7225},enumerable:!0},{key:"centerLng",decorators:[e],initializer:function(){return-90.4774},enumerable:!0},{key:"markers",decorators:[e],initializer:function(){return[]},enumerable:!0}],null,g),h(a,[{key:"attached",value:function(){var a=this,b=this;this.ea.subscribe("google.maps.ready",function(){a.map=new google.maps.Map(a.element,{zoom:a.zoom,center:{lat:a.centerLat,lng:a.centerLng}})}),window.myGoogleMapsCallback=function(){b.ea.publish("google.maps.ready")},this.loadApiScript()}},{key:"loadApiScript",value:function(){if(void 0===window.google||void 0===window.google.maps){var a=document.createElement("script");a.src="https://maps.googleapis.com/maps/api/js?key="+this.apikey+"&callback=myGoogleMapsCallback",document.body.appendChild(a)}}},{key:"markersChanged",value:function(a,b){this.setMapMarkers(a)}},{key:"setMapMarkers",value:function(a){var b=this;Array.isArray(a)?a.map(function(a){return b.addMarkerToMap(a)}):"object"==typeof a&&this.addMarkerToMap(a)}},{key:"addMarkerToMap",value:function(a){var b=this,c=new google.maps.Marker(a);c.addListener("click",function(a){b.ea.publish("google-map.marker.clicked",c)}),c.setMap(this.map)}},{key:"getCurrentPosition",value:function(){return new Promise(function(a,b){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(b){return a(b)},function(a){return b(a)}):b("Browser Geolocation not supported or found.")})}},{key:"error",value:function(){console.log.apply(console,arguments)}}],null,g);var i=a;return a=d(Element,f)(a)||a}(),a("GoogleMap",g)}}}),function(){var a=System.get("@@amd-helpers").createDefine();define("child-router.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template>\n  <section class="au-animate">\n    <h2>${heading}</h2>\n    <div>\n      <div class="col-md-2">\n        <ul class="well nav nav-pills nav-stacked">\n          <li repeat.for="row of router.navigation" class="${row.isActive ? \'active\' : \'\'}">\n            <a href.bind="row.href">${row.title}</a>\n          </li>\n        </ul>\n      </div>\n      <div class="col-md-10" style="padding: 0">\n        <router-view></router-view>\n      </div>\n    </div>\n  </section>\n</template>\n'}),a()}(),System.register("child-router",[],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c,d=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return{setters:[],execute:function(){c=function(){function a(){b(this,a),this.heading="Child Router"}return d(a,[{key:"configureRouter",value:function(a,b){a.map([{route:["","welcome"],name:"welcome",moduleId:"welcome",nav:!0,title:"Welcome"},{route:"users",name:"users",moduleId:"users",nav:!0,title:"Github Users"},{route:"child-router",name:"child-router",moduleId:"child-router",nav:!0,title:"Child Router"}]),this.router=b}}]),a}(),a("ChildRouter",c)}}}),System.register("blur-image",["npm:aurelia-framework@1.0.0-beta.1.0.6"],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function c(a,b,c,e,f,g){if(!(isNaN(g)||1>g)){g|=0;var j,k=a.getContext("2d");try{j=k.getImageData(b,c,e,f)}catch(l){throw new Error("unable to access image data: "+l)}var m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K=j.data,L=g+g+1,M=e-1,N=f-1,O=g+1,P=O*(O+1)/2,Q=new d,R=Q;for(o=1;L>o;o++)if(R=R.next=new d,o==O)var S=R;R.next=Q;var T=null,U=null;s=r=0;var V=h[g],W=i[g];for(n=0;f>n;n++){for(B=C=D=E=t=u=v=w=0,x=O*(F=K[r]),y=O*(G=K[r+1]),z=O*(H=K[r+2]),A=O*(I=K[r+3]),t+=P*F,u+=P*G,v+=P*H,w+=P*I,R=Q,o=0;O>o;o++)R.r=F,R.g=G,R.b=H,R.a=I,R=R.next;for(o=1;O>o;o++)p=r+((o>M?M:o)<<2),t+=(R.r=F=K[p])*(J=O-o),u+=(R.g=G=K[p+1])*J,v+=(R.b=H=K[p+2])*J,w+=(R.a=I=K[p+3])*J,B+=F,C+=G,D+=H,E+=I,R=R.next;for(T=Q,U=S,m=0;e>m;m++)K[r+3]=I=w*V>>W,0!=I?(I=255/I,K[r]=(t*V>>W)*I,K[r+1]=(u*V>>W)*I,K[r+2]=(v*V>>W)*I):K[r]=K[r+1]=K[r+2]=0,t-=x,u-=y,v-=z,w-=A,x-=T.r,y-=T.g,z-=T.b,A-=T.a,p=s+((p=m+g+1)<M?p:M)<<2,B+=T.r=K[p],C+=T.g=K[p+1],D+=T.b=K[p+2],E+=T.a=K[p+3],t+=B,u+=C,v+=D,w+=E,T=T.next,x+=F=U.r,y+=G=U.g,z+=H=U.b,A+=I=U.a,B-=F,C-=G,D-=H,E-=I,U=U.next,r+=4;s+=e}for(m=0;e>m;m++){for(C=D=E=B=u=v=w=t=0,r=m<<2,x=O*(F=K[r]),y=O*(G=K[r+1]),z=O*(H=K[r+2]),A=O*(I=K[r+3]),t+=P*F,u+=P*G,v+=P*H,w+=P*I,R=Q,o=0;O>o;o++)R.r=F,R.g=G,R.b=H,R.a=I,R=R.next;for(q=e,o=1;g>=o;o++)r=q+m<<2,t+=(R.r=F=K[r])*(J=O-o),u+=(R.g=G=K[r+1])*J,v+=(R.b=H=K[r+2])*J,w+=(R.a=I=K[r+3])*J,B+=F,C+=G,D+=H,E+=I,R=R.next,N>o&&(q+=e);for(r=m,T=Q,U=S,n=0;f>n;n++)p=r<<2,K[p+3]=I=w*V>>W,I>0?(I=255/I,K[p]=(t*V>>W)*I,K[p+1]=(u*V>>W)*I,K[p+2]=(v*V>>W)*I):K[p]=K[p+1]=K[p+2]=0,t-=x,u-=y,v-=z,w-=A,x-=T.r,y-=T.g,z-=T.b,A-=T.a,p=m+((p=n+O)<N?p:N)*e<<2,t+=B+=T.r=K[p],u+=C+=T.g=K[p+1],v+=D+=T.b=K[p+2],w+=E+=T.a=K[p+3],T=T.next,x+=F=U.r,y+=G=U.g,z+=H=U.b,A+=I=U.a,B-=F,C-=G,D-=H,E-=I,U=U.next,r+=e}k.putImageData(j,b,c)}}function d(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}function e(a,b){var d=a.width,e=a.height,f=a.getContext("2d");f.drawImage(b,0,0,d,e),c(a,0,0,d,e,j)}var f,g,h,i,j,k=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return{setters:[function(a){f=a.inject}],execute:function(){g=function(){function a(a){b(this,c),this.element=a}k(a,[{key:"valueChanged",value:function(a){var b=this;a.complete?e(this.element,a):a.onload=function(){return e(b.element,a)}}}]);var c=a;return a=f(Element)(a)||a}(),a("BlurImageCustomAttribute",g),h=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],i=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24],j=40}}}),function(){var a=System.get("@@amd-helpers").createDefine();define("app.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template>\n  <require from="bootstrap/css/bootstrap.css"></require>\n\n  <div class="page-host">\n    <router-view></router-view>\n  </div>\n\n  <footer>&copy; <a href="http://dskraus.com" target="_main">Dan Kraus</a>. This year and all years.</footer>\n</template>\n'}),a()}(),System.register("app",[],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c,d=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return{setters:[],execute:function(){c=function(){function a(){b(this,a)}return d(a,[{key:"configureRouter",value:function(a,b){a.title="Aurelia",a.map([{route:["","target-stores"],name:"target-stores",moduleId:"target-stores",nav:!0,title:"Target Stores"}]),this.router=b}}]),a}(),a("App",c)}}});