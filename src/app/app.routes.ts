import { Routes } from '@angular/router';
import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';
import { CollectionsHomeComponent } from './collections/collections-home/collections-home.component';
import { ModsHomeComponent } from './mods/mods-home/mods-home.component';
import { ViewsHomeComponent } from './views/views-home/views-home.component';
import { ElementsModule } from './elements/elements.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    //Lazy Loading
    {
        path: 'elements',
        loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule)
    },
    {
        path: 'collections',
        loadChildren:() => import('./collections/collections.module').then(m => m.CollectionsModule)
    },
    {
        path: 'mods',
        loadChildren:() => import('./mods/mods.module').then(m => m.ModsModule)
    },
    {
        path: 'views',
        loadChildren:() => import('./views/views.module').then(m => m.ViewsModule)
    },
    {path: '**', component: NotFoundComponent}
];
