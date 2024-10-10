import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  { path: '', redirectTo: '/sobreNosotros', pathMatch: 'full' },
  { path: 'sobreNosotros', component: SobreNosotrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
