import {Component, OnInit} from '@angular/core';
import {
  Http,
  Headers,
  RequestOptions,
  Response
} from '@angular/http';
import {Member} from './member';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  members: Member[];

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  ngOnInit(): void {
    console.log('init..');
    this.getMemberList();
  }

  getMemberList(): void{
    this.http.get('http://localhost:8081/members')
      .subscribe(
      (res: Response) => {
        console.log('res :', res);
        console.log('res json :', res.json());
        console.log('res json :', res.json()._embedded.members);
        this.members = res.json()._embedded.members;
      });
  }

  addMember(name: string): void {
    console.log('name : ', name);

    this.http.post('http://localhost:8081/members', JSON.stringify({name: name}), {headers: this.headers})
      .subscribe(
      (res: Response) => {
          console.log('res : ', res);
          this.members.push(res.json() as Member);
      });

  }




}
