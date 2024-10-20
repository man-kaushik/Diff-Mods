import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [NgFor,NgClass],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  @Input() items:any=[];
  openedItemIndex = 0;

  onClick(i:number){
    if(i == this.openedItemIndex){
      this.openedItemIndex = -1;
    }
    else{
      this.openedItemIndex=i;
    }
  }
}
