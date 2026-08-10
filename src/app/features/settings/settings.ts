import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    InputTextModule,
    ToggleSwitchModule,
    SelectModule,
    ButtonModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {

  profile = {
    employeeId: 'EMP004',
    employeeName: 'Vamsi Krishna',
    email: 'vamsi@example.com',
    phone: '9876543210',
    department: 'IT',
    designation: 'Software Developer'
  };

  notifications = {
    email: true,
    leaveUpdates: true,
    attendanceReminder: true,
    systemUpdates: false
  };

  attendance = {
    checkInReminder: true,
    checkOutReminder: true,
    lateArrivalNotification: true
  };

  leaveSettings = {
    leaveApprovalNotification: true,
    leaveBalanceReminder: true
  };

  system = {
    language: 'English',
    timezone: 'Asia/Kolkata',
    dateFormat: 'DD-MM-YYYY'
  };

  languages = [
    { label: 'English', value: 'English' },
    { label: 'Telugu', value: 'Telugu' },
    { label: 'Hindi', value: 'Hindi' }
  ];

  timezones = [
    { label: 'India - Asia/Kolkata', value: 'Asia/Kolkata' },
    { label: 'UTC', value: 'UTC' },
    { label: 'US - Eastern Time', value: 'America/New_York' }
  ];

  dateFormats = [
    { label: 'DD-MM-YYYY', value: 'DD-MM-YYYY' },
    { label: 'MM-DD-YYYY', value: 'MM-DD-YYYY' },
    { label: 'YYYY-MM-DD', value: 'YYYY-MM-DD' }
  ];

  constructor(
    private messageService: MessageService
  ) {}

  saveProfile(): void {
    console.log(this.profile);

    this.showSuccess('Profile saved successfully.');
  }

  saveNotifications(): void {
    console.log(this.notifications);

    this.showSuccess('Notification settings saved.');
  }

  saveAttendanceSettings(): void {
    console.log(this.attendance);

    this.showSuccess('Attendance settings saved.');
  }

  saveLeaveSettings(): void {
    console.log(this.leaveSettings);

    this.showSuccess('Leave settings saved.');
  }

  saveSystemSettings(): void {
    console.log(this.system);

    this.showSuccess('System settings saved.');
  }

  changePassword(): void {
    alert('Change password functionality will be added later.');
  }

  showSuccess(message: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message
    });
  }
}