import { Component, signal, } from "@angular/core";



interface Character {
    id : number;
    name: string;
    power: number;
}

@Component({
    templateUrl: './dragonball-page.component.html',
})

export class DragonballPageComponent {
    characters = signal<Character[]>([
        { id: 1, name: 'Goku', power: 10000 },
        { id: 2, name: 'Vegeta', power: 20000 },
        { id: 3, name: 'Gogan', power: 30000 },
        { id: 4, name: 'Trunks', power: 40000 },
    ]);
}