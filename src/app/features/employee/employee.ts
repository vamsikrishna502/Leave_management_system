import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeService } from '././../../services/employee';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './employee.html',
  styleUrls: ['./employee.css']
})
export class Employee implements OnInit {
  [x: string]: any;

  employees: any[] = [];

  constructor(@Inject(EmployeeService) private employeeService: EmployeeService,  private cdr: ChangeDetectorRef) {}

  

  ngOnInit(): void {
  console.log('Employee Component Loaded');
  this.loadEmployees();
}

  loadEmployees() {
  this.employeeService.getEmployees().subscribe({
    next: (data) => {
      console.log("2. API Response", new Date().toLocaleTimeString());
      console.log("API Response:", data);
      this.employees = data;
      this.cdr.detectChanges(); 
      console.log("Employees:", this.employees);
    },
    error: (err) => {
      console.error(err);
    }
  });
}


}