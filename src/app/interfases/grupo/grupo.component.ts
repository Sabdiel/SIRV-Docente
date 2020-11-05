import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.scss']
})
export class GrupoComponent implements OnInit {

  item:any = {
    name:""
  }

  items: any;

  editarItem:any = {
    name:''
  }

  constructor(firestore: AngularFirestore, private servicio:AuthService) {

    this.servicio.lista().subscribe(item=>{
      this.items = item;
    })
    this.items = firestore.collection('items').valueChanges();
  }


  ngOnInit(){
  }

  agregar(){
    this.servicio.agregarItem(this.item);
    this.item.name = '';
  }

  eliminar(item){
    this.servicio.eliminarItem(item);
  }

  editar(item){
    this.editarItem = item;
  }

  agregarItemEditado(){
    this.servicio.EditarItem(this.editarItem);
  }

}
