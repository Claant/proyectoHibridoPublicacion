import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Aviso } from 'src/app/modelo/Aviso';
import { IonCardTitle, IonCardHeader, IonCardSubtitle, IonButton, IonItem, IonIcon } from "@ionic/angular/standalone";
import { FechaPipe } from "../../pipes/FechaPipe";
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { trashSharp } from 'ionicons/icons';


@Component({
  selector: 'app-aviso-card',
  templateUrl: './aviso-card.component.html',
  styleUrls: ['./aviso-card.component.scss'],
  standalone: true,
  imports: [IonIcon, CommonModule, IonButton, IonCardSubtitle, IonCardHeader, FechaPipe, IonItem],
})
export class AvisoCardComponent   {
  @Input() aviso!: Aviso;
  @Output() eliminar = new EventEmitter<Aviso>();

  constructor(){
addIcons({trashSharp});


  }
}
