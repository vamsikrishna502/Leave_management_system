import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    TagModule
  ],
  templateUrl: './attendance.html',
  styleUrl: './attendance.css'
})
export class AttendanceComponent {

  attendanceList = [
  {
    employeeId: 'EMP001',
    employeeName: 'Rahul Sharma',
    date: '2026-08-01',
    checkIn: '09:05 AM',
    checkOut: '06:10 PM',
    totalHours: '9h 05m',
    status: 'Present'
  },
  {
    employeeId: 'EMP002',
    employeeName: 'Priya Reddy',
    date: '2026-08-01',
    checkIn: '09:15 AM',
    checkOut: '06:00 PM',
    totalHours: '8h 45m',
    status: 'Present'
  },
  {
    employeeId: 'EMP003',
    employeeName: 'Anil Kumar',
    date: '2026-08-01',
    checkIn: '-',
    checkOut: '-',
    totalHours: '0h',
    status: 'Absent'
  },
  {
    employeeId: 'EMP004',
    employeeName: 'Vamsi Krishna',
    date: '2026-08-01',
    checkIn: '08:55 AM',
    checkOut: '06:05 PM',
    totalHours: '9h 10m',
    status: 'Present'
  },
  {
    employeeId: 'EMP001',
    employeeName: 'Rahul Sharma',
    date: '2026-08-02',
    checkIn: '09:20 AM',
    checkOut: '06:00 PM',
    totalHours: '8h 40m',
    status: 'Late'
  },
  {
    employeeId: 'EMP002',
    employeeName: 'Priya Reddy',
    date: '2026-08-02',
    checkIn: '09:00 AM',
    checkOut: '05:55 PM',
    totalHours: '8h 55m',
    status: 'Present'
  },
  {
    employeeId: 'EMP003',
    employeeName: 'Anil Kumar',
    date: '2026-08-02',
    checkIn: '09:10 AM',
    checkOut: '06:00 PM',
    totalHours: '8h 50m',
    status: 'Present'
  },
  {
    employeeId: 'EMP004',
    employeeName: 'Vamsi Krishna',
    date: '2026-08-02',
    checkIn: '-',
    checkOut: '-',
    totalHours: '0h',
    status: 'Absent'
  },
  {
    employeeId: 'EMP001',
    employeeName: 'Rahul Sharma',
    date: '2026-08-03',
    checkIn: '09:00 AM',
    checkOut: '06:00 PM',
    totalHours: '9h 00m',
    status: 'Present'
  },
  {
    employeeId: 'EMP002',
    employeeName: 'Priya Reddy',
    date: '2026-08-03',
    checkIn: '09:35 AM',
    checkOut: '06:10 PM',
    totalHours: '8h 35m',
    status: 'Late'
  },
  {
    employeeId: 'EMP003',
    employeeName: 'Anil Kumar',
    date: '2026-08-03',
    checkIn: '08:50 AM',
    checkOut: '05:50 PM',
    totalHours: '9h 00m',
    status: 'Present'
  },
  {
    employeeId: 'EMP004',
    employeeName: 'Vamsi Krishna',
    date: '2026-08-03',
    checkIn: '09:05 AM',
    checkOut: '06:00 PM',
    totalHours: '8h 55m',
    status: 'Present'
  },
  {
    employeeId: 'EMP001',
    employeeName: 'Rahul Sharma',
    date: '2026-08-04',
    checkIn: '-',
    checkOut: '-',
    totalHours: '0h',
    status: 'Absent'
  },
  {
    employeeId: 'EMP002',
    employeeName: 'Priya Reddy',
    date: '2026-08-04',
    checkIn: '09:10 AM',
    checkOut: '06:05 PM',
    totalHours: '8h 55m',
    status: 'Present'
  },
  {
    employeeId: 'EMP003',
    employeeName: 'Anil Kumar',
    date: '2026-08-04',
    checkIn: '09:25 AM',
    checkOut: '06:00 PM',
    totalHours: '8h 35m',
    status: 'Late'
  },
  {
    employeeId: 'EMP004',
    employeeName: 'Vamsi Krishna',
    date: '2026-08-04',
    checkIn: '08:55 AM',
    checkOut: '06:15 PM',
    totalHours: '9h 20m',
    status: 'Present'
  },
  {
    employeeId: 'EMP001',
    employeeName: 'Rahul Sharma',
    date: '2026-08-05',
    checkIn: '09:05 AM',
    checkOut: '06:00 PM',
    totalHours: '8h 55m',
    status: 'Present'
  },
  {
    employeeId: 'EMP002',
    employeeName: 'Priya Reddy',
    date: '2026-08-05',
    checkIn: '-',
    checkOut: '-',
    totalHours: '0h',
    status: 'Absent'
  },
  {
    employeeId: 'EMP003',
    employeeName: 'Anil Kumar',
    date: '2026-08-05',
    checkIn: '09:00 AM',
    checkOut: '05:45 PM',
    totalHours: '8h 45m',
    status: 'Present'
  },
  {
    employeeId: 'EMP004',
    employeeName: 'Vamsi Krishna',
    date: '2026-08-05',
    checkIn: '09:30 AM',
    checkOut: '06:10 PM',
    totalHours: '8h 40m',
    status: 'Late'
  }
];

  getSeverity(status: string): 'success' | 'warn' | 'danger' | 'info' {
    switch (status) {
      case 'Present':
        return 'success';
      case 'Late':
        return 'warn';
      case 'Absent':
        return 'danger';
      default:
        return 'info';
    }
  }
}