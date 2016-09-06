class RandomController {
  constructor() {
    this.text = 'My brand new component!';
  }
}

export const random = {
  template: require('./random.html'),
  controller: RandomController
};
