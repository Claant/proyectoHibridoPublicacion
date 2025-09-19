import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Aviso } from '../modelo/Aviso';

@Injectable({
  providedIn: 'root'
})
export class AvisoService {
  private KEY = 'avisos';

  async obtenerAvisos(): Promise<Aviso[]> {
    const { value } = await Preferences.get({ key: this.KEY });
    return value ? JSON.parse(value) : [];
  }

  async guardarAviso(aviso: Aviso): Promise<void> {
    const avisos = await this.obtenerAvisos();
    aviso.id = Date.now();
    avisos.push(aviso);
    await Preferences.set({ key: this.KEY, value: JSON.stringify(avisos) });
  }

  async eliminarAviso(id: number): Promise<void> {
    const avisos = await this.obtenerAvisos();
    const filtrados = avisos.filter(a => a.id !== id);
    await Preferences.set({ key: this.KEY, value: JSON.stringify(filtrados) });
  }
}
