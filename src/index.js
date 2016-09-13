import angular from 'angular';

import {hello, random} from './components';
import { DogsModule } from './services';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router', DogsModule.name])
  .config(routesConfig)
  .component('hello', hello)
  .component('random', random)
