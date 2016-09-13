class RandomController {
  constructor(DogsModel) {
    this.text = 'My brand new component!';
    this.dogs = DogsModel.dogs;
  
  }
}

export const random = {
  template: require('./random.html'),
  controller: RandomController
};
