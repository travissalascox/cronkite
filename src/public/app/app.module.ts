import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Import Components
import { AppComponent } from './app.component';

// Import Services

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }