import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { ListWordComponent } from './list-word/list-word.component';
import { FormWordComponent } from './form-word/form-word.component';

import { wordReducer } from './ngrx/wordReducer';
import { wordUpdateReducer } from './ngrx/wordUpdateReducer';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    ListWordComponent,
    FormWordComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ wordReducer, wordUpdateReducer }),
    HttpModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
