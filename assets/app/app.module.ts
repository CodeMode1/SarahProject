import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { provide } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { HeaderComponent } from './header.component';
import { LogoComponent } from './header.logo.component';

@NgModule({
declarations: [AppComponent, HeaderComponent, LogoComponent], 
imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule],
bootstrap: [AppComponent],
providers: [provide(LocationStrategy, {useClass: HashLocationStrategy})]
})
export class AppModule {}
