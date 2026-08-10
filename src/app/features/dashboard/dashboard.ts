import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

import { DashboardService } from './services/dashboard';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    TableModule,
    TagModule,
    ButtonModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  summary = {
    totalEmployees: 0,
    present: 0,
    onLeave: 0,
    pending: 0
  };

  leaveRequests: any[] = [];

  constructor(
    private dashboardService: DashboardService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('Dashboard Component Initialized');
    this.loadDashboardData();
  }

  private loadDashboardData(): void {

    // Dashboard Summary
    this.dashboardService.getDashboardSummary().subscribe({

      next: (response: any) => {

        console.log('Summary Response', response);

        this.summary = {
          totalEmployees: response.total_employees,
          present: response.present,
          onLeave: response.on_leave,
          pending: response.pending_requests
        };

        this.cdr.detectChanges();

      },

      error: (err: any) => {
        console.error('Summary API Error', err);
      }

    });


    // Recent Leave Requests
    this.dashboardService.getRecentLeaveRequests().subscribe({

      next: (response: any) => {

        console.log('Recent Leave Response', response);

        this.leaveRequests = response.map((item: any) => ({
          employeeName: item.employee_name,
          leaveType: item.leave_type,
          fromDate: item.from_date,
          toDate: item.to_date,
          status: item.status
        }));

        this.cdr.detectChanges();

      },

      error: (err: any) => {
        console.error('Recent Leave API Error', err);
      }

    });

  }

}


