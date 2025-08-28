import { Component } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';
import { signal } from '@angular/core';



@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',

})
export class CharacterAddComponent {

  name = signal('');
  power = signal(0);

addCharacter(){
  if (!this.name() || !this.power() || this.power() <= 0) {
    return;
  }
        const newCharacter: Character = {
            id: 100000,
            name: this.name(),
            power: this.power()
        };

        //this.characters.update((list) => [...list, newCharacter]);
        console.log({ newCharacter });
        this.resetFields();
    }

    resetFields() {
        this.name.set('');
        this.power.set(0);
    }
}
