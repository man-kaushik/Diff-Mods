import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { DividerComponent } from '../../shared/divider/divider.component';

@Component({
  selector: 'app-collections-home',
  standalone: true,
  imports: [TableComponent,DividerComponent],
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css'
})
export class CollectionsHomeComponent {
  data = [
    { name:'James', age: 24, job: 'Designer'},
    { name:'Jill', age: 26, job: 'Engineer'},
    { name:'Elyse', age: 25, job: 'Engineer'}
  ];
  headers = [
    {key: 'name',label: 'Name'},
    {key: 'age',label: 'Age'},
    {key: 'job',label: 'Job'}
  ];

}
