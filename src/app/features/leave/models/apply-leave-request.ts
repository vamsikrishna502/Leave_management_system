export interface ApplyLeaveRequest {

  employee_id: number;

  leave_type_id: number;

  start_date: string;

  end_date: string;

  reason: string;

}