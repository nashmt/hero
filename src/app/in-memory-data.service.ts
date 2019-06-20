import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dept of Benefits' },
      { id: 12, name: 'Dept of Silly Walks' },
      { id: 13, name: 'US Navy' },
      { id: 14, name: 'ND IT Dept' },
      { id: 15, name: 'Google' },
      { id: 16, name: 'Apple' },
      { id: 17, name: 'Starbucks' },
      { id: 18, name: 'Lowe`s' },
      { id: 19, name: 'IRS' },
      { id: 20, name: 'Big IT Company' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
