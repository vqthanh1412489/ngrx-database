import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store'
import { DELETEWORD, UPDATEWORD } from '../ngrx/wordReducer';

import { WordService } from '../word.service';
import { Word, WordStore } from '../types';
import { UPDATE } from '@ngrx/store/src/reducer_manager';


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
      type: UPDATEWORD,
      _id
    }))
  }

}
