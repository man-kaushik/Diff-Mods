import { Component } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { SharedModule } from '../../shared/shared.module';
import { DividerComponent } from '../../shared/divider/divider.component';
import { NgIf } from '@angular/common';
import { AccordionComponent } from '../accordion/accordion.component';
import { title } from 'process';

@Component({
  selector: 'app-mods-home',
  standalone: true,
  imports: [ModalComponent,DividerComponent,NgIf,AccordionComponent],
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {
  modalOpen=false;
  items:any = [
    {title:'Why is the sky blue?', content:'It is what it is.'},
    {title:'What does an orange taste like?', content:'Its tangy, sour and what not.'},
    {title:'What color is the sky?', content:'Orange, I can say.'}
  ]

  onClick(){
    this.modalOpen=!this.modalOpen;
  }
}
