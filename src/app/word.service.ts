import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class WordService {

  url = 'http://localhost:3009/word';
  constructor(private http: Http) { }

  getAllWord(){
    return this.http.get(`${this.url}`)
    .toPromise()
    .then(res => res.json());
  }

  addWord(word){
    const body = JSON.stringify(word);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.url}`, body, {headers})
    .toPromise()
    .then(res => res.json());
  }

  deleteWord(id){
    return this.http.delete(`${this.url}/${id}`)
    .toPromise()
    .then(res => res.json());
  }

  updateWord(_id:string, en:string, vn:string, isMemorized:boolean){
    const body = JSON.stringify({ id: _id, en, vn, isMemorized });
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.url}`, body, {headers})
    .toPromise()
    .then(res => res.json());
  }

}
