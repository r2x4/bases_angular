import { UpperCasePipe } from "@angular/common";
import { Component, computed } from "@angular/core";



@Component({
    templateUrl: './hero-page.component.html',
    styleUrls: ['./hero-page.component.css'],
    imports: [ UpperCasePipe ]
})
export class HeroPageComponent {
    name = 'Iron Man';
    age = 45;

    heroDescription = computed( () => {
        const description = `${ this.name } - ${ this.age}`;
        return description;
    });

    
    capitalizeName = computed( () => this.name.toUpperCase() );

    changeHero() {
        this.name = 'Spiderman';
        this.age = 22;
    }

    changeAge() {
        this.age = 60;
    }

    resetForm() {
        this.name = 'Iron Man';
        this.age = 45;
    }
}