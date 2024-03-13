import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeesService } from './employees.service';
import { Employee } from './employee';

@Component({
  imports: [CommonModule],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent {
  employees: Employee[] = [];

  constructor(employeesService: EmployeesService) {
    employeesService.getAllEmployees()
                    .then((employees: Employee[]) => {
      this.employees = employees;
    });
  }
}
