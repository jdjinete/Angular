import { FirebaseService } from './services/firebase.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app David Jinete Fuck Yeah!';


constructor(private _firebaseService: FirebaseService){
//this._firebaseService.createList();
}


}
