import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonText, IonInput, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Aviso } from 'src/app/modelo/Aviso';
import { AvisoService } from 'src/app/servicios/aviso.service';

@Component({
  selector: 'app-crear-aviso',
  templateUrl: './crear-aviso.page.html',
  styleUrls: ['./crear-aviso.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonInput, IonText, IonButton, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CrearAvisoPage {
aviso: Partial<Aviso> = {
    titulo: '',
    descripcion: '',
    foto: '',
    fecha: ''
  };

  constructor(private avisoService: AvisoService) {}

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.aviso.foto = image.dataUrl!;
  }

  async guardarAviso(form: any) {
    if (form.invalid) {
      console.warn('Formulario inválido:', this.aviso);
      return;
    }

    this.aviso.fecha = new Date().toISOString().split('T')[0];
    console.log('Aviso a guardar:', this.aviso);

    await this.avisoService.guardarAviso(this.aviso as Aviso);
    this.aviso = { titulo: '', descripcion: '', foto: '', fecha: '' };
    form.resetForm();
  }


}



