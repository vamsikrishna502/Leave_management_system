import { Component, inject } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Button } from "primeng/button";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, PanelMenuModule, Button],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  private router = inject(Router);

  items: MenuItem[] = [

    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      routerLink: ['/dashboard']
    },

    {
      label: 'Employees',
      icon: 'pi pi-users',
      routerLink: ['/employees']
    },

    // {
    //   label: 'Leave Management',
    //   icon: 'pi pi-calendar',
    //   items: [
    //     {
    //       label: 'Apply Leave',
    //       icon: 'pi pi-file-edit',
    //       routerLink: ['/apply-leave']
    //     },
    //     {
    //       label: 'Leave History',
    //       icon: 'pi pi-history',
    //       routerLink: ['/leave-history']
    //     }
    //   ]
    // },
      {
        label: 'Leave Management',
        icon: 'pi pi-calendar',
        items: [
          {
            label: 'Apply Leave',
            icon: 'pi pi-file-edit',
            routerLink: ['/leave-apply']
          },
          {
            label: 'Leave History',
            icon: 'pi pi-history',
            routerLink: ['/leave-history']
          }
      ]
    },

    {
      label: 'Attendance',
      icon: 'pi pi-clock',
      routerLink: ['/attendance']
    },

    {
      label: 'Reports',
      icon: 'pi pi-chart-bar',
      routerLink: ['/reports']
    },

    {
      label: 'Settings',
      icon: 'pi pi-cog',
      routerLink: ['/settings']
    }

  ];

  logout(): void {

    // Remove JWT Token
    localStorage.removeItem('access_token');

    // Navigate to Login Page
    this.router.navigate(['/login']);

  }

}