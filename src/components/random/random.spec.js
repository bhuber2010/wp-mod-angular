import angular from 'angular';
import 'angular-mocks';
import {random} from './random';

describe('random component', () => {
  beforeEach(() => {
    angular
      .module('random', ['app/src/components/random/random.html'])
      .component('random', random);
    angular.mock.module('random');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<random></random>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
