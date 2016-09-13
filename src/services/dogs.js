import angular from 'angular';

class DogsModel {
  constructor() {
    this.count = 4
    this.dogs = [
      {"id": 0, name: "Reese"},
      {"id": 1, name: "Duke"},
      {"id": 2, name: "Polo"},
      {"id": 3, name: "Angie"}
    ]
  }
  addDog(dogName) {
    this.dogs.push({id: this.count, name: dogName})
    this.count++
  }
}

class DogController {
  constructor(DogsModel) {
    this.newDog = null
    this.DogsModel = DogsModel
  }
  addDog() {
    this.DogsModel.addDog.call(this.DogsModel, this.newDog)
  }
}

const AddDog = {
  template: `<form ng-submit="$ctrl.addDog()">
    <input type="text" ng-model="$ctrl.newDog" />
    <button type="submit">Add Dog</button>
    </form>`,
  controller: DogController
}

const DogsModule = angular.module('DogsModule', [])
  .service('DogsModel', DogsModel)
  .component('addDog', AddDog)

export default DogsModule
