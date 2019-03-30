import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  //Observables are newer version of Promise that is implemented under a sp module called rxjs of the Angular Framework.
  private url : string ='../assets/data.json';
  constructor(private http: HttpClient) { 
    //inject the data into the system...
    
  //This function returns a promise object which end users will evaluate using subscribe....
    }

    getRecords() {
      //return new Observable<any>(this.customData);
      return this.http.get(this.url);
    }
  }

