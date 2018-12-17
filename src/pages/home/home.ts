import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { StatviewPage } from '../statview/statview';
import { CreatePage } from '../create/create';

import { FortniteServiceProvider } from '../../providers/fortnite-service/fortnite-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  stats: any;
  

  constructor(public navCtrl: NavController, public fortniteServiceProvider: FortniteServiceProvider) {

    fortniteServiceProvider.getStats().subscribe(stats => {
      console.log(stats);
      this.stats = stats;
      //console.log(stats[0].party.toString());
      //this.parties[0] = "test";
      
    })


    
  }

  log(event):void {
    //this.storage.set('party', event.srcElement.innerText.toString());
    
    
    //this.storage.get('party').then((val) => {
    //  console.log("storage set to :"+val);
    //});

    this.fortniteServiceProvider.setParty(event.srcElement.innerText.toString());
    this.navCtrl.setRoot(StatviewPage);

  }

  add():void {
    this.navCtrl.setRoot(CreatePage);
  }

  del(event):void {

    this.fortniteServiceProvider.delParty(event.srcElement.id.toString()).subscribe(output => {

      console.log(output);

    })
    //this.navCtrl.setRoot(this.navCtrl.getActive().component);
    this.delay(3000).then(any => {
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    });
  }


  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), 500)).then(() => console.log("..."));
  }

 
  

} 
