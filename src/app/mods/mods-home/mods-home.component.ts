import { Component } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { SharedModule } from '../../shared/shared.module';
import { DividerComponent } from '../../shared/divider/divider.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-mods-home',
  standalone: true,
  imports: [ModalComponent,DividerComponent,NgIf],
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {
  modalOpen=false;

  onClick(){
    this.modalOpen=!this.modalOpen;
  }
}
