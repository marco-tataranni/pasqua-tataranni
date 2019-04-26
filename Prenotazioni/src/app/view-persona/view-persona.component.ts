import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-view-persona',
  templateUrl: './view-persona.component.html',
  styleUrls: ['./view-persona.component.css']
})
export class ViewPersonaComponent implements OnInit {

   @Input() persona: Persona;
  constructor() { }

  ngOnInit() {
  }

}
