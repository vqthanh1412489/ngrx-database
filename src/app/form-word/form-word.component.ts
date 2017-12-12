import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { WordService } from '../word.service';
import { ADDWORD } from '../ngrx/wordReducer';
import { Word, WordStore, WordStoreUpdate } from '../types';


@Component({
  selector: 'app-form-word',
  templateUrl: './form-word.component.html',
  styleUrls: ['./form-word.component.css'],
  providers: [WordService]
})
export class FormWordComponent implements OnInit {
  formAddWord: FormGroup;
  word: Observable<Word>;
  constructor(
    private fb: FormBuilder,
    private wordService: WordService,
    private store: Store<WordStore>,
    private storeUpdate: Store<WordStoreUpdate>
  ) { }

  ngOnInit() {
    this.formAddWord = this.fb.group({
      en: ['', Validators.required],
      vn: ['', Validators.required]
    });

    this.word = this.storeUpdate.select('wordUpdateReducer');
    console.log(this.word);
  }

  onSubmit(){
    const { value } = this.formAddWord;
    this.wordService.addWord({ en: value.en, vn: value.vn })
    .then(data => this.store.dispatch({
      type: ADDWORD,
      word: data.word
    }));
  }
}
