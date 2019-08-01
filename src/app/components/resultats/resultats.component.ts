import { Component, OnInit } from '@angular/core';
import { PersonneModel } from 'src/app/models/personne.model';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})


export class ResultatsComponent implements OnInit {
  t;
  constructor(private ps: PersonneService) {this.t = this.ps.getAllPersonnes(); }

  ngOnInit() {
    
    console.log(this.t);
  }
}
