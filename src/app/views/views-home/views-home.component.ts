import { Component, Input } from '@angular/core';
import { StatisticsComponent } from "../statistics/statistics.component";
import { DividerComponent } from '../../shared/divider/divider.component';
import { ItemListComponent } from "../item-list/item-list.component";

@Component({
  selector: 'app-views-home',
  standalone: true,
  imports: [StatisticsComponent, DividerComponent, ItemListComponent],
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css'
})
export class ViewsHomeComponent {

  stats :any  = [
    {value:22, label: '# of Users'},
    {value:900, label:'Revenue'},
    {value:50, label:'Reviews'}
  ];
  items :any = [
    { image: 'couch.jpeg',
      title:'Couch',
      description: "This is a fantastic couch to sit on"
    },
    {
      image: 'dresser.jpeg',
      title:'Dresser',
      description: "This is a great dresser to put stuff in"
    }
  ];

}
