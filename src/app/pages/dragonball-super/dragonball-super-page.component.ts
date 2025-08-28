import { Component, signal } from "@angular/core";



interface Character {
    id : number;
    name: string;
    power: number;
}

@Component({
    templateUrl: './dragonball-super-super-page.component.html',
    selector: 'dragonball-super-page',
})

export class DragonballSuperPageComponent {

    name = signal<string>('');
    power = signal<number>(0);

    characters = signal<Character[]>([
        { id: 1, name: 'Goku', power: 100000 },
        { id: 2, name: 'Vegeta', power: 20000 },
    ]);

    /*powerClasses =  computed( () => {
        return this.characters().map(character => {
            if (character.power > 30000) {
                return 'text-danger';
            } else {
                return 'text-primary';
            }
        });
    });*/


    addCharacter(){
        //console.log('Nombre:', this.name());
        //console.log('Poder:', this.power());
        if (!this.name() || !this.power() || this.power() <= 0) {
          return;
        }

        const newCharacter: Character = {
            id: this.characters().length + 1,
            name: this.name(),
            power: this.power()
        };

        this.characters.update((list) => [...list, newCharacter]);
        this.resetFields();
    }

    resetFields() {
        this.name.set('');
        this.power.set(0);
    }
  }
