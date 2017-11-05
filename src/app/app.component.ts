import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Biblioteca de Discos en LP - Anaquel Musical';
  discos = [];

  model:any = {};
      
  addDisco():void{
      this.discos.push(this.model);
  }

  deleteDisco(i):void{
      this.discos.splice(i, 1);
  }
}
