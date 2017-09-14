import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReversepipePipe } from './reversepipe.pipe';
import { SortpipePipe } from './sortpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReversepipePipe,
    SortpipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
