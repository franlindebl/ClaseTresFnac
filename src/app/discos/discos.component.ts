import { Component, OnInit } from '@angular/core';
import { DiscoInfo } from '../interfaces/MusicInterfaces';

@Component({
  selector: 'app-discos',
  templateUrl: './discos.component.html',
  styleUrls: ['./discos.component.css']
})
export class DiscosComponent implements OnInit {
  public discosList: DiscoInfo[] = [{
      titulo: 'My new album',
      autor: 'Bob Dylan',
      duracion: 200
    }, {
      titulo: 'Other album',
      autor: 'Amy Winehouse',
      duracion: 400
  }, {
      titulo: 'Nostalgia',
      autor: 'La M.O.D.A.',
      duracion: 120
  }];

  constructor() { }

  ngOnInit() {
  }
}

