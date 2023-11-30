import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  formContato = this.fb.group({
    nome: ["",[
      Validators.minLength(4),
      Validators.required
    ]],
    assunto: ["",[
      Validators.required,
      Validators.minLength(10)
    ]],
    telefone:["",[
      Validators.required,
      Validators.minLength(11)
    ]],
    email: ["",[
      Validators.email,
      Validators.required
    ]],
    mensagem: ["",[
      Validators.minLength(20),
      Validators.required
    ]]


  })
  constructor(
    private fb: FormBuilder
  ){}

  enviarFormulario(){
    alert("A mensagem foi enviada")
    this.formContato.reset()
  }
}
