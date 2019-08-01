import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PersonneModel } from 'src/app/models/personne.model';
import { PersonneService } from 'src/app/services/personne.service';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  form: FormGroup;

  constructor(private fB: FormBuilder, private ps: PersonneService) {

    this.form = this.fB.group({
      nom: '',
      prenom: '',
      surnom: '',
      sexe: '',
      taille: '',
      dateDeNaissance: ''
    });

  }

  onSubmit() {
    console.log('ok');

    const nom = this.form.value.nom;
    const prenom = this.form.value.prenom;
    const surnom = this.form.value.surnom;
    const sexe = this.form.value.sexe;
    const taille = this.form.value.taille;
    const dateDeNaissance = this.form.value.dateDeNaissance;
    this.ps.savePersonne(nom, prenom, surnom, sexe, taille, dateDeNaissance);


  }

  ngOnInit() {
  }

}

