import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Persona } from './persona';
import { Persone } from './mock-persone';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prenotazioni';
  myForm: FormGroup;
  persone =Persone;
  personaSelezionata:Persona;

   constructor(fb: FormBuilder) {
    this.myForm = fb.group({'nome': ['Nome', Validators.required], 'cognome': ['Cognome', Validators.required], 'indirizzo': ['Indirizzo', Validators.required], 'email': ['Email', Validators.required], 'telefono': ['3333333333', Validators.required], 'data': ['gg/mm/2019', Validators.required], 'ora': ['Ora', Validators.required]
    });
  }

  ngOnInit() {
  }

      onSubmit(value: string): void {

    let persona: Persona = new Persona();
    persona.nome = this.myForm.controls['nome'].value;
    persona.cognome = this.myForm.controls['cognome'].value;
    persona.indirizzo = this.myForm.controls['indirizzo'].value;
    persona.email = this.myForm.controls['email'].value;
    persona.telefono = Number(this.myForm.controls['telefono'].value);
    persona.data = this.myForm.controls['data'].value;
    persona.ora = this.myForm.controls['ora'].value;

    this.persone.push(persona);
  }
  onSelect(persona:Persona):void{
    this.personaSelezionata=persona;
  }


}
