import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FortniteServiceProvider } from '../../providers/fortnite-service/fortnite-service';
import { HomePage } from '../home/home';

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
  @Component({

  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  partyForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public fortniteServiceProvider: FortniteServiceProvider) {

    this.partyForm = this.formBuilder.group({
      name: [''],
      players: [''],
      platforms: ['']
    });

  }


  submitForm(value: any): void {

    //console.log(value.name.toString());
    this.fortniteServiceProvider.addParty(value.name.toString(), value.players.toString(), value.platforms.toString()).subscribe(output => {

      console.log(output);
      
    })

    //this.fortniteServiceProvider.addParty(value.name.toString(), value.players.toString(), value.platforms.toString());
  }

  home(): void {

    this.navCtrl.setRoot(HomePage);

  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), 500)).then(() => console.log("..."));
  }

  created(): void {

    
    
    this.delay(3000).then(any => {
      this.navCtrl.setRoot(HomePage);
    });

  }



  

}
