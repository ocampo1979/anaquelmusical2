import { Component, OnInit } from '@angular/core';
import { DiscoService } from '../servicios/disco.service';

@Component({
  selector: 'app-disco',
  templateUrl: './disco.component.html',
  styleUrls: ['./disco.component.css']
})
export class DiscoComponent implements OnInit {
  disco: any[];
  constructor(private discoService: DiscoService) { }

  ngOnInit() {
    this.disco = this.discoService.getDisco();
  }

}
