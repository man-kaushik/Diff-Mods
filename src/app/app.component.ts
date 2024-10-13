import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';
import { CollectionsHomeComponent } from "./collections/collections-home/collections-home.component";
import { ModsHomeComponent } from "./mods/mods-home/mods-home.component";
import { ViewsHomeComponent } from "./views/views-home/views-home.component";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ElementsHomeComponent, CollectionsHomeComponent, ModsHomeComponent, ViewsHomeComponent, RouterLink, RouterLinkActive,HomeComponent,NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'comps';
}
