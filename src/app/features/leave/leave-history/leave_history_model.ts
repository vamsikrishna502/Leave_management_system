export interface LeaveHistoryModel {
  employee_id: number;

  employee_name: string;

  leave_request_id: number;

  leave_name: string;

  from_date: string;

  to_date: string;

  total_days: number;

  reason: string;

  status: string;

}