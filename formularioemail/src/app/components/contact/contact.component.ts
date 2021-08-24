import { Component, OnInit } from '@angular/core';
import { DataDbService } from 'src/app/services/data-db.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Menssagem } from 'src/app/models/menssagem';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  createFormGroup() {
    return new FormGroup({
      emailControl: new FormControl('', [Validators.email,Validators.required]),
      menssagemControl: new FormControl('',[Validators.required,Validators.minLength(6)]),
      nameControl: new FormControl('',[Validators.required,Validators.minLength(6)]),
    });
  }

  constructor(private bancoService: DataDbService) {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void {}

  limparFormulario() {
    this.contactForm.reset();
  }

  salvar() {
    const newContact = {
      name: this.contactForm.value.nameControl,
      email: this.contactForm.value.emailControl,
      message: this.contactForm.value.menssagemControl,
    } as unknown as Menssagem;
    if (newContact) {
      this.bancoService.saveMensagem(newContact);
      alert('E-mail enviado com sucesso!');
      this.limparFormulario();
    }
  }
}
