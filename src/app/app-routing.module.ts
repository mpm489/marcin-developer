import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { ImprintComponent } from './imprint/imprint.component';
import { StartComponent } from './start/start.component';





const routes: Routes = [
  { path: '', component: StartComponent},
  { path: 'imprint', component: ImprintComponent },
  { path: 'data', component: DataComponent },

];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
