import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../app/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  employees: Employee[] = [];

  constructor( private http: HttpClient ) { }


  ngOnInit(): void {
    this.http.get('assets\employees.json').subscribe(data => this.employees = data["employees"]);


    

  }





}
