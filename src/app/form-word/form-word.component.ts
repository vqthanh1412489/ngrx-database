import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store'


import { WordService } from '../word.service';
import { ADDWORD } from '../ngrx/wordReducer';
import { Word, WordStore } from '../types';


@Component({
  selector: 'app-form-word',
  templateUrl: './form-word.component.html',
  styleUrls: ['./form-word.component.css'],
  providers: [WordService]
})
export class FormWordComponent implements OnInit {
  formAddWord: FormGroup;
  constructor(
    private fb: FormBuilder,
    private wordService: WordService,
    private store: Store<WordStore>
  ) { }

  ngOnInit() {
    this.formAddWord = this.fb.group({
      en: ['', Validators.required],
      vn: ['', Validators.required]
    });
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
