import { NgClass } from "@angular/common";
import { Component, computed, signal, } from "@angular/core";



interface Character {
    id : number;
    name: string;
    power: number;
}

@Component({
    templateUrl: './dragonball-page.component.html',
    //imports:[NgClass]
})

export class DragonballPageComponent {
    characters = signal<Character[]>([
        { id: 1, name: 'Goku', power: 100000 },
        { id: 2, name: 'Vegeta', power: 20000 },
        { id: 3, name: 'Gogan', power: 30000 },
        { id: 4, name: 'Trunks', power: 40000 },
        { id: 5, name: 'Yamcha', power: 500 },
    ]);

    powerClasses =  computed( () => {
        return this.characters().map(character => {
            if (character.power > 30000) {
                return 'text-danger';
            } else {
                return 'text-primary';
            }
        });
    });
}