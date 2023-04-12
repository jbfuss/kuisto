import { v4 as uuid } from 'uuid';
import {Season} from './season';
export class Recipe {
  id: string;
  name: string;
  link: string;
  season: Season;


  constructor() {
    this.id = uuid();
  }
}
