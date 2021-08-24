import { Component, OnInit } from '@angular/core';
import { DataDbService } from 'src/app/services/data-db.service';
import { FormControl, FormGroup } from '@angular/forms';
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
      email: new FormControl(''),
      mensagem: new FormControl(''),
      name: new FormControl(''),
    });
  }

  constructor(private bancoService: DataDbService) {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void {}


  limparFormulario(){
    this.contactForm.reset();
  }

  salvar(){
    const newContact = {
      name: 'uxa',
      email: 'uxa@gmail.com',
      message: 'oi sua linda'
    } as unknown as Menssagem

    this.bancoService.saveMensagem(newContact);
    alert('E-mail enviado com sucesso!');
  }
}
