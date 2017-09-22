import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {  BehaviorSubject } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class NoteService {

    allNotes = [];
    Observer = new BehaviorSubject(this.allNotes);

  
    constructor(private _http: Http, private _route: ActivatedRoute) {}
  
    addNote(newNote){
      console.log("Arrived at service and data is", newNote)
     this._http.post(`/notes`, newNote)
     .subscribe(
       (response) => {
         console.log("returned to Angular service");
         this.retrieveAll();

        
       },
       (err) => {
         console.log(err)
       }
     )
      
    }

    retrieveAll() {
      return this._http.get(`/notes`)
      .subscribe (
        (response) => {
          console.log("success", response.json() );
          this.allNotes = response.json();
          this.allNotes.reverse();
          this.Observer.next(this.allNotes);
        },
        (err) => {
          console.log("failed", err )
        }
      )
  
    }
}
