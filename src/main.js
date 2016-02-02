import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-google-analytics', config => {
      config.init('UA-73216811-1');
      config.attach({
        logging: {
          enabled: true
        },
        pageTracking: {
          enabled: true
        },
        clickTracking: {
          enabled: true,
          filter: (element) => {
            return element instanceof HTMLElement &&
              (element.nodeName.toLowerCase() === 'a' ||
              element.nodeName.toLowerCase() === 'button');
          }
        }
      });
  });

  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin('aurelia-html-import-template-loader');

  aurelia.start().then(a => a.setRoot());
}
