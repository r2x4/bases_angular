import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';


const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('dragonball-characters');
  return characters ? JSON.parse(characters) : [];
}

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  characters = signal<Character[]>(loadFromLocalStorage());

saveToLocalStore = effect (() => {

  // console.log(`Character count ${this.characters().length}`);
  localStorage.setItem('dragonball-characters', JSON.stringify(this.characters()));
});

  addCharacter(newCharacter: Character) {
    this.characters.update((list) => [...list, newCharacter]);
  }

}
