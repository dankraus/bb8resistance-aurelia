export class App {
  configureRouter(config, router) {
    config.title = 'The BB-8 Resistance';
    config.map([
      { route: ['', 'target-stores'],  name: 'target-stores', moduleId: 'target-stores', nav: true, title: 'Resistance Target Store Map' },
      { route: 'resistance-gallery',  name: 'resistance-gallery', moduleId: 'resistance-gallery', nav: true, title: 'Resistance Gallery' },
      { route: 'about',  name: 'about', moduleId: 'about', nav: true, title: 'About' }
    ]);

    this.router = router;
  }
}
