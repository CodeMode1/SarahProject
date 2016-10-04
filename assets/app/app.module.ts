import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { provide } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/header.logo.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './login/home.component';

import { routing } from './app.routes';

//auth
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin.component';
import { LogoutComponent } from './auth/logout.component';
import { SignupComponent } from './auth/signup.component';

@NgModule({
declarations: [AppComponent, HeaderComponent, LogoComponent, LoginComponent, HomeComponent, SigninComponent, LogoutComponent, SignupComponent, AuthComponent], 
imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, routing],
bootstrap: [AppComponent],
providers: [provide(LocationStrategy, {useClass: HashLocationStrategy})]
})
export class AppModule {}
