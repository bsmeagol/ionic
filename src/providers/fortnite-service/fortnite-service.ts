import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the FortniteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FortniteServiceProvider {
  party: string;

  constructor(public http: HttpClient) {
   // console.log('Hello FortniteServiceProvider Provider');
  }

  getStats() {
    //const headers = new HttpHeaders().set('TRN-Api-Key', 'd3d9938c-66ac-4db3-9045-838ddf2cc655');
    return this.http.get('https://mclauncher.000webhostapp.com/fortnite-party-tracker-backend/respond_parties.php').map((res: Response) => res);
  }

  getPartyStats() {

    //this.party = 'bsmeagol alone';
    //this.storage.get('party').then((val) => {
    //  console.log('http://127.0.0.1:8001/ionic_app_backend/respond_players.php?party=' + val);
    //  return this.http.get('http://127.0.0.1:8001/ionic_app_backend/respond_players.php?party=' + val).map((res: Response) => res);
    //});
    //console.log('http://127.0.0.1:8001/ionic_app_backend/respond_players.php?party=' + this.party);
    return this.http.get('https://mclauncher.000webhostapp.com/fortnite-party-tracker-backend/respond_players.php?party=' + this.party).map((res: Response) => res);
    
  }

  setParty(data: string) {
    this.party = data;
  }

  getParty() {
    return this.party;
  }

  addParty(name: string, players: string, platforms: string) {
    return this.http.get('https://mclauncher.000webhostapp.com/fortnite-party-tracker-backend/add_party.php?name=' + name + '&players=' + players + '&platforms=' + platforms).map((res: Response) => res);
    //console.log('adding name=' + name + '&players=' + players + '&platforms=' + platforms)
  }

  delParty(id: string) {
    console.log('https://mclauncher.000webhostapp.com/fortnite-party-tracker-backend/delete_party.php?id=' + id);
    
    return this.http.get('https://mclauncher.000webhostapp.com/fortnite-party-tracker-backend/delete_party.php?id=' + id).map((res: Response) => res);
    
  }

}
