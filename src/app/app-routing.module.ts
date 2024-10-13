import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { AplicationFormComponent } from './aplication-form/aplication-form.component';
const routes: Routes = [
  { path: '', redirectTo: '/sobreNosotros', pathMatch: 'full' },
  { path: 'sobreNosotros', component: SobreNosotrosComponent },
  { path: "aplitacionForm", component: AplicationFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
