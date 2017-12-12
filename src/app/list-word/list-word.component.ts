import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Word, WordStore } from '../types';
import { WordService } from '../word.service';
import { GETALLWORD } from '../ngrx/wordReducer';


@Component({
  selector: 'app-list-word',
  templateUrl: './list-word.component.html',
  styleUrls: ['./list-word.component.css'],
  providers: [WordService]
})
export class ListWordComponent implements OnInit {
  words : Observable<Word>;
  constructor(
    private store: Store<WordStore>,
    private wordService: WordService
  ) { }

  ngOnInit() {
    this.words = this.store.select('wordReducer');
    this.wordService.getAllWord()
    .then(data => this.store.dispatch({
      type: GETALLWORD,
      words: data.words
    })) 
  }

}
