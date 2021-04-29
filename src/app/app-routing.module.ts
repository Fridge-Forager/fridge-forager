import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './coreComponents/sidebar/sidebar.component';
import { NavBarComponent } from './sharedComponents/nav-bar/nav-bar.component';

const routes: Routes = [
  { path: '', component: SidebarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
