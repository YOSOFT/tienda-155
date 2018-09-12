import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductoProvider } from '../../providers/producto/producto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private servicioProducto: ProductoProvider
    ) {

  }

  ionViewDidLoad(){
    this.servicioProducto.obtenerProductos();
  }

}
