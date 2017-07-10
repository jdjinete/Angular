import { Listings } from '../../Listing';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
	listings: FirebaseListObservable<any>;

	constructor(private af: AngularFireDatabase) { }

	listaTest: any[] =[{nombre:"prueba"}]

	createList(): void {
		this.af.list('/listings').push(this.listaTest);
	}

	getListings(): FirebaseListObservable<any> {

		return this.af.list('/listings');
	}

}