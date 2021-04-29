import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './coreComponents/sidebar/sidebar.component';
import { NavBarComponent } from './sharedComponents/nav-bar/nav-bar.component';
import { RecipesDisplayComponent } from './sharedComponents/recipes-display/recipes-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavBarComponent,
    RecipesDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
