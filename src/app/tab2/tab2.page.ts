import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel
  ]
})
export class Tab2Page {

  agrupaciones = [
    {
      nombre: 'Virgen de los Reyes',
      descripcion: 'Agrupación Musical de Sevilla.'
    },
    {
      nombre: 'La Sentencia',
      descripcion: 'Agrupación Musical de Jerez de la Frontera.'
    },
    {
      nombre: 'San Juan Evangelista',
      descripcion: 'Banda de Cornetas y Tambores de Sevilla.'
    },
    {
      nombre: 'Santa María Magdalena de Arahal',
      descripcion: 'Agrupación Musical de Arahal.'
    },
    {
      nombre: 'Nuestra Señora de la Encarnación',
      descripcion: 'Agrupación Musical de Sevilla.'
    },
    {
      nombre: 'Nuestro Padre Jesús de la Redención',
      descripcion: 'Agrupación Musical de Sevilla.'
    }
  ];

  constructor() {}

}