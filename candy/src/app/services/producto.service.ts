import { Injectable } from '@angular/core';
import {  Firestore, collection, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Producto from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private firestore: Firestore) { }


  getProductos(): Observable<Producto[]> {
    const productoRef = collection(this.firestore, 'producto');
    return collectionData(productoRef, { idField: 'id' }) as Observable<Producto[]>;
  }

  getAlzadores(): Observable<Producto[]> {
    const productoRef = collection(this.firestore, 'alzadores');
    return collectionData(productoRef, { idField: 'id' }) as Observable<Producto[]>;
  }

  getBandejas(): Observable<Producto[]> {
    const productoRef = collection(this.firestore, 'bandejas');
    return collectionData(productoRef, { idField: 'id' }) as Observable<Producto[]>;
  }

  getCarros(): Observable<Producto[]> {
    const productoRef = collection(this.firestore, 'carros');
    return collectionData(productoRef, { idField: 'id' }) as Observable<Producto[]>;
  }

  getConjuntos(): Observable<Producto[]> {
    const productoRef = collection(this.firestore, 'conjuntos');
    return collectionData(productoRef, { idField: 'id' }) as Observable<Producto[]>;
  }

  getCubos(): Observable<Producto[]> {
    const productoRef = collection(this.firestore, 'cubos');
    return collectionData(productoRef, { idField: 'id' }) as Observable<Producto[]>;
  }

  getDecoraciones(): Observable<Producto[]> {
    const productoRef = collection(this.firestore, 'decoraciones');
    return collectionData(productoRef, { idField: 'id' }) as Observable<Producto[]>;
  }

  getEscaleras(): Observable<Producto[]> {
    const productoRef = collection(this.firestore, 'escaleras');
    return collectionData(productoRef, { idField: 'id' }) as Observable<Producto[]>;
  }

  getLetras(): Observable<Producto[]> {
    const productoRef = collection(this.firestore, 'letras');
    return collectionData(productoRef, { idField: 'id' }) as Observable<Producto[]>;
  }

  getMarcos(): Observable<Producto[]> {
    const productoRef = collection(this.firestore, 'marcos');
    return collectionData(productoRef, { idField: 'id' }) as Observable<Producto[]>;
  }

  getMesas(): Observable<Producto[]> {
    const productoRef = collection(this.firestore, 'mesas');
    return collectionData(productoRef, { idField: 'id' }) as Observable<Producto[]>;
  }

  getPizarras(): Observable<Producto[]> {
    const productoRef = collection(this.firestore, 'pizarras');
    return collectionData(productoRef, { idField: 'id' }) as Observable<Producto[]>;
  }

  getRepisas(): Observable<Producto[]> {
    const productoRef = collection(this.firestore, 'repisas');
    return collectionData(productoRef, { idField: 'id' }) as Observable<Producto[]>;
  }


 /* getCollectionParametro<categoriaProducto>(path: string, parametro: string, value: string ){
    const dataCollection: AngularFirestoreCollection<categoriaProducto>=
                this.firestore.collection<categoriaProducto>(path
                  , ref => ref.where(parametro, '==', value));
    return dataCollection.valueChanges();              

  }*/

 /* getProductosByCategoria(operador: '==', categoria: string){
    return this.firestore.collection('productos', ref => ref.where('categoriaProducto', operador, categoria));
  }*/

}
