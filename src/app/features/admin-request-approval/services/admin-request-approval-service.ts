import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminLeaveRequest } from './../models/admin-request-approval-model';

@Injectable({
  providedIn: 'root'
})
export class AdminRequestApprovalService {

  private apiUrl = 'http://127.0.0.1:8000/leave';

  constructor(private http: HttpClient) {}

  // Get all submitted leave requests
  getLeaveRequests(): Observable<AdminLeaveRequest[]> {

    return this.http.get<AdminLeaveRequest[]>(
      `${this.apiUrl}/requests`
    );
  }


  // Approve leave
  approveLeave(
    leaveRequestId: number
  ): Observable<any> {

    return this.http.put(
      `${this.apiUrl}/approve/${leaveRequestId}`,
      {}
    );
  }


  // Reject leave
  rejectLeave(
    leaveRequestId: number,
    remarks: string
  ): Observable<any> {

    return this.http.put(
      `${this.apiUrl}/reject/${leaveRequestId}`,
      {
        remarks: remarks
      }
    );
  }

}