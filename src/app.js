export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'target-stores'],  name: 'target-stores', moduleId: 'target-stores', nav: true, title: 'Target Stores' }
    ]);

    this.router = router;
  }
}
