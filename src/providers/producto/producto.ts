import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProductoProvider Provider');
  }

  obtenerProductos(){
    this.http.get('assets/data.json')
      .subscribe(
        (datos) => console.log(datos),
        (error) => console.log(error),
        () => console.log("completo")
      );
  }

}
