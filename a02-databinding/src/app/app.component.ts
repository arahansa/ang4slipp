import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  test = 'oneway';
  showing: boolean = true;
  namelist = ['arahansa', '강용', 'lucas'];

  myStyle = {color:'blue', 'font-weight':800, 'font-size' : this.showing ? '2rem' : '1rem'}

  evtBinding(): void {
    console.log("로그..");
    alert("헬로 월드?");
  }

}
