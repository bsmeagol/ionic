import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { FortniteServiceProvider } from '../../providers/fortnite-service/fortnite-service';
import { HomePage } from '../home/home';


/**
 * Generated class for the StatviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statview',
  templateUrl: 'statview.html',
})
export class StatviewPage {
  partystats: any;
  partyname: string;
  constructor(public navCtrl: NavController, public fortniteServiceProvider: FortniteServiceProvider) {

    fortniteServiceProvider.getPartyStats().subscribe(partystats => {
      console.log(partystats);
      this.partystats = partystats;
      console.log(partystats[0].name.toString());
      //this.parties[0] = "test";
    })

    this.partyname = fortniteServiceProvider.getParty();


  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad StatviewPage');
  }

  home(): void {
    
    this.navCtrl.setRoot(HomePage);

  }

}
