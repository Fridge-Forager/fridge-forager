import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin'
// import { ModalModule } from './sharedComponents/modal';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './coreComponents/sidebar/sidebar.component';
import { NavBarComponent } from './sharedComponents/nav-bar/nav-bar.component';
import { RecipesDisplayComponent } from './sharedComponents/recipes-display/recipes-display.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoritesDisplayComponent } from './favorites-display/favorites-display.component';
import { ModalComponent } from './modals/modal/modal.component';
import { LoginModalComponent } from './modals/login-modal/login-modal.component';
import { RecipeState } from './sharedComponents/recipe.state'

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavBarComponent,
    RecipesDisplayComponent,
    DashboardComponent,
    FavoritesDisplayComponent,
    ModalComponent,
    LoginModalComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsModule.forRoot([
      RecipeState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
