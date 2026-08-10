import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login').then(m => m.Login)
  },
  {
    path: '',
    loadComponent: () => import('./layout/layout').then(m => m.Layout),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard)
      },
      {
        path: 'employees',
        loadComponent: () => import('./features/employee/employee').then(m => m.Employee)
      },
      {
        path: 'leave-apply',
        loadComponent: () =>
          import('./features/leave/apply-leave/apply-leave').then(
            m => m.ApplyLeave
          )
      },
      {
          path: 'leave-history',
          loadComponent: () =>
            import('./features/leave/leave-history/leave-history').then(
              m => m.LeaveHistory
            )
      },
      {
        path: 'attendance',
        loadComponent: () =>
          import('./features/attendance/attendance').then(m => m.AttendanceComponent)   
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./features/reports/reports')
            .then(m => m.Reports)
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./features/settings/settings')
            .then(m => m.Settings)
      }
    ]
  }
];
