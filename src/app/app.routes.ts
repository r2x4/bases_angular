import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [

    {
        path: '',
        component: CounterPageComponent,
    },
    {  //rutas
        path: 'hero',
        component: HeroPageComponent
    },

    {
        path: 'dragonball',
        component: DragonballPageComponent
    },

    { // ruta para Dragonball Super
        path: 'dragonball-super',
        component: DragonballSuperPageComponent
    },

    { // redireciona a una ruta en este caso al primer componente
        path: '**',
        redirectTo: '',
    },
];
