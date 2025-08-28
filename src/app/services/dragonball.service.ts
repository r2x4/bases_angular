import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 100000 },
    { id: 2, name: 'Vegeta', power: 20000 },
  ]);

  constructor() {}

  addCharacter(newCharacter: Character) {
    this.characters.update((list: Character[]) => [...list, newCharacter]);
  }

}
