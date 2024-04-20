import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastContoller: ToastController) { }

  async presentToast( message: string, delay:number) {

    const toast = await this.toastContoller.create({
      message: message,
      duration: delay,
      color: 'danger',
      cssClass: 'toast-wrapper'
      
    });
    toast.present()
    
  }
}
