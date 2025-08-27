import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [

    {
        path: '',
        component: CounterPageComponent,
    },
    {  //rutas
        path: 'hero',
        component: HeroPageComponent
    },

    { // redireciona a una ruta en este caso al primer componente
        path: '**',
        redirectTo: '',
    },
];
