import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule, Routes } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule, MatSelectModule, MatInputModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { MenuComponent } from './components/menu/menu.component';
import { TestComponent } from './components/test/test.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { ResultatsComponent } from './components/resultats/resultats.component';
import { PersonneService } from './services/personne.service';

const routes: Routes = [
  ​{ path: '', component: AccueilComponent},
  ​{ path: 'acceuil', component: AccueilComponent},
  { path: 'test', component: TestComponent},
  { path: 'formulaire', component: FormulaireComponent},
  ​{ path: '', redirectTo: '/accueil', pathMatch: 'full'},
  { path: 'resultats', component: ResultatsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    TestComponent,
    FormulaireComponent,
    ResultatsComponent
  ],
  imports: [
    MatSidenavModule,
    [BrowserModule, FormsModule],
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatRadioModule,
    MatSliderModule,
    MatCardModule,
    MatDatepickerModule
  ],
  providers: [PersonneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
