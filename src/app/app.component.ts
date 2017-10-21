import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Biblioteca de Discos en LP - Anaquel Musical';
  msg: string = '';
  discos = [];

  model:any = {};
  model2:any = {};
    
  addDisco():void{
    var answer = confirm('Estás seguro de querer agregar el LP???');
    if(answer){
    this.discos.push(this.model);
    this.msg = 'Disco Agregado';
    }
  }

  deleteDisco(i):void{
    var answer = confirm('Estás seguro de querer borrar el LP???');
    if(answer){
      this.discos.splice(i, 1);
      this.msg = 'Disco Eliminado';
    }
  }
  
  closeAlert():void{
    this.msg = '';
  }
}
