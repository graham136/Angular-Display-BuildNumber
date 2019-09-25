import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BuildNumber';
  public version: string = environment.MajorBuild + "." + environment.MinorBuild + "." + environment.BuildNumber;
  public jsonVersion: string;
  constructor(public http: HttpClient) {
    this.getJSON().subscribe(data => {      
      this.jsonVersion = data.MajorBuild + "." + data.MinorBuild + "." + data.BuildNumber;
    });
  }

    public getJSON(): Observable<any> {
      return this.http.get("../assets/settings.json")
    }
}
