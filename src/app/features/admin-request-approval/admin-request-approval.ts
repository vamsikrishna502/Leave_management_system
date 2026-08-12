import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

import { AdminRequestApprovalService }
  from './services/admin-request-approval-service';

import { AdminLeaveRequest }
  from './models/admin-request-approval-model';


@Component({
  selector: 'app-admin-request-approval',

  standalone: true,

  imports: [
    CommonModule,
    TableModule,
    CardModule,
    ButtonModule,
    TagModule
  ],

  templateUrl: './admin-request-approval.html',

  styleUrl: './admin-request-approval.css'
})
export class AdminRequestApproval implements OnInit {

  // =========================================
  // ALL REQUESTS
  // =========================================

  leaveRequests: AdminLeaveRequest[] = [];


  // =========================================
  // REQUESTS BY STATUS
  // =========================================

  pendingRequests: AdminLeaveRequest[] = [];

  approvedRequests: AdminLeaveRequest[] = [];

  rejectedRequests: AdminLeaveRequest[] = [];


  constructor(
    private leaveService: AdminRequestApprovalService,
    private cdr: ChangeDetectorRef
  ) {}


  // =========================================
  // COMPONENT INITIALIZATION
  // =========================================

  ngOnInit(): void {

    this.loadLeaveRequests();

  }


  // =========================================
  // LOAD ALL LEAVE REQUESTS
  // =========================================

  loadLeaveRequests(): void {

    this.leaveService
      .getLeaveRequests()
      .subscribe({

        next: (response) => {

          console.log(
            'API RESPONSE:',
            response
          );


          // Store all requests

          this.leaveRequests = response;


          console.log(
            'TOTAL REQUESTS:',
            this.leaveRequests.length
          );


          // =================================
          // FILTER PENDING
          // =================================

          this.pendingRequests =
            response.filter(
              row => row.status === 'Pending'
            );


          // =================================
          // FILTER APPROVED
          // =================================

          this.approvedRequests =
            response.filter(
              row => row.status === 'Approved'
            );


          // =================================
          // FILTER REJECTED
          // =================================

          this.rejectedRequests =
            response.filter(
              row => row.status === 'Rejected'
            );


          // Console verification

          console.log(
            'Pending:',
            this.pendingRequests
          );

          console.log(
            'Approved:',
            this.approvedRequests
          );

          console.log(
            'Rejected:',
            this.rejectedRequests
          );


          // Update Angular view

          this.cdr.detectChanges();

        },


        error: (error) => {

          console.error(
            'API ERROR:',
            error
          );

          this.cdr.detectChanges();

        }

      });

  }


  // =========================================
  // APPROVE LEAVE
  // =========================================

  approveLeave(
    row: AdminLeaveRequest
  ): void {

    const confirmApprove = confirm(
      `Approve leave request for ${row.employee_name}?`
    );


    if (!confirmApprove) {

      return;

    }


    this.leaveService
      .approveLeave(
        row.leave_request_id
      )
      .subscribe({

        next: (response) => {

          console.log(
            'APPROVE RESPONSE:',
            response
          );


          alert(
            'Leave approved successfully.'
          );


          // Reload all requests.
          // This will move the row from
          // Pending → Approved.

          this.loadLeaveRequests();

        },


        error: (error) => {

          console.error(
            'APPROVE ERROR:',
            error
          );


          alert(
            'Failed to approve leave.'
          );

        }

      });

  }


  // =========================================
  // REJECT LEAVE
  // =========================================

  rejectLeave(
    row: AdminLeaveRequest
  ): void {

    const remarks = prompt(
      `Enter rejection reason for ${row.employee_name}:`
    );


    if (!remarks) {

      return;

    }


    this.leaveService
      .rejectLeave(
        row.leave_request_id,
        remarks
      )
      .subscribe({

        next: (response) => {

          console.log(
            'REJECT RESPONSE:',
            response
          );


          alert(
            'Leave rejected successfully.'
          );


          // Reload all requests.
          // This will move the row from
          // Pending → Rejected.

          this.loadLeaveRequests();

        },


        error: (error) => {

          console.error(
            'REJECT ERROR:',
            error
          );


          alert(
            'Failed to reject leave.'
          );

        }

      });

  }

}