import { NgModule } from '@angular/core';
import  {BrowserModule } from '@angular/platform-browser';
import  { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './signup.component';

@NgModule({
    imports : [
        BrowserModule,
        FormsModule
    ],
    declarations :[
        AppComponent,
        LoginComponent,
        SignUpComponent
    ],
    bootstrap : [AppComponent]
})
export class AppModule {}