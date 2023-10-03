import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit{
   ngOnInit(): void {
     this.empObj = {
      empId : 1,
      empName :'Siri',
      empAddress : 'Davangere',
      empSalary : 45000,
      picture: "../assets/images/pic4.png"
     }
   }
   empObj!:Employee
}
