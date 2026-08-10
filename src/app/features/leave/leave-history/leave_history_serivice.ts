import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiURL } from '../../../enviroments/environment';
import { LeaveHistoryModel } from './leave_history_model';

@Injectable({
  providedIn: 'root'
})
export class LeaveHistoryService {

  constructor(private http: HttpClient) {}

  getLeaveHistory(): Observable<LeaveHistoryModel[]> {

    return this.http.get<LeaveHistoryModel[]>(
      apiURL.apiUrl + '/leave/history'
    );

  }

}

