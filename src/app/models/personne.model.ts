export class PersonneModel {

  _sexe: string;
  _nom: string;
  _prenom: string;
  _surnom: string;
  _dateDeNaissance: Date;
  _taille: number;

  constructor(nom: string, prenom: string, surnom: string, sexe: string, taille: number, dateDeNaissance: Date) {

    this._nom = nom;
    this._prenom = prenom;
    this._surnom = surnom;
    this._sexe = sexe;
    this._taille = taille;
    this._dateDeNaissance = dateDeNaissance;
  }

}
