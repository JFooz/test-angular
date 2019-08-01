import { PersonneModel } from '../models/personne.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonneService {

  resultat: PersonneModel[] = new Array<PersonneModel>();

  savePersonne(nom: string, prenom: string, surnom: string, sexe: string, taille: number, dateDeNaissance: Date) {
    const pm = new PersonneModel(nom, prenom, surnom, sexe, taille, dateDeNaissance);
    this.resultat.push(pm);
    console.log(this.resultat[0]);
  }

  getAllPersonnes() {
    return this.resultat;
  }

}
