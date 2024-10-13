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
    {path: 'elements', component: ElementsHomeComponent},
    {path: 'collections', component: CollectionsHomeComponent},
    {path: 'mods', component: ModsHomeComponent},
    {path: 'views', component: ViewsHomeComponent},
    {path: '**', component: NotFoundComponent}
];
