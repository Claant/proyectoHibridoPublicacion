import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonModal, IonText, IonButton, IonFooter, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { AvisoService } from '../servicios/aviso.service';
import { Aviso } from '../modelo/Aviso';
import { AvisoCardComponent } from "../componentes/aviso-card/aviso-card.component";
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { settingsOutline, add, trashSharp } from 'ionicons/icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ RouterModule,IonIcon, IonFabButton, IonFab, IonFooter, CommonModule,IonButton, IonText, IonModal, IonList, IonHeader, IonToolbar, IonTitle, IonContent, AvisoCardComponent],
})
export class HomePage {avisos: Aviso[] = [];
  isModalOpen = false;
  avisoSeleccionado!: Aviso;

  constructor(private avisoService: AvisoService) {
    addIcons({add,settingsOutline,trashSharp});
  }

  async ionViewWillEnter() {
    this.avisos = await this.avisoService.obtenerAvisos();
    console.log('Avisos cargados:', this.avisos);

  }

  confirmarEliminacion(aviso: Aviso) {
    this.avisoSeleccionado = aviso;
    this.isModalOpen = true;
  }

  async eliminarAviso() {
    await this.avisoService.eliminarAviso(this.avisoSeleccionado.id);
    this.avisos = await this.avisoService.obtenerAvisos();
    this.cerrarModal();
  }

  cerrarModal() {
    this.isModalOpen = false;
  }


}
