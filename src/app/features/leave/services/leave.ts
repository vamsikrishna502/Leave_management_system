import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { apiURL } from '../../../enviroments/environment';
import { ApplyLeaveRequest } from '../models/apply-leave-request';
import { ApplyLeaveResponse } from '../models/apply-leave-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Leave {

  constructor(private http: HttpClient) {}

  sendLeaveRequest(
    payload: ApplyLeaveRequest
  ): Observable<ApplyLeaveResponse> {

    return this.http.post<ApplyLeaveResponse>(
      `${apiURL.apiUrl}/leave/apply`,
      payload
    );

  }

}
