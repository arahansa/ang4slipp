import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  test = 'oneway';

  namelist = ['arahansa', '강용', 'lucas'];


  evtBinding(): void {
    console.log("로그..");
    alert("헬로 월드?");
  }

}
