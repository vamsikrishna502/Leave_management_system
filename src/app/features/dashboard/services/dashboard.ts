import { inject, Injectable } from '@angular/core';
import { apiURL } from '../../../enviroments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private http = inject(HttpClient);

  getDashboardSummary() {
    return this.http.get<any>(`${apiURL.apiUrl}/dashboard/summary`);
  }

  getRecentLeaveRequests() {
    return this.http.get<any[]>(`${apiURL.apiUrl}/dashboard/recent-leaves`);
  }
}
