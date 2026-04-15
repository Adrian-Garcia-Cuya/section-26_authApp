import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth-service';

@Component({
  selector: 'app-dashboard-layout',
  standalone: false,
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
})
export class DashboardLayout {
  private authService = inject(AuthService);

  public user = computed(() => this.authService.currentUser());

  // get user() {
  //   return this.authService.currentUser();
  // }

  onLogout() {
    this.authService.logout();
  }
}
