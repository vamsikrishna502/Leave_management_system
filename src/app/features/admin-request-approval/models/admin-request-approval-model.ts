export interface AdminLeaveRequest {
  leave_request_id: number;
  employee_id: number;
  employee_name: string;
  leave_name: string;
  from_date: string;
  to_date: string;
  total_days: number;
  reason: string | null;
  status: string;
  submitted_at: string;
}