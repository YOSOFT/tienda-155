import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductoProvider } from '../../providers/producto/producto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  productos = [];

  constructor(
    public navCtrl: NavController,
    private servicioProducto: ProductoProvider
    ) {

  }

  ionViewDidLoad(){
    this.servicioProducto.obtenerProductos().subscribe(
      (datos: any[]) => {
        this.productos = datos;
        console.log(this.productos);
      }
    );
  }
  irDetalle(producto){
    this.navCtrl.push('DetalleProductoPage', {miProducto: producto})
  }
}
