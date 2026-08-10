import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { TextareaModule } from 'primeng/textarea';
import { Leave } from './../services/leave';
import { ApplyLeaveRequest } from '../models/apply-leave-request';

@Component({
  selector: 'app-apply-leave',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    SelectModule,
    DatePickerModule,
    TextareaModule
  ],
  templateUrl: './apply-leave.html',
  styleUrl: './apply-leave.css'
})
export class ApplyLeave {

  constructor(private leaveService: Leave) {}

  employees = [
    { label: 'Rahul Sharma', value: 1 },
    { label: 'Priya Reddy', value: 2 },
    { label: 'Vamsi Krishna', value: 3 }
  ];

  leaveTypes = [
    { label: 'Casual Leave', value: 1 },
    { label: 'Sick Leave', value: 2 },
    { label: 'Earned Leave', value: 3 }
  ];

  leave = {
    employee_id: null,
    leave_type_id: null,
    from_date: null,
    to_date: null,
    reason: ''
  };

  resetForm(): void {
  this.leave = {
    employee_id: null,
    leave_type_id: null,
    from_date: null,
    to_date: null,
    reason: ''
  };
}

applyLeave() {

  const payload: ApplyLeaveRequest = {

    employee_id: this.leave.employee_id!,

    leave_type_id: this.leave.leave_type_id!,

    start_date: this.leave.from_date
      ? new Date(this.leave.from_date).toISOString().split('T')[0]
      : '',

    end_date: this.leave.to_date
      ? new Date(this.leave.to_date).toISOString().split('T')[0]
      : '',

    reason: this.leave.reason

  };

  console.log(payload);

  this.leaveService.sendLeaveRequest(payload).subscribe({

    next: (response) => {

      console.log(response);
      alert(response.message);
      this.resetForm();

    },

    error: (err) => {

      console.error(err);

    }

  });

}

}