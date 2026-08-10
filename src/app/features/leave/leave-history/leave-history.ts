import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { LeaveHistoryService } from './leave_history_serivice';
import { LeaveHistoryModel } from './leave_history_model';

@Component({
  selector: 'app-leave-history',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule
  ],
  templateUrl: './leave-history.html',
  styleUrl: './leave-history.css'
})
export class LeaveHistory implements OnInit {

  leaveHistory: LeaveHistoryModel[] = [];

  constructor(
    private leaveHistoryService: LeaveHistoryService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadLeaveHistory();
  }

  loadLeaveHistory(): void {

    this.leaveHistoryService.getLeaveHistory().subscribe({

      next: (response: LeaveHistoryModel[]) => {

        console.log('API Response:', response);
        console.log('Number of records:', response.length);

        this.leaveHistory = [...response];

        this.cdr.detectChanges();
      },

      error: (error) => {

        console.error(
          'Leave History API Error:',
          error
        );

      }

    });
  }

  showStatus(row: LeaveHistoryModel): void {

    if (row.status === 'Approved') {

      alert(
        `Leave approved for ${row.employee_name}`
      );

    } else if (row.status === 'Pending') {

      alert(
        `Leave request is pending for ${row.employee_name}`
      );

    } else if (row.status === 'Rejected') {

      alert(
        `Leave request was rejected for ${row.employee_name}`
      );

    }

  }
}