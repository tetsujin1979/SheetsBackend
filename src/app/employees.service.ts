import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  url = '<web app url>'

  async getAllEmployees(): Promise<Employee[]> {
    const employees = await fetch(this.url);
    return (await employees.json()) ?? [];
  }
}
