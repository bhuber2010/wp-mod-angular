export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('hello', {
      url: '/',
      component: 'hello'
    })
    .state('random', {
      url: '/random',
      component: 'random'
    })
}
