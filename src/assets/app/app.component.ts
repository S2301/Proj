import { Component } from '@angular/core';
import { Employee } from './Models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string= 'Angular Framework';
  userDetails : Employee = {
    empId : 1,
    empName : 'Siri',
    empAddress : 'Davangere',
    empSalary : 45000,
    picture:""
  }

  OnClick = () => alert('Button was clicked')
}