import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomShadersComponent } from './custom-shaders/custom-shaders.component';

const routes: Routes = [
  {path:'shaders', component: CustomShadersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
