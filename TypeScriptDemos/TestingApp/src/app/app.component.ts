import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';
  //data of UR Component...
  //Functions, members will be created here....
  fruits: string[] =["Apple","Mango","Orange"];
  process(){
    alert("Te sting 123");
  }
}
