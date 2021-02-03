import { AuthService } from 'src/app/shared/services/auth.service';
import { ProgressBarService } from './../../services/progress-bar.service';
import { Component, OnInit } from '@angular/core';
import { NgProgress } from '@ngx-progressbar/core';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private progress: NgProgress, public progressBar: ProgressBarService, public authService: AuthService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.progressBar.progressRef = this.progress.ref('progressBar');
  }

  logout() {
    localStorage.removeItem('token');
    this.alertService.success("Deconectare!");
  }

}
