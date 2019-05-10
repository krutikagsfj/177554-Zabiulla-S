import { AppComponent } from './app.component';
import { PlayComponent } from './Play/play.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SuccessComponent } from './success/success.component';
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        SuccessComponent,
        PlayComponent
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],

    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }

