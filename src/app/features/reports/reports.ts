import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    TagModule,
    CardModule,
    ButtonModule
  ],
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export class Reports {

  selectedMonth = 'August 2026';

  reportList = [

    {
      employeeId: 'EMP001',
      employeeName: 'Rahul Sharma',
      department: 'IT',
      totalWorkingDays: 22,
      presentDays: 19,
      absentDays: 1,
      leaveDays: 2,
      lateDays: 3,
      overtimeHours: 6,
      attendancePercentage: 86.36
    },

    {
      employeeId: 'EMP002',
      employeeName: 'Priya Reddy',
      department: 'HR',
      totalWorkingDays: 22,
      presentDays: 18,
      absentDays: 2,
      leaveDays: 2,
      lateDays: 4,
      overtimeHours: 3,
      attendancePercentage: 81.82
    },

    {
      employeeId: 'EMP003',
      employeeName: 'Anil Kumar',
      department: 'Finance',
      totalWorkingDays: 22,
      presentDays: 20,
      absentDays: 1,
      leaveDays: 1,
      lateDays: 1,
      overtimeHours: 8,
      attendancePercentage: 90.91
    },

    {
      employeeId: 'EMP004',
      employeeName: 'Vamsi Krishna',
      department: 'IT',
      totalWorkingDays: 22,
      presentDays: 17,
      absentDays: 2,
      leaveDays: 3,
      lateDays: 5,
      overtimeHours: 2,
      attendancePercentage: 77.27
    },

    {
      employeeId: 'EMP005',
      employeeName: 'Suresh Reddy',
      department: 'Operations',
      totalWorkingDays: 22,
      presentDays: 21,
      absentDays: 0,
      leaveDays: 1,
      lateDays: 1,
      overtimeHours: 10,
      attendancePercentage: 95.45
    },

    {
      employeeId: 'EMP006',
      employeeName: 'Sneha Rani',
      department: 'Marketing',
      totalWorkingDays: 22,
      presentDays: 19,
      absentDays: 2,
      leaveDays: 1,
      lateDays: 2,
      overtimeHours: 5,
      attendancePercentage: 86.36
    },

    {
      employeeId: 'EMP007',
      employeeName: 'Kiran Kumar',
      department: 'IT',
      totalWorkingDays: 22,
      presentDays: 20,
      absentDays: 0,
      leaveDays: 2,
      lateDays: 2,
      overtimeHours: 7,
      attendancePercentage: 90.91
    },

    {
      employeeId: 'EMP008',
      employeeName: 'Divya Rao',
      department: 'Finance',
      totalWorkingDays: 22,
      presentDays: 16,
      absentDays: 3,
      leaveDays: 3,
      lateDays: 6,
      overtimeHours: 1,
      attendancePercentage: 72.73
    },

    {
      employeeId: 'EMP009',
      employeeName: 'Arjun Reddy',
      department: 'Operations',
      totalWorkingDays: 22,
      presentDays: 18,
      absentDays: 1,
      leaveDays: 3,
      lateDays: 4,
      overtimeHours: 4,
      attendancePercentage: 81.82
    },

    {
      employeeId: 'EMP010',
      employeeName: 'Lakshmi Devi',
      department: 'HR',
      totalWorkingDays: 22,
      presentDays: 21,
      absentDays: 1,
      leaveDays: 0,
      lateDays: 1,
      overtimeHours: 9,
      attendancePercentage: 95.45
    },

    {
      employeeId: 'EMP011',
      employeeName: 'Naveen Kumar',
      department: 'IT',
      totalWorkingDays: 22,
      presentDays: 18,
      absentDays: 2,
      leaveDays: 2,
      lateDays: 5,
      overtimeHours: 3,
      attendancePercentage: 81.82
    },

    {
      employeeId: 'EMP012',
      employeeName: 'Meena Sharma',
      department: 'Marketing',
      totalWorkingDays: 22,
      presentDays: 20,
      absentDays: 1,
      leaveDays: 1,
      lateDays: 2,
      overtimeHours: 6,
      attendancePercentage: 90.91
    }
  ];


  get totalEmployees(): number {
    return this.reportList.length;
  }


  get totalPresent(): number {
    return this.reportList.reduce(
      (sum, employee) => sum + employee.presentDays,
      0
    );
  }


  get totalAbsent(): number {
    return this.reportList.reduce(
      (sum, employee) => sum + employee.absentDays,
      0
    );
  }


  get totalLeave(): number {
    return this.reportList.reduce(
      (sum, employee) => sum + employee.leaveDays,
      0
    );
  }


  get totalLate(): number {
    return this.reportList.reduce(
      (sum, employee) => sum + employee.lateDays,
      0
    );
  }


  get totalOvertime(): number {
    return this.reportList.reduce(
      (sum, employee) => sum + employee.overtimeHours,
      0
    );
  }


  get averageAttendance(): string {

    if (!this.reportList.length) {
      return '0.00';
    }

    const total = this.reportList.reduce(
      (sum, employee) =>
        sum + employee.attendancePercentage,
      0
    );

    return (total / this.reportList.length).toFixed(2);
  }


  getAttendanceSeverity(
    percentage: number
  ): 'success' | 'warn' | 'danger' {

    if (percentage >= 90) {
      return 'success';
    }

    if (percentage >= 80) {
      return 'warn';
    }

    return 'danger';
  }


  viewReport(row: any): void {

    alert(
      `Employee Report\n\n` +
      `Employee ID: ${row.employeeId}\n` +
      `Employee Name: ${row.employeeName}\n` +
      `Department: ${row.department}\n\n` +
      `Working Days: ${row.totalWorkingDays}\n` +
      `Present: ${row.presentDays}\n` +
      `Absent: ${row.absentDays}\n` +
      `Leave: ${row.leaveDays}\n` +
      `Late: ${row.lateDays}\n` +
      `Overtime: ${row.overtimeHours} hrs\n` +
      `Attendance: ${row.attendancePercentage}%`
    );
  }


  exportReport(): void {

    alert('Report export functionality will be added later.');
  }

}