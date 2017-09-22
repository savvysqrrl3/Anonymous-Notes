import { Component } from '@angular/core';
import { NoteService } from './note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _noteService: NoteService) {
    this._noteService.Observer.subscribe((allNotes) => {
      this.allNotes = allNotes;
      console.log(this.allNotes);
    })
    this.getNotes();
   }

   getNotes(){
    this._noteService.retrieveAll()

   }

  title = 'Anonymous Notes';

  allNotes = [];
  
    newNote = {
      content: "",
    };
  
  formSend(){
    console.log("New note to send to DB:", this.newNote);
    this._noteService.addNote(this.newNote)
    this.newNote = {
      content: "",
    }
  }


}
