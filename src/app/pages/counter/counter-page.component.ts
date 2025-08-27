import { Component, signal, ChangeDetectionStrategy } from "@angular/core";


@Component({
    //template://
    templateUrl:`./counter-page.component.html`,
    styleUrls: ['./counter-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
 
})
export class CounterPageComponent {

    counter = 10;
    counterSignal = signal(10);

    constructor() {
        setInterval( () => {
            //this.counter += 1;
            //this.counterSignal.update( (v) => v + 1 );
            //console.log('Tick')
        }, 2000);
    }

    increaseBy(value: number) {
        this.counter += value;
        this.counterSignal.update( (current) => current + value );
    }

    decreaseBy(value: number) {
        this.counter -= value;
        this.counterSignal.update( (current) => current - value );
    }

    resetCounter() {
        this.counter = 0;
        this.counterSignal.set(0);
    }

}

