import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import {AngularFireModule} from 'angularfire2';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

export const firebaseConfig={
  apiKey: "AIzaSyCpIlaSngUlPjraFnCZwbU0DCe-yHCLLEI",
    authDomain: "listings-42ab5.firebaseapp.com",
    databaseURL: "https://listings-42ab5.firebaseio.com",
    projectId: "listings-42ab5",
    storageBucket: "",
    messagingSenderId: "814945628598"
}




const appRoutes: Routes =[
{path:'',component:HomeComponent},

{path:'listings',component:ListingsComponent},

{path:'add-listing',component:AddListingComponent},

{path:'edit-listing',component:EditListingComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
