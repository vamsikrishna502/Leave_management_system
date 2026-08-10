import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { LeaveHistoryService } from './leave_history_serivice';
import { LeaveHistoryModel } from './leave_history_model';

@Component({
  selector: 'app-leave-history',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    TagModule,
    CardModule,
    ButtonModule
  ],
  templateUrl: './leave-history.html',
  styleUrl: './leave-history.css'
})
export class LeaveHistory implements OnInit {

  leaveHistory: LeaveHistoryModel[] = [];

  constructor(
    private leaveHistoryService: LeaveHistoryService,
  ) {}

  ngOnInit(): void {

    this.loadLeaveHistory();
   

  }

//  showStatus(row: LeaveHistoryModel): void {

//   if (row.status === 'Approved') {
//     alert('Your leave has been approved.');
//   }
//   else if (row.status === 'Pending') {
//     alert('Your leave request is pending approval.');
//   }
//   else if (row.status === 'Rejected') {
//     alert('Your leave request has been rejected.');
//   }

// }

showStatus(): void {
  alert('Button clicked');
}

  loadLeaveHistory(): void {

  this.leaveHistoryService.getLeaveHistory().subscribe({

    next: (response) => {

      // console.log("API Response:", response);

      this.leaveHistory = response;

      // console.log("leaveHistory:", this.leaveHistory);

    },

    error: (error) => {

      console.error(error);

    }

  });

}

}