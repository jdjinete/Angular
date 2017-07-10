import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "app/services/firebase.service";

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  lista: any[];

  constructor(private _firebaseService: FirebaseService) {
    this._firebaseService.getListings()
      .subscribe(data => {
        this.lista = data;
        console.log(this.lista)
      });
      
  }

  ngOnInit() {
  }

}
