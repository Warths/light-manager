import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation/navigation.component';
import { ProfileComponent } from './component/navigation/profile/profile.component';
import { LoginComponent } from './component/navigation/login/login.component';
import { OptionsButtonComponent } from './component/navigation/options-button/options-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProfileComponent,
    LoginComponent,
    OptionsButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
