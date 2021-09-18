import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'calculadora', pathMatch: 'full' },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'error', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
