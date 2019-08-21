import { Component, OnInit, Input } from '@angular/core';
import { DiscoInfo } from '../interfaces/MusicInterfaces';

@Component({
  selector: 'app-disco',
  templateUrl: './disco.component.html',
  styleUrls: ['./disco.component.css']
})
export class DiscoComponent implements OnInit {

  // @Input() titulo: string = 'No tengo titulo';
  // @Input() autor: string = 'No tengo autor';
  // @Input() duracion: number = 0;
  @Input() disco: DiscoInfo = null;

  constructor() { }

  ngOnInit() {
    // console.log(this.disco.canciones);
  }
}

