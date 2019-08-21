import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  @Input() titulo: string = 'No tengo titulo';
  @Input() texto: string = 'No tengo texto';
  @Input() imagenURL: string = '#';

  constructor() { }

  ngOnInit() {
  }

}
