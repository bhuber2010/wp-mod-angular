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

const DogsModule = angular.module('Dogs', [])
  .service('DogsModel', DogsModel)

export default DogsModule
