import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store'
import { DELETEWORD, TOGGLE } from '../ngrx/wordReducer';
import { SETWORD } from '../ngrx/wordUpdateReducer';

import { WordService } from '../word.service';
import { Word, WordStore, WordStoreUpdate } from '../types';


@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
  providers:[WordService]
})
export class WordComponent implements OnInit {
  @Input() word: Word;

  constructor(
    private store: Store<WordStore>,
    private storeUpdate: Store<WordStoreUpdate>,
    private wordService : WordService
  ) { }

  ngOnInit() {
    
  }
  delete(){
    this.wordService.deleteWord(this.word._id)
    .then(res => this.store.dispatch({
      type: DELETEWORD,
      _id: res.word._id
    }));
  }

  toggle(){
    const { _id, en, vn, isMemorized } = this.word;
    this.wordService.updateWord(_id, en, vn, !isMemorized)
    .then(data => this.store.dispatch({
      type: TOGGLE,
      _id
    }));
  }

  edit(){
    this.storeUpdate.dispatch({
      type: SETWORD,
      word: this.word
    });
  }
}
