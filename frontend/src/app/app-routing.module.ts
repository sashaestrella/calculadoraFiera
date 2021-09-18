import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'calculadora', pathMatch: 'full' },
  { path: 'calculadora', component: CalculadoraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
